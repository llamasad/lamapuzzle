package com.llamas.puzzle_websocket_server.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.models.StrokeDTO;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;
import com.llamas.puzzle_websocket_server.service.DrawingUtilityFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;
import org.springframework.web.reactive.socket.WebSocketMessage;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Sinks;

@Component("ReactiveWebSocketHandler")
public class ReactiveWebSocketHandler implements WebSocketHandler {

    private final StrokeStackManager strokeStackManager;
    private final DrawingUtilityFactory drawingUtilityFactory;
    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;

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
        if (lobbyId == null) {
            lobbyId = "default"; // fallback
        }

        Sinks.Many<String> lobbySink = lobbyManager.getOrCreateLobby(lobbyId);
        LobbyService lobbyService = new LobbyService(lobbySink);

        System.out.println("Lobby Sink: " + lobbySink);
        System.out.println("Lobby Service: " + lobbyService);
        System.out.println("Session: " + session);

        // When a client sends a message, publish it to the appropriate lobby topic
        Mono<Void> receive = session.receive()
            .doOnSubscribe(s -> System.out.println("Subscribed to receive stream"))
            .map(WebSocketMessage::getPayloadAsText)
            .map(payload -> {
                try {
                    return objectMapper.readValue(payload, StrokeDTO.class);
                } catch (Exception e) {
                    throw new RuntimeException("Error parsing JSON to StrokeDTO", e);
                }
            })
            .doOnNext(strokeDTO -> {
                // Process the StrokeDTO object
                System.out.println("Received StrokeDTO: " + strokeDTO);
                // Example: Add a stroke to the stack
                // Stroke<DrawingUtility> stroke = convertToStroke(strokeDTO);
                // strokeStackManager.getStrokeStackForUser(userId).addStroke(stroke);
                lobbyService.publishEvent(strokeDTO);
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
            .doOnTerminate(() -> System.out.println("WebSocket session terminated"))
            .then();
    }
} 