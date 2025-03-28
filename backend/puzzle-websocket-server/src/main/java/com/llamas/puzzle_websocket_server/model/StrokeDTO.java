package com.llamas.puzzle_websocket_server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StrokeDTO {
    private String toolType;
    private String color;
    private List<Vector2D> position;
}