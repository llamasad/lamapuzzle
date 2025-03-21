package com.llamas.puzzle_websocket_server.service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;

import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.PlayerRole;


@Component
public class LobbyManager {
    private final LobbyService lobbyService;
    private final Map<String, Lobby> lobbies = new ConcurrentHashMap<>();
    private final Map<String,LobbyContext> lobbyContexts = new ConcurrentHashMap<>();
    public Lobby getOrCreateLobby(String lobbyId) {
        return lobbies.computeIfAbsent(lobbyId, id -> new Lobby(id));
    }
    LobbyManager(LobbyService lobbyService) {
        this.lobbyService = lobbyService;
    }
    public LobbyContext getOrCreateLobbyContext(String lobbyId) {
        Lobby lobby=lobbies.get(lobbyId);
        return lobbyContexts.computeIfAbsent(lobbyId, id -> new LobbyContext(lobby, lobbyService));
    }
    public void removeLobby(String lobbyId) {
        Lobby lobby = lobbies.remove(lobbyId);
        if (lobby != null) {
            lobby.getSink().tryEmitComplete();
        }
    }


    public void updatePlayerRole(String lobbyId, String playerId, PlayerRole newRole) {
        Lobby lobby = lobbies.get(lobbyId);
        if (lobby != null) {
            lobby.getPlayers().computeIfPresent(playerId, (id, player) -> {
                player.setRole(newRole);
                return player;
            });
        }
    }

    public Lobby getLobby(String lobbyId) {
        return lobbies.get(lobbyId);
    }

    public void removePlayer(String lobbyId, String playerId) {
        Lobby lobby = lobbies.get(lobbyId);
        if (lobby != null) {
            lobby.getPlayers().remove(playerId);
        }
    }
    
}