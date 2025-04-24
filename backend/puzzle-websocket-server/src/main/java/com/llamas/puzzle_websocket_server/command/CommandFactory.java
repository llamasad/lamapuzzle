package com.llamas.puzzle_websocket_server.command;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.model.Action;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;
import com.llamas.puzzle_websocket_server.service.WordService;

@Service
public class CommandFactory {

    private final LobbyManager lobbyManager;
    private final DrawingUtilityFactory drawingUtilityFactory;
    private final StrokeStackManager strokeStackManager;
    private final ObjectMapper objectMapper;
    private final LobbyService lobbyService;
    private final WordService wordService;

    public CommandFactory(LobbyManager lobbyManager, DrawingUtilityFactory drawingUtilityFactory, StrokeStackManager strokeStackManager, ObjectMapper objectMapper, LobbyService lobbyService, WordService wordService) {
        this.lobbyManager = lobbyManager;
        this.drawingUtilityFactory = drawingUtilityFactory;
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
        this.lobbyService = lobbyService;
        this.wordService = wordService;
    }

    public Command<?> getCommand(Action action) {
        switch (action) {
            case CHAT_AND_ANSWER:
                return new ChatAndAnswerCommand(lobbyManager, objectMapper,lobbyService);
            case DRAW:
                return new DrawingCommand(drawingUtilityFactory, strokeStackManager, objectMapper, lobbyManager);
            case CHOOSE_WORD:
                return new ChooseWordCommand(lobbyManager, objectMapper);
            case CREATE_PRIVATE_LOBBY:
                return new CreatePrivateLobbyCommand(lobbyManager);
            case JOIN_PUBLIC_LOBBY:
                return new JoinPublicLobbyCommand(lobbyManager, lobbyService, objectMapper);
            case JOIN_PRIVATE_LOBBY:
                return new JoinPrivateLobbyCommand(strokeStackManager, lobbyManager, objectMapper, lobbyService);
            case START_GAME:
                return new StartGameCommand(objectMapper,lobbyManager, lobbyService,wordService);
            case EDIT:
                return new EditCommand(strokeStackManager, objectMapper);
            case GAME_STATE:
                return new GameStateCommand(strokeStackManager, objectMapper, lobbyManager);
            default:
                throw new IllegalArgumentException("Unknown action: " + action);
        }
    }
}