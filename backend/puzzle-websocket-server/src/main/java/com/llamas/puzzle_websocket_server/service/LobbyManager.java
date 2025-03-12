package com.llamas.puzzle_websocket_server.service;

import org.springframework.stereotype.Component;
import reactor.core.publisher.Sinks;
import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;

@Component
public class LobbyManager {
    private final Map<String, Sinks.Many<String>> lobbyTopics = new ConcurrentHashMap<>();

    public Sinks.Many<String> getOrCreateLobby(String lobbyId) {
        return lobbyTopics.computeIfAbsent(lobbyId, id ->
                Sinks.many().multicast().onBackpressureBuffer()
        );
    }
}
