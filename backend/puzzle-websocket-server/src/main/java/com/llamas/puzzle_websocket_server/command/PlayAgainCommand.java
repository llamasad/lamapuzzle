package com.llamas.puzzle_websocket_server.command;

import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.model.MsgDTO;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;

import reactor.core.publisher.Mono;

public class PlayAgainCommand implements Command<String> {

    private final LobbyManager lobbyManager;
    private final LobbyService lobbyService;
    private final ObjectMapper objectMapper;

    public PlayAgainCommand(LobbyManager lobbyManager, LobbyService lobbyService, ObjectMapper objectMapper) {
        this.lobbyManager = lobbyManager;
        this.lobbyService = lobbyService;
        this.objectMapper = objectMapper;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, String data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby = lobbyManager.getLobby(lobbyId);

        if(lobby.getStatus()== LobbyStatus.FINISHED){
            if (lobby.getPlayers().size() < 2) {
                return Mono.error(new IllegalArgumentException("Not enough players to start a new game."));
            }
            Queue<String> drawers = lobby.getDrawerQueue();
            drawers.addAll(lobby.getPlayers().keySet());
            lobby.setStatus(LobbyStatus.ROUND_IN_PROGRESS);
            lobbyService.emitWordBasedOnWordCount(lobby);
        }
        
        return Mono.empty();
    }

}
