package com.llamas.puzzle_websocket_server.service;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerRole;


@Component
public class LobbyManager {
    private final LobbyService lobbyService;
    private final Map<String, Lobby> lobbies = new ConcurrentHashMap<>();
    private final Map<String,LobbyContext> lobbyContexts = new ConcurrentHashMap<>();
    private final ObjectMapper objectMapper;
    public Lobby getOrCreateLobby(String lobbyId) {
        return lobbies.computeIfAbsent(lobbyId, id -> new Lobby(id));
    }

    public Lobby createPrivateLobby(String lobbyId) {
        Lobby lobby = new Lobby(lobbyId);
        lobby.setPrivate(true);
        lobbies.put(lobbyId, lobby);
        return lobby;
    }

    LobbyManager(LobbyService lobbyService, ObjectMapper objectMapper) {
        this.lobbyService = lobbyService;
        this.objectMapper=objectMapper;
    }
    public LobbyContext getOrCreateLobbyContext(String lobbyId) {
        Lobby lobby=lobbies.get(lobbyId);
        return lobbyContexts.computeIfAbsent(lobbyId, id -> new LobbyContext(lobby, lobbyService,objectMapper));
    }
    public void removeLobby(String lobbyId) {
        Lobby lobby = lobbies.remove(lobbyId);
        if (lobby != null) {
            lobby.getSink().tryEmitComplete();
        }
    }

    public Lobby getPublicLobby() {
        System.out.println("getPublicLobby");
        Lobby maxLobby = null;
        int maxPlayers = 0;
        for (Lobby lobby : lobbies.values()) {
            if (!lobby.isPrivate() && lobby.getPlayers().size() > maxPlayers) {
            maxPlayers = lobby.getPlayers().size();
            maxLobby = lobby;
                if(maxPlayers==lobby.getPlayers().size() -1){
                    break;
                }
            }
        }
        if (maxLobby != null) {
            return maxLobby;
        }
        return getOrCreateLobby(UUID.randomUUID().toString());
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

    public Player removePlayer(String lobbyId, String playerId) {
        Lobby lobby = lobbies.get(lobbyId);
        if (lobby != null) {
            return lobby.getPlayers().remove(playerId);
        }
        return null;
    }
    
}