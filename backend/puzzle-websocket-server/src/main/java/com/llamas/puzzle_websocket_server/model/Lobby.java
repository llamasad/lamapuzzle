package com.llamas.puzzle_websocket_server.model;

import java.util.HashMap;
import java.util.Map;

import reactor.core.publisher.Sinks;

public class Lobby {
    private final String id;
    private final Sinks.Many<String> sink;
    private final int maxPlayer;
    private final int drawTime;
    
    

    public Lobby(String id, int maxPlayer) {
        this.id = id;
        this.sink = Sinks.many().multicast().onBackpressureBuffer();
        this.maxPlayer = maxPlayer;
    }


}