package com.llamas.puzzle_websocket_server.model;

import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.enums.GameMode;
import com.llamas.puzzle_websocket_server.model.enums.Language;

import lombok.Data;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;


@Data
public class LobbySettingDTO {
    private int maxPlayer;
    private int drawTime;
    private int wordCount;
    private int maxRound;
    private Language language;
    private GameMode gameMode;
    private boolean isPrivate;
    private int hints;
    private boolean isUseCustomWords;

    @JsonCreator
    public LobbySettingDTO(@JsonProperty("maxPlayer") int maxPlayer, @JsonProperty("drawTime") int drawTime, @JsonProperty("workCount") int workCount, @JsonProperty("language") Language language, @JsonProperty("gameMode") GameMode gameMode, @JsonProperty("isPrivate") boolean isPrivate, @JsonProperty("hints") int hints, @JsonProperty("isUseCustomWords") boolean isUseCustomWords, @JsonProperty("maxRound") int maxRound) {
        this.maxPlayer = maxPlayer;
        this.drawTime = drawTime;
        this.wordCount = wordCount;
        this.language = language;
        this.gameMode = gameMode;
        this.isPrivate = isPrivate;
        this.hints = hints;
        this.isUseCustomWords = isUseCustomWords;
        this.maxRound = maxRound;
    }

    public void applyTo(Lobby lobby) {
        lobby.setMaxPlayer(maxPlayer);
        lobby.setDrawTime(drawTime);
        lobby.setWordCount(wordCount);
        lobby.setLanguage(language);
        lobby.setGameMode(gameMode);
        lobby.setPrivate(isPrivate);
        lobby.setHints(hints);
        lobby.setUseCustomWords(isUseCustomWords);
        lobby.setMaxRound(maxRound);    
    }

}
