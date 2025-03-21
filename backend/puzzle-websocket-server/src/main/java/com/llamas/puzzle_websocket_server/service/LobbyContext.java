package com.llamas.puzzle_websocket_server.service;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import com.llamas.puzzle_websocket_server.model.Lobby;

import lombok.Data;
import main.java.com.llamas.puzzle_websocket_server.service.LobbyService;

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
        lobby.setGameOn(true);
        roundStartTimes = System.currentTimeMillis()/1000;
        lobby.setCurrentRound(lobby.getCurrentRound() + 1);
        lobby.getSink().tryEmitNext("Round " + lobby.getCurrentRound() + " started");
        scheduleEndOfRound();
    }

    // Method to schedule the end of the round
    private void scheduleEndOfRound() {
        scheduler.schedule(() -> {
            lobbyService.refreshPlayers(lobby);
            lobby.setGameOn(false);
            if (lobby.getCurrentRound() <lobby.getMaxRound()) {
                lobbyService.emitWordBasedOnWordCount(lobby);
            } else {
                
                lobby.getSink().tryEmitNext("Game ended");
            }   
        }, lobby.getDrawTime(), TimeUnit.SECONDS);
    }

    //
}