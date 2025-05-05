package com.llamas.puzzle_websocket_server.handler;

import java.util.ArrayList;
import java.util.List;
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
import com.llamas.puzzle_websocket_server.command.EditCommand;
import com.llamas.puzzle_websocket_server.command.GameStateCommand;
import com.llamas.puzzle_websocket_server.command.JoinPrivateLobbyCommand;
import com.llamas.puzzle_websocket_server.command.JoinPublicLobbyCommand;
import com.llamas.puzzle_websocket_server.command.PlayAgainCommand;
import com.llamas.puzzle_websocket_server.command.StartGameCommand;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.model.Action;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbySettingDTO;
import com.llamas.puzzle_websocket_server.model.MsgDTO;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.model.Vector2DDTO;
import com.llamas.puzzle_websocket_server.model.Vector2DDTOWithStatus;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import com.llamas.puzzle_websocket_server.model.LobbyStatus;

import reactor.core.publisher.Mono;

@Component("ReactiveWebSocketHandler")
public class ReactiveWebSocketHandler implements WebSocketHandler {

    private final StrokeStackManager strokeStackManager;
    private final DrawingUtilityFactory drawingUtilityFactory;
    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;
    private final CommandFactory commandFactory;
    private final LobbyService lobbyService;


    public ReactiveWebSocketHandler(StrokeStackManager strokeStackManager, DrawingUtilityFactory drawingUtilityFactory,
            LobbyManager lobbyManager, ObjectMapper objectMapper, CommandFactory commandFactory, LobbyService lobbyService) {
        this.lobbyService = lobbyService;
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
            lobbyId = lobbyManager.createPrivateLobby(suffix.substring(4)).getId();
            System.out.println("Lobby ID: " + lobbyId);
            // lobbyManager

        } else {
            lobbyId = suffix;
        }
        System.out.println("Lobby ID2: " + lobbyId);
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
                        } else if (command instanceof EditCommand) {
                            String editCommand = (String) data;
                            return ((EditCommand) command).execute(session, editCommand, lobbyEvent, lobbyId);
                        } else if (command instanceof GameStateCommand) {
                            return ((GameStateCommand) command).execute(session, data, lobbyEvent, lobbyId);
                        }else if(command instanceof  PlayAgainCommand ){
                            String msg = (String) data;

                            return ((PlayAgainCommand) command).execute(session, msg, lobbyEvent, lobbyId);
                        } 
                        
                        else {
                            return sendError(session, "Unhandled command type: " + action);
                        }
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
                        .filter(msg -> !isGameState(msg) || msg.contains(session.getId()))
                        .map(mapHandler(session.getId())).filter(msg -> !isEditEvent(msg) || !PlayerRole.DRAWER
                                .equals(lobbyManager.getLobby(lobbyId).getPlayers().get(session.getId()).getRole()))
                        .doOnSubscribe(s -> System.out.println("Subscribed to send stream"))
                        .doOnNext(msg -> System.out.println("Sending message: " + msg))
                        .doOnError(error -> System.err.println("Error in send: " + error.getMessage()))
                        .map(session::textMessage))
                .doOnCancel(() -> System.out.println("Send stream cancelled"));

        return Mono.zip(send, receive)
                .doOnError(error -> System.err.println("Error in WebSocket handling: " + error.getMessage()))
                .doOnTerminate(() -> {

                    System.out.println("WebSocket session terminated");
                    handlePlayerLeaveRoom(lobbyId, session.getId(), lobby, lobbyEvent);
                })
                .then();
    }

    private Mono<Void> sendError(WebSocketSession session, String errorMessage) {
        System.err.println("Error: " + errorMessage);
        return session.send(Mono.just(session.textMessage("{\"error\": \"" + errorMessage + "\"}"))).then();
    }

    public void handlePlayerLeaveRoom(String lobbyId, String sessionId, Lobby lobby, LobbyEvent lobbyEvent) {
        lobbyManager.getLobby(lobbyId).getSessionTemporaryPoints().clear();
        Player player = lobbyManager.removePlayer(lobbyId, sessionId);

        if (player != null && player.getRole().equals(PlayerRole.DRAWER)) {
            System.out.println("Round ended");
            lobby.setStatus(LobbyStatus.ROUND_IN_PROGRESS);
            try {
                if (lobby.getCurrentRound() >= lobby.getMaxRound() && lobby.getDrawerQueue().isEmpty()) {
                    lobby.setStatus(LobbyStatus.FINISHED);
                    lobbyService.flushLobby(lobby);

                } else {

                    List<Player> players = new ArrayList<>(lobby.getPlayers().values());
                    List<PlayerDTO> playerDTOs = players.stream()
                            .map(p -> new PlayerDTO(p.getUsername(), p.isAuthorized(), p.getAvatar(), p.getRole(),
                                    p.getScore(),
                                    p.getScorePerTurn(), p.isAnswered()))
                            .toList();
                    lobbyService.refreshLobbyEachTurn(lobby);

                    lobby.getSink().tryEmitNext(
                            objectMapper.writeValueAsString(new DataWraperDTO<>("playerList", playerDTOs)));
                    lobby.getSink().tryEmitNext(objectMapper
                            .writeValueAsString(new DataWraperDTO<>("revealAndSum", lobby.getCurrentWord())));
                    if(lobby.getPlayers().size()<=1){
                        lobby.setStatus(LobbyStatus.PENDING_LOBBY);
                        return;
                    }
                    lobbyService.emitWordBasedOnWordCount(lobby);
                }
            } catch (Exception e) {
                System.out.println("Error emitting word: " + e.getMessage());
            }
        }

        List<Player> players = new ArrayList<>(lobby.getPlayers().values());
        List<PlayerDTO> playerDTOs = players.stream()
                .map(p -> new PlayerDTO(p.getUsername(), p.isAuthorized(), p.getAvatar(), p.getRole(), p.getScore(),
                        p.getScorePerTurn(), p.isAnswered()))
                .toList();
        MsgDTO msgDTO = new MsgDTO("Leaved lobby", "notify", player.getAvatar(), false,
                player.getUsername(), player.getSid());

        try {
            lobbyEvent.publishEvent(objectMapper.writeValueAsString(new DataWraperDTO<>("message", msgDTO)));
            lobbyEvent.publishEvent(objectMapper.writeValueAsString(new DataWraperDTO<>("playerList", playerDTOs)));
        } catch (Exception e) {
            System.err.println("Error publishing event: " + e.getMessage());
        }
    }

    public boolean isGameState(String msg) {
        return msg.contains("type\":\"gameState\"");
    }

    private boolean isDrawingEvent(String msg) {
        return msg.contains("type\":\"draw\"");
    }

    private boolean isEditEvent(String msg) {
        return msg.contains("type\":\"edit\"");
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
                JsonNode data = root.get("data");

                if (!(data instanceof ObjectNode)) {
                    System.err.println("Expected ObjectNode but got: " + data.getClass().getSimpleName());
                    return msg; // Return the original message if the type is incorrect
                }

                ObjectNode dataNode = (ObjectNode) data;

                switch (type) {
                    case "wordsToChoose" -> {
                        if (dataNode.get("id").asText().equals(sid)) {
                            dataNode.remove("id");
                            return objectMapper.writeValueAsString(root);
                        } else {
                            dataNode.remove("id");
                            dataNode.putNull("words");
                            return objectMapper.writeValueAsString(root);
                        }
                    }
                    case "message" -> {
                        if (dataNode.get("id").asText().equals(sid)) {
                            dataNode.remove("id");
                            dataNode.set("isYourMessage", objectMapper.valueToTree(true));
                            return objectMapper.writeValueAsString(root);
                        } else {
                            dataNode.remove("id");
                            return objectMapper.writeValueAsString(root);
                        }
                    }
                    default -> {
                        return msg;
                    }
                }
            } catch (Exception e) {
                System.err.println("Error in send stream: " + e.getMessage());
                return "";
            }
        };
    }
}