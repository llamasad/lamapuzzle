package com.llamas.puzzle_websocket_server.command;

import java.util.List;

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
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import reactor.core.publisher.Mono;

public class DrawingCommand implements Command<Object> {

    private final DrawingUtilityFactory drawingUtilityFactory;
    private final StrokeStackManager strokeStackManager;
    private final ObjectMapper objectMapper;
    private final LobbyManager lobbyManager;

    public DrawingCommand(DrawingUtilityFactory drawingUtilityFactory, StrokeStackManager strokeStackManager, ObjectMapper objectMapper, LobbyManager lobbyManager) {
        this.drawingUtilityFactory = drawingUtilityFactory;
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
        this.lobbyManager = lobbyManager;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, Object data, LobbyEvent lobbyEvent , String lobbyId) {

        PlayerRole playerRole = lobbyManager.getLobby(lobbyId).getPlayers().get(session.getId()).getRole();        
        if (!PlayerRole.DRAWER.equals(playerRole)) {
            System.out.println("Player is not a DRAWER, ignoring command");
            return Mono.empty();
        }
        
        try {
            List<Vector2D> temporaryPoints = lobbyManager.getLobby(lobbyId).getSessionTemporaryPoints();
            System.out.println("Temporary points: " + temporaryPoints);
    
            if (data instanceof Vector2DDTOWithStatus) {
                Vector2DDTOWithStatus vector2DDTOWithStatus = (Vector2DDTOWithStatus) data;
                System.out.println("Received Vector2DDTOWithStatus: " + vector2DDTOWithStatus);
                temporaryPoints.add(vector2DDTOWithStatus.toVector2D());
    
                if (vector2DDTOWithStatus.getStatus() == Status.END) {
                    System.out.println("Status is END, processing stroke");
                    DrawingUtility drawingUtility = drawingUtilityFactory.getDrawingUtility(vector2DDTOWithStatus.getToolType(), vector2DDTOWithStatus.getColor(), vector2DDTOWithStatus.getThickness());
                    Stroke<DrawingUtility> stroke = (Stroke<DrawingUtility>) drawingUtility.draw(temporaryPoints);
                    strokeStackManager.getStrokeStackForRoom(session.getId()).addStroke(stroke);
                    temporaryPoints.clear();
                }
    
                // Publish the event to the lobby
                String event = objectMapper.writeValueAsString(vector2DDTOWithStatus);
                System.out.println("Publishing event: " + event);
                lobbyEvent.publishEvent(event);
            } else if (data instanceof Vector2DDTO) {
                Vector2DDTO vector2DDTO = (Vector2DDTO) data;
                System.out.println("Received Vector2DDTO: " + vector2DDTO);
                temporaryPoints.add(vector2DDTO.toVector2D());
    
                // Publish the event to the lobby
                String event = objectMapper.writeValueAsString(vector2DDTO);
                System.out.println("Publishing event: " + event);
                lobbyEvent.publishEvent(event);
            }
    
            System.out.println("DrawingCommand execution completed successfully");
            return Mono.empty();
        } catch (Exception e) {
            System.err.println("Error processing drawing command: " + e.getMessage());
            e.printStackTrace();
            return Mono.error(new RuntimeException("Error processing drawing command", e));
        }
    }
}