package com.llamas.puzzle_websocket_server;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

public class LobbyService {
    private final Sinks.Many<String> lobbySink;

    public LobbyService(Sinks.Many<String> lobbySink) {
        this.lobbySink = lobbySink;
    }

    public void publishEvent(String event) {
        lobbySink.tryEmitNext(event);
    }

    public Flux<String> getLobbyEvents() {
        return lobbySink.asFlux();
    }
}
