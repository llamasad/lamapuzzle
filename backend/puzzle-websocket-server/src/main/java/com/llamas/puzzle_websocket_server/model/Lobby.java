package com.llamas.puzzle_websocket_server.model;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.ArrayList;

import lombok.Data;

import reactor.core.publisher.Sinks;

@Data
public class Lobby extends LobbySetting{
    private final String id;
    private final Sinks.Many<String> sink = Sinks.many().multicast().onBackpressureBuffer();
    private int currentRound= 1;
    private LobbyStatus status = LobbyStatus.PENDING_LOBBY;
    private final Map<String, Player> players = new HashMap<>();
    private final Queue<String> drawerQueue = new LinkedList<>();
    private List<String> words;
    private List<String> customWords;
    private String currentWord;
    private List<Vector2D> sessionTemporaryPoints= new ArrayList<>();


    public Lobby(String id, int maxPlayer, int drawTime, int wordCount, int maxRound, Language language, GameMode gameMode, boolean isPrivate, int hints, int drawingTime, boolean isUseCustomWords) {  
        super(maxPlayer, drawTime, wordCount, maxRound, language, gameMode, isPrivate, hints, isUseCustomWords);
        this.id = id;
    }

    //default lobby setting
    public Lobby(String id) {
        super(8, 60, 3, 3, Language.ENGLISH, GameMode.NORMAL, false, 2,false);
        this.id = id;
    }
}