package com.llamas.puzzle_websocket_server.command;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.command.Command;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;

import reactor.core.publisher.Mono;

public class CreatePrivateLobbyCommand implements Command<PlayerDTO> {
    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;

    public CreatePrivateLobbyCommand(LobbyManager lobbyManager, ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
        this.lobbyManager = lobbyManager;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, PlayerDTO data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby = lobbyManager.getOrCreateLobby(lobbyId);
        Player player = new Player(session.getId(), data.getUsername(), PlayerRole.GUESSER, data.isAuthorized(), 0,
                false, data.getAvatar(), 0);
        lobby.getPlayers().put(player.getSid(), player);
        lobby.getDrawerQueue().add(player.getSid());
        lobby.setStatus(LobbyStatus.CREATING_LOBBY);
        List<Player> players = new ArrayList<>(lobby.getPlayers().values());
        List<PlayerDTO> playerDTOs = players.stream()
                .map(p -> new PlayerDTO(p.getUsername(), p.isAuthorized(), p.getAvatar(), p.getRole(), p.getScore(),
                        p.getScorePerTurn(), p.isAnswered()))
                .toList();
        DataWraperDTO<List<PlayerDTO>> dataWraperPlayerDTO = new DataWraperDTO("playerList", playerDTOs);
        try {
            lobby.getSink().tryEmitNext(objectMapper.writeValueAsString(dataWraperPlayerDTO));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Mono.empty();
    }
}
