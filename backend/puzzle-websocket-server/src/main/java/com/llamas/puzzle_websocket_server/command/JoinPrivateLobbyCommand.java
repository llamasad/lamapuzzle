package com.llamas.puzzle_websocket_server.command;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.command.Command;
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
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import reactor.core.publisher.Mono;

public class JoinPrivateLobbyCommand implements Command<PlayerDTO> {

    StrokeStackManager strokeStackManager;
    LobbyManager lobbyManager;
    ObjectMapper objectMapper;
    LobbyService lobbyService;

    public JoinPrivateLobbyCommand(StrokeStackManager strokeStackManager, LobbyManager lobbyManager,
            ObjectMapper objectMapper, LobbyService lobbyService) {
        this.objectMapper = objectMapper;
        this.strokeStackManager = strokeStackManager;
        this.lobbyManager = lobbyManager;
        this.lobbyService = lobbyService;
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

        Player player = new Player(session.getId(), data.getUsername(), PlayerRole.GUESSER, data.isAuthorized(), 0,
                false, data.getAvatar(), 0);
        lobby.getPlayers().put(player.getSid(), player);
        lobby.getDrawerQueue().add(player.getSid());
        MsgDTO msgDTO = new MsgDTO("Joined lobby", "notify", data.getAvatar(), false,
                data.getUsername(), player.getSid());
        DataWraperDTO dataWraperDTO = new DataWraperDTO("message", msgDTO);
        List<Player> players = new ArrayList<>(lobby.getPlayers().values());
        List<PlayerDTO> playerDTOs = players.stream()
                .map(p -> new PlayerDTO(p.getUsername(), p.isAuthorized(), p.getAvatar(), p.getRole(), p.getScore(),
                        p.getScorePerTurn(), p.isAnswered()))
                .toList();
        DataWraperDTO<List<PlayerDTO>> dataWraperPlayerDTO = new DataWraperDTO("playerList", playerDTOs);
        try {
            lobby.getSink().tryEmitNext(objectMapper.writeValueAsString(dataWraperDTO));
            lobby.getSink().tryEmitNext(objectMapper.writeValueAsString(dataWraperPlayerDTO));
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (lobby.getStatus().equals(LobbyStatus.PENDING_LOBBY) && lobby.getPlayers().size() > 1) {
            lobby.setStatus(LobbyStatus.ROUND_IN_PROGRESS);
            lobbyService.emitWordBasedOnWordCount(lobby);
        }
        return Mono.empty();
    }

}
