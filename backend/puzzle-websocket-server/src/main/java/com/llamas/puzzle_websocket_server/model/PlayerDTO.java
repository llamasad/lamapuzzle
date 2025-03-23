package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class PlayerDTO {

    private String username;
    private boolean isAuthorized;

    @JsonCreator
    public PlayerDTO(@JsonProperty("username") String username, @JsonProperty("isAuthorized") boolean isAuthorized) {
        this.username = username;
        this.isAuthorized = isAuthorized;
    }
    
}
