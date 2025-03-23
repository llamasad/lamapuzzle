package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;

import reactor.core.publisher.Mono;

public class CreatePrivateLobbyCommand implements Command<PlayerDTO> {
    LobbyManager lobbyManager;

    public CreatePrivateLobbyCommand(LobbyManager lobbyManager) {
        this.lobbyManager = lobbyManager;
    }

    public Mono<Void> execute(WebSocketSession session, PlayerDTO data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby=lobbyManager.createPrivateLobby(lobbyId);
        Player player = new Player(session.getId(), data.getUsername(), PlayerRole.GUESSER, data.isAuthorized(), 0, false);
        lobby.getPlayers().put(player.getSid(), player);
        lobby.getDrawerQueue().add(player.getSid());
        lobby.getSink().tryEmitNext("success");
        return Mono.empty();
    }
}
