package com.llamas.puzzle_websocket_server.service;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;

import lombok.Data;

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
        if (lobby.getDrawerQueue().isEmpty()) {
            lobby.setCurrentRound(lobby.getCurrentRound() + 1);
        }
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
                if (lobby.getCurrentRound() < lobby.getMaxRound()) {
                    System.out.println("word reveal:" + lobby.getCurrentWord());
                    lobby.getSink().tryEmitNext(objectMapper
                            .writeValueAsString(new DataWraperDTO<>("revealAndSum", lobby.getCurrentWord())));
                    lobbyService.emitWordBasedOnWordCount(lobby);
                } else {
                    lobbyService.refreshLobbyEachRound(lobby);
                    lobby.setStatus(LobbyStatus.FINISHED);
                }
            } catch (Exception e) {
                System.out.println("Error emitting word: " + e.getMessage());
            }
        }, lobby.getDrawTime(), TimeUnit.SECONDS);
    }

}