package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class PlayerDTO {

    private String username;
    private boolean isAuthorized;
    private String avatar;
    private PlayerRole role;
    private int score;
    private int scorePerTurn;
    private boolean isAnswered;

    @JsonCreator
    public PlayerDTO(@JsonProperty("username") String username,
                     @JsonProperty("isAuthorized") boolean isAuthorized,
                     @JsonProperty("avatar") String avatar,
                     @JsonProperty("role") PlayerRole role,
                     @JsonProperty("score") int score,
                     @JsonProperty("scorePerTurn") int scorePerTurn,
                     @JsonProperty("isAnswered") boolean isAnswered) {
        this.username = username;
        this.isAuthorized = isAuthorized;
        this.avatar = avatar;
        this.role = role;
        this.score = score;
        this.scorePerTurn = scorePerTurn;
        this.isAnswered = isAnswered;
    }

}
