package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;

import reactor.core.publisher.Mono;

public class JoinPublicLobby implements Command<PlayerDTO> {

    private final LobbyManager lobbyManager;
    private final LobbyService lobbyService;

    public JoinPublicLobby(LobbyManager lobbyManager, LobbyService lobbyService) {
        this.lobbyManager = lobbyManager;
        this.lobbyService = lobbyService;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, PlayerDTO data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        if (lobby == null) {
            return Mono.error(new IllegalArgumentException("Lobby not found: " + lobbyId));
        }
        Player player = new Player(session.getId(), data.getUsername(),PlayerRole.GUESSER ,data.isAuthorized(), 0, false);
        lobby.getPlayers().put(player.getSid(), player);
        lobby.getDrawerQueue().add(player.getSid());
        if(lobby.getStatus().equals(LobbyStatus.PENDING_LOBBY)&&lobby.getPlayers().size()>1){
            lobby.setStatus(LobbyStatus.ROUND_IN_PROGRESS);
            lobbyService.emitWordBasedOnWordCount(lobby);
    
        }
        return null;
    }
    
}
