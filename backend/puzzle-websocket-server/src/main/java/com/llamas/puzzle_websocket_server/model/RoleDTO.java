package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

//json object for role change
public class RoleDTO {
    private final PlayerRole role;

    @JsonCreator
    public RoleDTO(@JsonProperty("role") PlayerRole role) {
        this.role = role;
    }

    public PlayerRole getRole() {
        return role;
    }
}
