package com.llamas.puzzle_websocket_server.command;

import java.util.List;
import java.util.Stack;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.command.Command;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtility;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.GameStateDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.model.Stroke;
import com.llamas.puzzle_websocket_server.model.StrokeDTO;
import com.llamas.puzzle_websocket_server.model.StrokeStackDTO;
import com.llamas.puzzle_websocket_server.service.LobbyContext;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.StrokeStack;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import reactor.core.publisher.Mono;

public class GameStateCommand implements Command<Object> {

    private final StrokeStackManager strokeStackManager;
    private final ObjectMapper objectMapper;
    private final LobbyManager lobbyManager;

    public GameStateCommand(StrokeStackManager strokeStackManager, ObjectMapper objectMapper,
            LobbyManager lobbyManager) {
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
        this.lobbyManager = lobbyManager;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, Object data, LobbyEvent lobbyEvent, String lobbyId) {
        // Implement the logic for the GET_STROKES command here

        Lobby lobby = lobbyManager.getLobby(lobbyId);
        StrokeStack strokeStack = strokeStackManager.getStrokeStackForRoom(lobbyId);
        if (lobby.getStatus() != LobbyStatus.IS_PLAYING) 
            return Mono.empty();

            Stack<Stroke<DrawingUtility>> undoStack = strokeStack.getUndoStack();
            Stack<Stroke<DrawingUtility>> redoStack = strokeStack.getRedoStack();
            List<StrokeDTO> undoStackDTO = undoStack.stream().map(mapper -> mapper.toStrokeDTO()).toList();
            List<StrokeDTO> redoStackDTO = redoStack.stream().map(mapper -> mapper.toStrokeDTO()).toList();

            LobbyContext lobbyContext = lobbyManager.getOrCreateLobbyContext(lobbyId);

            StrokeStackDTO strokeStackDTO = new StrokeStackDTO(undoStackDTO, redoStackDTO);
            Long currentTimeTurn = lobbyContext.getTurnStartTime();
            Long currentTime = System.currentTimeMillis() / 1000;
            int drawTime = lobby.getDrawTime();// second time

            Long timeLeft = drawTime - (currentTime - currentTimeTurn);

            if (timeLeft < 0) {
                timeLeft = 0L;
            }

            try {
                // Publish the event with the stroke stack data
                lobbyEvent.publishEvent(objectMapper.writeValueAsString(
                        new DataWraperDTO<>("gameState", new GameStateDTO(session.getId(), lobby.getHintWord(),
                                timeLeft, lobby.getCurrentRound(), lobby.getMaxRound(), strokeStackDTO))));
            } catch (Exception e) {
                e.printStackTrace();
                return Mono.error(new IllegalArgumentException("Stroke stack not found for lobby: " + lobbyId));
            }

            return Mono.empty();
        }

    }
