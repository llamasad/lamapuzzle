package com.llamas.puzzle_websocket_server.command;

import java.util.List;
import java.util.Map;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtility;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtilityFactory;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.model.Status;
import com.llamas.puzzle_websocket_server.model.Stroke;
import com.llamas.puzzle_websocket_server.model.Vector2D;
import com.llamas.puzzle_websocket_server.model.Vector2DDTO;
import com.llamas.puzzle_websocket_server.model.Vector2DDTOWithStatus;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import reactor.core.publisher.Mono;

public class DrawingCommand implements Command<Object> {

    private final DrawingUtilityFactory drawingUtilityFactory;
    private final StrokeStackManager strokeStackManager;
    private final ObjectMapper objectMapper;
    private final Map<String, List<Vector2D>> sessionTemporaryPoints;
    private final LobbyManager lobbyManager;

    public DrawingCommand(DrawingUtilityFactory drawingUtilityFactory, StrokeStackManager strokeStackManager, ObjectMapper objectMapper, Map<String, List<Vector2D>> sessionTemporaryPoints, LobbyManager lobbyManager) {
        this.drawingUtilityFactory = drawingUtilityFactory;
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
        this.sessionTemporaryPoints = sessionTemporaryPoints;
        this.lobbyManager = lobbyManager;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, Object data, LobbyService lobbyService) {
        String lobbyId = session.getId(); // Assuming session ID is used as lobby ID
        PlayerRole playerRole = lobbyManager.getOrCreateLobby(lobbyId).getPlayers().get(session.getId()).getRole();

        if (!PlayerRole.DRAWER.equals(playerRole)) {
            return Mono.empty();
        }

        try {
            List<Vector2D> temporaryPoints = sessionTemporaryPoints.get(session.getId());

            if (data instanceof Vector2DDTOWithStatus) {
                Vector2DDTOWithStatus vector2DDTOWithStatus = (Vector2DDTOWithStatus) data;
                temporaryPoints.add(vector2DDTOWithStatus.toVector2D());

                if (vector2DDTOWithStatus.getStatus() == Status.END) {
                    DrawingUtility drawingUtility = drawingUtilityFactory.getDrawingUtility(vector2DDTOWithStatus.getToolType(), vector2DDTOWithStatus.getColor(), vector2DDTOWithStatus.getThickness());
                    Stroke<DrawingUtility> stroke = (Stroke<DrawingUtility>) drawingUtility.draw(temporaryPoints);
                    strokeStackManager.getStrokeStackForRoom(session.getId()).addStroke(stroke);
                    temporaryPoints.clear();
                }

                // Publish the event to the lobby
                lobbyService.publishEvent(objectMapper.writeValueAsString(vector2DDTOWithStatus));
            } else if (data instanceof Vector2DDTO) {
                Vector2DDTO vector2DDTO = (Vector2DDTO) data;
                temporaryPoints.add(vector2DDTO.toVector2D());

                // Publish the event to the lobby
                lobbyService.publishEvent(objectMapper.writeValueAsString(vector2DDTO));
            }

            return Mono.empty();
        } catch (Exception e) {
            return Mono.error(new RuntimeException("Error processing drawing command", e));
        }
    }
    
}