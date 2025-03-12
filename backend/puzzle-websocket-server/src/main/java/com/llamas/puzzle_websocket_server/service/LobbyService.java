package com.llamas.puzzle_websocket_server.service;

import com.llamas.puzzle_websocket_server.model.StrokeDTO;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;



public class LobbyService {
    private final Sinks.Many<String> lobbySink;

    public LobbyService(Sinks.Many<String> lobbySink) {
        this.lobbySink = lobbySink;
    }

    public void publishEvent(StrokeDTO event) {
        System.out.println("Publishing event: " + event);
        lobbySink.tryEmitNext(event);
    }

    public Flux<String> getLobbyEvents() {
        return lobbySink.asFlux();
    }
}
