package com.llamas.puzzle_websocket_server.handler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.command.Command;
import com.llamas.puzzle_websocket_server.command.CommandFactory;
import com.llamas.puzzle_websocket_server.command.DrawingCommand;
import com.llamas.puzzle_websocket_server.command.RoleChangeCommand;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.model.Action;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.model.RoleDTO;
import com.llamas.puzzle_websocket_server.model.Vector2D;
import com.llamas.puzzle_websocket_server.model.Vector2DDTO;
import com.llamas.puzzle_websocket_server.model.Vector2DDTOWithStatus;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import reactor.core.publisher.Mono;

@Component("ReactiveWebSocketHandler")
public class ReactiveWebSocketHandler implements WebSocketHandler {

    private final StrokeStackManager strokeStackManager;
    private final DrawingUtilityFactory drawingUtilityFactory;
    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;
    private final CommandFactory commandFactory;
    private final Map<String, List<Vector2D>> sessionTemporaryPoints;

    public ReactiveWebSocketHandler(StrokeStackManager strokeStackManager, DrawingUtilityFactory drawingUtilityFactory, LobbyManager lobbyManager, ObjectMapper objectMapper) {
        this.strokeStackManager = strokeStackManager;
        this.drawingUtilityFactory = drawingUtilityFactory;
        this.lobbyManager = lobbyManager;
        this.sessionTemporaryPoints = new HashMap<>();
        this.objectMapper = objectMapper;
        this.commandFactory = new CommandFactory(lobbyManager, drawingUtilityFactory, strokeStackManager, objectMapper, sessionTemporaryPoints);
        
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        // Extract the lobby ID from the URI (e.g., /ws/{lobbyId})
        String path = session.getHandshakeInfo().getUri().getPath();
        String lobbyId = path.substring(path.lastIndexOf('/') + 1);
        System.out.println("Lobby ID: " + lobbyId); 
        System.out.println("Path: " + path);

        LobbyService lobbyService = new LobbyService(lobbyManager.getOrCreateLobby(lobbyId).getSink());

        System.out.println("Lobby Service: " + lobbyService);
        System.out.println("Session: " + session);

        Mono<Void> receive = session.receive()
            .doOnSubscribe(s -> System.out.println("Subscribed to receive stream"))
            .map(WebSocketMessage::getPayloadAsText)
            .flatMap(payload -> {
                Map<String, Object> actionAndData = extractActionAndData(payload);
                Action action = Action.valueOf((String) actionAndData.get("action"));
                Object data = actionAndData.get("data");
                
                Command<?> command = commandFactory.getCommand(action);
                if (command instanceof RoleChangeCommand) {
                    RoleDTO roleDTO = objectMapper.convertValue(data, RoleDTO.class);
                    return ((RoleChangeCommand) command).execute(session, roleDTO, lobbyService);
                } else if (command instanceof DrawingCommand) {
                    if (data instanceof Map && ((Map<?, ?>) data).containsKey("status")) {
                        Vector2DDTOWithStatus vector2DDTOWithStatus = objectMapper.convertValue(data, Vector2DDTOWithStatus.class);
                        return ((DrawingCommand) command).execute(session, vector2DDTOWithStatus, lobbyService);
                    } else {
                        Vector2DDTO vector2DDTO = objectMapper.convertValue(data, Vector2DDTO.class);
                        return ((DrawingCommand) command).execute(session, vector2DDTO, lobbyService);
                    }
                }
                return Mono.error(new IllegalArgumentException("Unknown command type"));
            })
            .doOnError(error -> System.err.println("Error in receive: " + error.getMessage()))
            .doOnComplete(() -> System.out.println("Receive stream completed"))
            .doOnCancel(() -> System.out.println("Receive stream cancelled"))
            .then();

        Mono<Void> send = session.send(
            lobbyService.getLobbyEvents()
                .filter(msg -> !isDrawingEvent(msg) || !PlayerRole.DRAWER.equals(lobbyManager.getLobby(lobbyId).getPlayers().get(session.getId()).getRole())) // Filter out drawing events for "draw" role
                .doOnSubscribe(s -> System.out.println("Subscribed to send stream"))
                .doOnNext(msg -> System.out.println("Sending message: " + msg))
                .doOnError(error -> System.err.println("Error in send: " + error.getMessage()))
                .map(session::textMessage)
        ).doOnCancel(() -> System.out.println("Send stream cancelled"));

        return Mono.zip(send, receive)
            .doOnError(error -> System.err.println("Error in WebSocket handling: " + error.getMessage()))
            .doOnTerminate(() -> {
                System.out.println("WebSocket session terminated");
                removeSession(session.getId(), lobbyId);
            })
            .then();
    }

    // Clear when session is closed  
    public void removeSession(String sessionId, String lobbyId) {
        sessionTemporaryPoints.remove(sessionId);
        lobbyManager.removePlayer(lobbyId, sessionId);
        
    }

    private boolean isDrawingEvent(String msg) {
        // Implement logic to determine if the message is a drawing event
        // For example, you can check if the message contains specific keywords or fields
        return msg.contains("drawing");
    }

    private Map<String, Object> extractActionAndData(String payload) {
        // Implement logic to extract action and data from payload
        // For example, you can use a JSON parser to extract the "action" and "data" fields
        // Here, we assume the payload contains an "action" and "data" field
        try {
            return objectMapper.readValue(payload, Map.class);
        } catch (Exception e) {
            throw new RuntimeException("Error extracting action and data from payload", e);
        }
    }
}