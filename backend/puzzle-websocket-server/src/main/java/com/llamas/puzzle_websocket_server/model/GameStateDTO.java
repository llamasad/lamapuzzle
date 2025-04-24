package com.llamas.puzzle_websocket_server.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@NoArgsConstructor
public class GameStateDTO {
    private String sessionId;
    private String currentWord;
    private Long turnTime;
    private int currentRound;
    private int totalRounds;
    private StrokeStackDTO strokeStack;


    @JsonCreator
    public GameStateDTO(
            @JsonProperty("sessionId") String sessionId,
            @JsonProperty("currentWord") String currentWord,
            @JsonProperty("turnTime") Long turnTime,
            @JsonProperty("currentRound") int currentRound,
            @JsonProperty("totalRounds") int totalRounds,
            @JsonProperty("strokeStack") StrokeStackDTO strokeStack) {
        this.strokeStack = strokeStack;
        this.sessionId = sessionId;
        this.currentWord = currentWord;
        this.turnTime = turnTime;
        this.currentRound = currentRound;
        this.totalRounds = totalRounds;

            }

    
}
