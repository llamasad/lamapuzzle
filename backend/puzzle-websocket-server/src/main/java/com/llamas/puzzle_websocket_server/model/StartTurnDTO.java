package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;



@Data
public class StartTurnDTO {
    private String word;
    private int drawTime;
    private int cunrentRound;
    private int maxRound;
    
    @JsonCreator
    public StartTurnDTO(@JsonProperty("word") String word, 
                        @JsonProperty("drawTime") int drawTime,
                        @JsonProperty("cunrentRound") int cunrentRound,
                        @JsonProperty("maxRound") int maxRound) {
        this.word = word;
        this.drawTime = drawTime;
        this.cunrentRound = cunrentRound;
        this.maxRound = maxRound;
    }

    
}
