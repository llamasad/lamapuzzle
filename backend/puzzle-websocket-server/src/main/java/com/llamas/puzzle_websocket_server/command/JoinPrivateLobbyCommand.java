package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import reactor.core.publisher.Mono;

public class JoinPrivateLobbyCommand implements Command<PlayerDTO> {
    
    StrokeStackManager strokeStackManager;
    LobbyManager lobbyManager;

    public JoinPrivateLobbyCommand(StrokeStackManager strokeStackManager, LobbyManager lobbyManager) {
        this.strokeStackManager = strokeStackManager;
        this.lobbyManager = lobbyManager;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, PlayerDTO data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        if (lobby == null) {
            return Mono.error(new IllegalArgumentException("Lobby not found: " + lobbyId));
        }

        if (lobby.getPlayers().size() >= lobby.getMaxPlayer()) {
            return session.send(Mono.just(session.textMessage("{\"error\": \"Lobby is full\"}")))
                .then(Mono.error(new IllegalArgumentException("Lobby is full")));
        }

        Player player = new Player(session.getId(), data.getUsername(),PlayerRole.GUESSER, data.isAuthorized(), 0, false);
        lobby.getPlayers().put(player.getSid(), player);
        lobby.getDrawerQueue().add(player.getSid());
        lobby.getSink().tryEmitNext("success");
        return Mono.empty();
    }
    
}
