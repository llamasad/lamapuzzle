package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.model.RoleDTO;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;

import reactor.core.publisher.Mono;

public class RoleChangeCommand implements Command<RoleDTO> {

    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;

    public RoleChangeCommand(LobbyManager lobbyManager, ObjectMapper objectMapper) {
        this.lobbyManager = lobbyManager;
        this.objectMapper = objectMapper;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, RoleDTO data, LobbyService lobbyService) {
        try {
            PlayerRole newRole = data.getRole();
            String lobbyId = session.getHandshakeInfo().getUri().getPath().substring(session.getHandshakeInfo().getUri().getPath().lastIndexOf('/') + 1);
            lobbyManager.updatePlayerRole(lobbyId, session.getId(), newRole);
            System.out.println("Role changed to: " + newRole);
            return Mono.empty();
        } catch (Exception e) {
            return Mono.error(new RuntimeException("Error processing role change", e));
        }
    }
}