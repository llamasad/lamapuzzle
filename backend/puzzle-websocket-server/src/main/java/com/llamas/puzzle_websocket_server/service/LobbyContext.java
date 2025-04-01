package com.llamas.puzzle_websocket_server.service;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;

import lombok.Data;

@Data
public class LobbyContext {

    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    private final Lobby lobby;
    private Long roundStartTimes;
    private final LobbyService lobbyService;


    public LobbyContext(Lobby lobby,LobbyService lobbyService) {
        this.lobby = lobby;
        this.lobbyService = lobbyService;
    }


    // Method to start the next round
    public void startRound() {
        lobby.setStatus(LobbyStatus.IS_PLAYING);
        roundStartTimes = System.currentTimeMillis()/1000;
        lobby.setCurrentRound(lobby.getCurrentRound() + 1);
        lobby.getSink().tryEmitNext("Round " + lobby.getCurrentRound() + " started");
        scheduleEndOfRound();
    }

    // Method to schedule the end of the round
    private void scheduleEndOfRound() {
        scheduler.schedule(() -> {
            lobbyService.refreshLobbyEachRound(lobby);
            lobby.setStatus(LobbyStatus.ROUND_IN_PROGRESS);
            if (lobby.getCurrentRound() <lobby.getMaxRound()) {
                lobbyService.emitWordBasedOnWordCount(lobby);
            } else {
                lobby.setStatus(LobbyStatus.FINISHED);
                lobby.getSink().tryEmitNext("Game ended");
            }   
        }, lobby.getDrawTime(), TimeUnit.SECONDS);
    }

    //
}