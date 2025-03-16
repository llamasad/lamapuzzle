package com.llamas.puzzle_websocket_server.model;

import java.util.HashMap;
import java.util.Map;

import lombok.Data;
import reactor.core.publisher.Sinks;

@Data
public class Lobby {
    private final String id;
    private final Sinks.Many<String> sink;
    private final int maxPlayer;
    private final int drawTime;
    private final int workCount;
    private final Language language;
    private final GameMode gameMode;
    private final Map<String, Player> players = new HashMap<>();
    public Lobby(String id, int maxPlayer, int drawTime, int workCount, Language language, GameMode gameMode) {
        this.id = id;
        this.sink = Sinks.many().multicast().onBackpressureBuffer();
        this.maxPlayer = maxPlayer;
        this.drawTime = drawTime;
        this.workCount = workCount;
        this.language = language;
        this.gameMode = gameMode;
    }

    public Lobby (String id) {
        this(id, 8, 60, 3, Language.ENGLISH, GameMode.NORMAL);
    }

}