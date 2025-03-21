package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class ScoreDTO { 
    private String sid;
    private int score;

    @JsonCreator
    public ScoreDTO(@JsonProperty("sid") String sid, @JsonProperty("score") int score) {
        this.sid = sid;
        this.score = score;
    }
}
