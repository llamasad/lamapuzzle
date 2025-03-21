package com.llamas.puzzle_websocket_server.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LobbySetting {
    private int maxPlayer;
    private int drawTime;
    private int wordCount;
    private int maxRound;
    private Language language;
    private GameMode gameMode;
    private boolean isPrivate;
    private int hints;
    private boolean isUseCustomWords;
}