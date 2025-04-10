package com.llamas.puzzle_websocket_server.handler;

import java.util.Map;
import java.util.function.Function;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.llamas.puzzle_websocket_server.command.ChatAndAnswerCommand;
import com.llamas.puzzle_websocket_server.command.ChooseWordCommand;
import com.llamas.puzzle_websocket_server.command.Command;
import com.llamas.puzzle_websocket_server.command.CommandFactory;
import com.llamas.puzzle_websocket_server.command.CreatePrivateLobbyCommand;
import com.llamas.puzzle_websocket_server.command.DrawingCommand;
import com.llamas.puzzle_websocket_server.command.JoinPrivateLobbyCommand;
import com.llamas.puzzle_websocket_server.command.JoinPublicLobbyCommand;
import com.llamas.puzzle_websocket_server.command.StartGameCommand;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.model.Action;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbySettingDTO;
import com.llamas.puzzle_websocket_server.model.MsgDTO;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
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

    public ReactiveWebSocketHandler(StrokeStackManager strokeStackManager, DrawingUtilityFactory drawingUtilityFactory,
            LobbyManager lobbyManager, ObjectMapper objectMapper, CommandFactory commandFactory) {
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
        System.out.println("Path: " + path);
        System.out.println("Suffix: " + suffix);
        final String lobbyId;
        
        if (suffix.equals("publiclobby")) {
            lobbyId = lobbyManager.getPublicLobby().getId();

        } else if (suffix.startsWith("cpl:")) {
            // path is cpl:id
            lobbyId = lobbyManager.getOrCreateLobby(suffix.substring(4)).getId();

            // lobbyManager

        } else {
            lobbyId = suffix;
        }
        System.out.println("Lobby ID: " + lobbyId);
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
                            MsgDTO chatDTO = objectMapper.convertValue(data, MsgDTO.class);
                            return ((ChatAndAnswerCommand) command).execute(session, chatDTO, lobbyEvent, lobbyId);
                        } else if (command instanceof ChooseWordCommand) {
                            String word = (String) data;
                            return ((ChooseWordCommand) command).execute(session, word, lobbyEvent, lobbyId);
                        } else if (command instanceof CreatePrivateLobbyCommand) {
                            PlayerDTO playerDTO = objectMapper.convertValue(data, PlayerDTO.class);
                            return ((CreatePrivateLobbyCommand) command).execute(session, playerDTO, lobbyEvent,
                                    lobbyId);
                        } else if (command instanceof JoinPublicLobbyCommand) {
                            PlayerDTO playerDTO = objectMapper.convertValue(data, PlayerDTO.class);
                            return ((JoinPublicLobbyCommand) command).execute(session, playerDTO, lobbyEvent, lobbyId);
                        } else if (command instanceof JoinPrivateLobbyCommand) {
                            PlayerDTO playerDTO = objectMapper.convertValue(data, PlayerDTO.class);
                            return ((JoinPrivateLobbyCommand) command).execute(session, playerDTO, lobbyEvent, lobbyId);
                        } else if (command instanceof StartGameCommand) {
                            LobbySettingDTO lobbySettingDTO = objectMapper.convertValue(data, LobbySettingDTO.class);
                            return ((StartGameCommand) command).execute(session, lobbySettingDTO, lobbyEvent, lobbyId);
                        } else if (command instanceof DrawingCommand) {
                            if (data instanceof Map && ((Map<?, ?>) data).containsKey("status")) {
                                Vector2DDTOWithStatus vector2DDTOWithStatus = objectMapper.convertValue(data,
                                        Vector2DDTOWithStatus.class);
                                return ((DrawingCommand) command).execute(session, vector2DDTOWithStatus, lobbyEvent,
                                        lobbyId);
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
                        .filter(msg -> !isDrawingEvent(msg) || !PlayerRole.DRAWER
                                .equals(lobbyManager.getLobby(lobbyId).getPlayers().get(session.getId()).getRole()))
                        .map(mapHandler(session.getId()))
                        .doOnSubscribe(s -> System.out.println("Subscribed to send stream"))
                        .doOnNext(msg -> System.out.println("Sending message: " + msg))
                        .doOnError(error -> System.err.println("Error in send: " + error.getMessage()))
                        .map(session::textMessage))
                .doOnCancel(() -> System.out.println("Send stream cancelled"));

        return Mono.zip(send, receive)
                .doOnError(error -> System.err.println("Error in WebSocket handling: " + error.getMessage()))
                .doOnTerminate(() -> {
                    System.out.println("WebSocket session terminated");
                    removeSession(session.getId(), lobbyId);
                })
                .then();
    }

    private Mono<Void> sendError(WebSocketSession session, String errorMessage) {
        System.err.println("Error: " + errorMessage);
        return session.send(Mono.just(session.textMessage("{\"error\": \"" + errorMessage + "\"}"))).then();
    }

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

    public Function<String, String> mapHandler(String sid) {
        return (msg) -> {
            try {
                JsonNode root = objectMapper.readTree(msg);
                String type = root.get("type").asText();
                ObjectNode data = (ObjectNode) root.get("data");
                switch (type) {
                    case "wordsToChoose" -> {
                        if (data.get("id").asText().equals(sid)) {
                            data.remove("id");
                            return objectMapper.writeValueAsString(msg);
                        } else {
                            data.remove("id");
                            data.putNull("words");
                            return objectMapper.writeValueAsString(msg);
                        }

                    }
                    case "message" -> {
                        if(data.get("id").asText().equals(sid)) {
                            data.remove("id");
                            data.set("isYourMessage", objectMapper.valueToTree(true));
                            return objectMapper.writeValueAsString(msg);
                        } else {
                            data.remove("id");
                            return objectMapper.writeValueAsString(msg);
                        }
                    }
                    default -> {
                        return msg;
                    }
                }
            } catch (Exception e) {
                System.out.println("Error in send stream: " + e.getMessage());
                return "";
            }
        };
    }

}