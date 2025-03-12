package com.llamas.puzzle_websocket_server.flyweight;

import com.llamas.puzzle_websocket_server.model.StrokeDTO;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class DrawingUtility {
    private String color;
    private int thickness;
    
    public abstract void draw(StrokeDTO stroke);
} 