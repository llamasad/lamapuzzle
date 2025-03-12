package com.llamas.puzzle_websocket_server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StrokeDTO {
    private String toolType;
    private String color;
    private Vector2D position;
}