package com.llamas.puzzle_websocket_server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;

import lombok.Data;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;

import com.llamas.puzzle_websocket_server.service.LobbyService;

@Data
public class LobbyContext {

    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    private final Lobby lobby;
    private Long turnStartTime;
    private final LobbyService lobbyService;
    private final ObjectMapper objectMapper;

    public LobbyContext(Lobby lobby, LobbyService lobbyService, ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
        this.lobby = lobby;
        this.lobbyService = lobbyService;
    }

    // Method to start the next round
    public void startRound() {
        lobby.setStatus(LobbyStatus.IS_PLAYING);
        turnStartTime = System.currentTimeMillis() / 1000;
        scheduleEndOfRound();
    }

    // Method to schedule the end of the round
    private void scheduleEndOfRound() {
        Integer drawTime = lobby.getDrawTime();
        if (drawTime == null || drawTime <= 0) {
            throw new IllegalArgumentException("Draw time must be a positive integer.");
        }

        scheduler.schedule(() -> {

            System.out.println("Round ended");
            lobby.setStatus(LobbyStatus.ROUND_IN_PROGRESS);
            try {
                if (lobby.getCurrentRound() >= lobby.getMaxRound() && lobby.getDrawerQueue().isEmpty()) {
                    lobby.setStatus(LobbyStatus.FINISHED);
                    lobbyService.flushLobby(lobby);
                 

                } else {

                    List<Player> players = new ArrayList<>(lobby.getPlayers().values());
                    List<PlayerDTO> playerDTOs = players.stream()
                            .map(p -> new PlayerDTO(p.getUsername(), p.isAuthorized(), p.getAvatar(), p.getRole(),
                                    p.getScore(),
                                    p.getScorePerTurn(), p.isAnswered()))
                            .toList();
                    lobbyService.refreshLobbyEachTurn(lobby);

                    lobby.getSink().tryEmitNext(
                            objectMapper.writeValueAsString(new DataWraperDTO<>("playerList", playerDTOs)));
                    lobby.getSink().tryEmitNext(objectMapper
                            .writeValueAsString(new DataWraperDTO<>("revealAndSum", lobby.getCurrentWord())));

                    if(lobby.getPlayers().size() <= 1) {
                        lobby.setStatus(LobbyStatus.PENDING_LOBBY);
                    }
                    
                    lobbyService.emitWordBasedOnWordCount(lobby);
                }
            } catch (Exception e) {
                System.out.println("Error emitting word: " + e.getMessage());
            }
        }, lobby.getDrawTime(), TimeUnit.SECONDS);
    }

}