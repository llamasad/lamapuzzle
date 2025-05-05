package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;

import lombok.Data;



@Data
public class FlushScoreDTO {
    private String sid;
    private int score;

    @JsonCreator
    public FlushScoreDTO(@JsonProperty("sid") String sid, @JsonProperty("score") int score) {
        this.sid = sid;
        this.score = score;
    }

}
