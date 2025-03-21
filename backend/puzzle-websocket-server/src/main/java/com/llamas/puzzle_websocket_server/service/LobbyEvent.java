package com.llamas.puzzle_websocket_server.service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

public class LobbyEvent {
    private final Sinks.Many<String> lobbySink;

    public LobbyEvent(Sinks.Many<String> lobbySink) {
        this.lobbySink = lobbySink;
    }

    public void publishEvent(String event) {
        System.out.println("Publishing event: " + event);
        lobbySink.tryEmitNext(event);
    }

    public Flux<String> getLobbyEvents() {
        
        return lobbySink.asFlux();
    }

}
