package com.llamas.puzzle_websocket_server.handler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtility;
import com.llamas.puzzle_websocket_server.model.Status;
import com.llamas.puzzle_websocket_server.model.Stroke;
import com.llamas.puzzle_websocket_server.model.Vector2D;
import com.llamas.puzzle_websocket_server.model.Vector2DDTO;
import com.llamas.puzzle_websocket_server.model.Vector2DDTOWithStatus;
import com.llamas.puzzle_websocket_server.service.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import reactor.core.publisher.Mono;
import reactor.core.publisher.Sinks;

@Component("ReactiveWebSocketHandler")
public class ReactiveWebSocketHandler implements WebSocketHandler {

    private final StrokeStackManager strokeStackManager;
    private final DrawingUtilityFactory drawingUtilityFactory;
    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;
    private final Map<String, List<Vector2D>> sessionTemporaryPoints = new HashMap<>();

    public ReactiveWebSocketHandler(StrokeStackManager strokeStackManager, DrawingUtilityFactory drawingUtilityFactory, LobbyManager lobbyManager, ObjectMapper objectMapper) {
        this.strokeStackManager = strokeStackManager;
        this.drawingUtilityFactory = drawingUtilityFactory;
        this.lobbyManager = lobbyManager;
        this.objectMapper = objectMapper;
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        // Extract the lobby ID from the URI (e.g., /ws/{lobbyId})
        String path = session.getHandshakeInfo().getUri().getPath();
        String lobbyId = path.substring(path.lastIndexOf('/') + 1);
        System.out.println("Lobby ID: " + lobbyId); 
        System.out.println("Path: " + path);
//        if (lobbyId == null) {
//            lobbyId = "default"; // fallback
//        }

        Sinks.Many<String> lobbySink = lobbyManager.getOrCreateLobby(lobbyId);
        LobbyService lobbyService = new LobbyService(lobbySink);

        System.out.println("Lobby Sink: " + lobbySink);
        System.out.println("Lobby Service: " + lobbyService);
        System.out.println("Session: " + session);

        // Initialize temporary points list for this session
        sessionTemporaryPoints.put(session.getId(), new ArrayList<>());

        // When a client sends a message, publish it to the appropriate lobby topic
        Mono<Void> receive = session.receive()
            .doOnSubscribe(s -> System.out.println("Subscribed to receive stream"))
            .map(WebSocketMessage::getPayloadAsText)
            .map(this::parsePayload)
            .doOnNext(dto -> {
                try {
                    handleDto(session, dto, lobbyService,lobbyId);
                } catch (JsonProcessingException e) {
                    throw new RuntimeException(e);
                }
            })
            .doOnError(error -> System.err.println("Error in receive: " + error.getMessage()))
            .doOnComplete(() -> System.out.println("Receive stream completed"))
            .doOnCancel(() -> System.out.println("Receive stream cancelled"))
            .then();

        Mono<Void> send = session.send(
            lobbyService.getLobbyEvents()
                .doOnSubscribe(s -> System.out.println("Subscribed to send stream"))
                .doOnNext(msg -> System.out.println("Sending message: " + msg))
                .doOnError(error -> System.err.println("Error in send: " + error.getMessage()))
                .map(session::textMessage)
        ).doOnCancel(() -> System.out.println("Send stream cancelled"));

        return Mono.zip(send, receive)
            .doOnError(error -> System.err.println("Error in WebSocket handling: " + error.getMessage()))
            .doOnTerminate(() -> {
                System.out.println("WebSocket session terminated");
                sessionTemporaryPoints.remove(session.getId());
                //re
            })
            .then();
    }

    private Object parsePayload(String payload) {
        System.out.println("Payload: " + payload);
        try {
            if (payload.contains("status")) {    
                return objectMapper.readValue(payload, Vector2DDTOWithStatus.class);
            } else {
                return objectMapper.readValue(payload, Vector2DDTO.class);
            }
        } catch (Exception e) {
            System.err.println("Error parsing JSON: " + e.getMessage());
            // e.printStackTrace();
            throw new RuntimeException("Error parsing JSON", e);        }
    }

    private void handleDto(WebSocketSession session, Object dto, LobbyService lobbyService, String lobbyId) throws JsonProcessingException {
        List<Vector2D> temporaryPoints = sessionTemporaryPoints.get(session.getId());

        if (dto instanceof Vector2DDTOWithStatus) {
            Vector2DDTOWithStatus vector2DDTOWithStatus = (Vector2DDTOWithStatus) dto;
            temporaryPoints.add(vector2DDTOWithStatus.toVector2D());

            if (vector2DDTOWithStatus.getStatus() == Status.END) {
                DrawingUtility drawingUtility = drawingUtilityFactory.getDrawingUtility(vector2DDTOWithStatus.getToolType(), vector2DDTOWithStatus.getColor(), vector2DDTOWithStatus.getThickness());
                Stroke<DrawingUtility> stroke =(Stroke<DrawingUtility>) drawingUtility.draw(temporaryPoints);
                strokeStackManager.getStrokeStackForRoom(lobbyId).addStroke(stroke);
                temporaryPoints.clear(); 
            }

            lobbyService.publishEvent(objectMapper.writeValueAsString(vector2DDTOWithStatus));
        } else if (dto instanceof Vector2DDTO) {
            Vector2DDTO vector2DDTO = (Vector2DDTO) dto;
            temporaryPoints.add(vector2DDTO.toVector2D());
            lobbyService.publishEvent(objectMapper.writeValueAsString(vector2DDTO));
        }
    }
}