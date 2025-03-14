package com.llamas.puzzle_websocket_server.service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;

import reactor.core.publisher.Sinks;

@Component
public class LobbyManager {
    private final Map<String, Sinks.Many<String>> lobbyTopics = new ConcurrentHashMap<>();

    public Sinks.Many<String> getOrCreateLobby(String lobbyId) {
        return lobbyTopics.computeIfAbsent(lobbyId, id ->
                Sinks.many().multicast().onBackpressureBuffer()
        );
    }

    public void removeLobby(String lobbyId) {
        Sinks.Many<String> sink = lobbyTopics.remove(lobbyId);
        if (sink != null) {
            sink.tryEmitComplete();
        }
    }
}
