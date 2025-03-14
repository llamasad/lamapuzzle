package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Vector2DDTOWithStatus extends Vector2DDTO {

    private Status status;
    private String color;
    private int thickness;
    private String toolType;

    @JsonCreator
    public Vector2DDTOWithStatus(
            @JsonProperty("x") int x,
            @JsonProperty("y") int y,
            @JsonProperty("status") Status status,
            @JsonProperty("color") String color,
            @JsonProperty("thickness") int thickness,
            @JsonProperty("toolType") String toolType) {
        super(x, y);
        this.status = status;
        this.color = color;
        this.thickness = thickness;
        this.toolType = toolType;
    }
}