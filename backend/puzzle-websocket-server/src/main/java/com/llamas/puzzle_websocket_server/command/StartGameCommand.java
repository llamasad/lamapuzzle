package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbySettingDTO;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;

import reactor.core.publisher.Mono;

public class StartGameCommand implements  Command<LobbySettingDTO>{
    private final ObjectMapper objectMapper;
    private final LobbyManager lobbyManager;
    private final LobbyService lobbyService;

    public StartGameCommand(ObjectMapper objectMapper, LobbyManager lobbyManager, LobbyService lobbyService) {
        this.lobbyManager = lobbyManager;
        this.objectMapper = objectMapper;
        this.lobbyService = lobbyService;
    }

    public Mono<Void> execute(WebSocketSession session, LobbySettingDTO data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        if (lobby.isGameOn()) {
            System.out.println("Game is already on, ignoring command");
            return Mono.empty();
        }
        data.applyTo(lobby);
        lobby.setGameOn(true);
        lobby.setCurrentRound(1);
        lobbyService.emitWordBasedOnWordCount(lobby);
        return Mono.empty();
    }

}
