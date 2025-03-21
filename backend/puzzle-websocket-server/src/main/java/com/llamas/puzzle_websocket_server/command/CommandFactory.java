package com.llamas.puzzle_websocket_server.command;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.model.Action;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

@Service
public class CommandFactory {

    private final LobbyManager lobbyManager;
    private final DrawingUtilityFactory drawingUtilityFactory;
    private final StrokeStackManager strokeStackManager;
    private final ObjectMapper objectMapper;
    private final LobbyService lobbyService;

    public CommandFactory(LobbyManager lobbyManager, DrawingUtilityFactory drawingUtilityFactory, StrokeStackManager strokeStackManager, ObjectMapper objectMapper, LobbyService lobbyService) {
        this.lobbyManager = lobbyManager;
        this.drawingUtilityFactory = drawingUtilityFactory;
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
        this.lobbyService = lobbyService;
    }

    public Command<?> getCommand(Action action) {
        switch (action) {
            case CHATANDANSWER:
                return new ChatAndAnswerCommand(lobbyManager, objectMapper,lobbyService);
            case DRAW:
                return new DrawingCommand(drawingUtilityFactory, strokeStackManager, objectMapper, lobbyManager);
            case CHOOSEWORD:
                return new ChooseWordCommand(lobbyManager);
            default:
                throw new IllegalArgumentException("Unknown action: " + action);
        }
    }
}