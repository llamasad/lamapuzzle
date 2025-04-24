package com.llamas.puzzle_websocket_server.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class StrokeDTO {
    private String toolType;
    private String color;
    private int thickness;
    private List<Vector2D> position;

    @JsonCreator
    public StrokeDTO(
            @JsonProperty("toolType") String toolType,
            @JsonProperty("color") String color,
            @JsonProperty("position") List<Vector2D> position,
            @JsonProperty("thickness") int thickness) {
        this.thickness = thickness;
        this.toolType = toolType;
        this.color = color;
        this.position = position;
        
    }

}