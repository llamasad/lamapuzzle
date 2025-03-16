package com.llamas.puzzle_websocket_server.command;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.model.Action;
import com.llamas.puzzle_websocket_server.model.Vector2D;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

@Service
public class CommandFactory {

    private final LobbyManager lobbyManager;
    private final DrawingUtilityFactory drawingUtilityFactory;
    private final StrokeStackManager strokeStackManager;
    private final ObjectMapper objectMapper;
    private final Map<String, List<Vector2D>> sessionTemporaryPoints;

    public CommandFactory(LobbyManager lobbyManager, DrawingUtilityFactory drawingUtilityFactory, StrokeStackManager strokeStackManager, ObjectMapper objectMapper, Map<String, List<Vector2D>> sessionTemporaryPoints) {
        this.lobbyManager = lobbyManager;
        this.drawingUtilityFactory = drawingUtilityFactory;
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
        this.sessionTemporaryPoints = sessionTemporaryPoints;
    }

    public Command<?> getCommand(Action action) {
        switch (action) {
            case ROLECHANGE:
                return new RoleChangeCommand(lobbyManager, objectMapper);
            case DRAW:
                return new DrawingCommand(drawingUtilityFactory, strokeStackManager, objectMapper, sessionTemporaryPoints, lobbyManager);
            default:
                throw new IllegalArgumentException("Unknown action: " + action);
        }
    }
}