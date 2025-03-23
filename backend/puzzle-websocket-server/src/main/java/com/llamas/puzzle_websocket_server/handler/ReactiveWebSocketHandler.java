package com.llamas.puzzle_websocket_server.handler;

import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.command.ChatAndAnswerCommand;
import com.llamas.puzzle_websocket_server.command.Command;
import com.llamas.puzzle_websocket_server.command.CommandFactory;
import com.llamas.puzzle_websocket_server.command.DrawingCommand;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.model.Action;
import com.llamas.puzzle_websocket_server.model.ChatDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.model.Vector2DDTO;
import com.llamas.puzzle_websocket_server.model.Vector2DDTOWithStatus;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import reactor.core.publisher.Mono;

@Component("ReactiveWebSocketHandler")
public class ReactiveWebSocketHandler implements WebSocketHandler {

    private final StrokeStackManager strokeStackManager;
    private final DrawingUtilityFactory drawingUtilityFactory;
    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;
    private final CommandFactory commandFactory;

    public ReactiveWebSocketHandler(StrokeStackManager strokeStackManager, DrawingUtilityFactory drawingUtilityFactory, LobbyManager lobbyManager, ObjectMapper objectMapper , CommandFactory commandFactory) {
        this.strokeStackManager = strokeStackManager;
        this.drawingUtilityFactory = drawingUtilityFactory;
        this.lobbyManager = lobbyManager;
        this.objectMapper = objectMapper;
        this.commandFactory = commandFactory;        
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        String path = session.getHandshakeInfo().getUri().getPath();
        String suffix = path.substring(path.lastIndexOf('/') + 1);
        final String lobbyId = suffix.isEmpty() ? lobbyManager.getPublicLobby().getId() : suffix;
    
        Lobby lobby = lobbyManager.getLobby(lobbyId);
    
        if (lobby == null) {
            return session.send(Mono.just(session.textMessage("{\"error\": \"Lobby not found: " + lobbyId + "\"}")))
                .then(Mono.error(new IllegalArgumentException("Lobby not found: " + lobbyId)));
        }
    
        LobbyEvent lobbyEvent = new LobbyEvent(lobby.getSink());
    
        Mono<Void> receive = session.receive()
            .doOnSubscribe(s -> System.out.println("Subscribed to receive stream"))
            .map(WebSocketMessage::getPayloadAsText)
            .flatMap(payload -> {
                try {
                    System.out.println("Received payload: " + payload);
                    Map<String, Object> actionAndData = extractActionAndData(payload);
                    Action action = Action.valueOf((String) actionAndData.get("action"));
                    Object data = actionAndData.get("data");
    
                    System.out.println("Action: " + action);
                    System.out.println("Data: " + data);
    
                    Command<?> command = commandFactory.getCommand(action);
                    if (command == null) {
                        return sendError(session, "Unknown command type: " + action);
                    }
    
                    if (command instanceof ChatAndAnswerCommand) {
                        ChatDTO chatDTO = objectMapper.convertValue(data, ChatDTO.class);
                        return ((ChatAndAnswerCommand) command).execute(session, chatDTO, lobbyEvent, lobbyId);
                    } else if (command instanceof DrawingCommand) {
                        if (data instanceof Map && ((Map<?, ?>) data).containsKey("status")) {
                            Vector2DDTOWithStatus vector2DDTOWithStatus = objectMapper.convertValue(data, Vector2DDTOWithStatus.class);
                            return ((DrawingCommand) command).execute(session, vector2DDTOWithStatus, lobbyEvent, lobbyId);
                        } else {
                            Vector2DDTO vector2DDTO = objectMapper.convertValue(data, Vector2DDTO.class);
                            return ((DrawingCommand) command).execute(session, vector2DDTO, lobbyEvent, lobbyId);
                        }
                    }
                    return sendError(session, "Unhandled command type: " + action);
                } catch (Exception e) {
                    return sendError(session, "Error processing payload: " + e.getMessage());
                }
            })
            .doOnError(error -> System.err.println("Error in receive: " + error.getMessage()))
            .doOnComplete(() -> System.out.println("Receive stream completed"))
            .doOnCancel(() -> System.out.println("Receive stream cancelled"))
            .onErrorResume(error -> sendError(session, "Unexpected error: " + error.getMessage()))
            .then();
    
        Mono<Void> send = session.send(
            lobbyEvent.getLobbyEvents()
                .filter(msg -> !isDrawingEvent(msg) || !PlayerRole.DRAWER.equals(lobbyManager.getLobby(lobbyId).getPlayers().get(session.getId()).getRole()))
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
    
    /**
     * Sends an error message to the client and logs it.
     */
    private Mono<Void> sendError(WebSocketSession session, String errorMessage) {
        System.err.println("Error: " + errorMessage);
        return session.send(Mono.just(session.textMessage("{\"error\": \"" + errorMessage + "\"}"))).then();
    }
    
    // Clear when session is closed  
    public void removeSession(String sessionId, String lobbyId) {
        lobbyManager.getLobby(lobbyId).getSessionTemporaryPoints().clear();
        lobbyManager.removePlayer(lobbyId, sessionId);
    }

    private boolean isDrawingEvent(String msg) {
        return msg.contains("drawing");
    }

    private Map<String, Object> extractActionAndData(String payload) {
        try {
            return objectMapper.readValue(payload, Map.class);
        } catch (Exception e) {
            throw new RuntimeException("Error extracting action and data from payload", e);
        }
    }
}