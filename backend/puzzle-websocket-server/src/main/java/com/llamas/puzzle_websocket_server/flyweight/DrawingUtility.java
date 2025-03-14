package com.llamas.puzzle_websocket_server.flyweight;

import com.llamas.puzzle_websocket_server.model.Stroke;
import com.llamas.puzzle_websocket_server.model.Vector2D;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class DrawingUtility {
    private String color;
    private int thickness;
    
    public abstract Stroke<? extends DrawingUtility> draw(List<Vector2D> positions);

}