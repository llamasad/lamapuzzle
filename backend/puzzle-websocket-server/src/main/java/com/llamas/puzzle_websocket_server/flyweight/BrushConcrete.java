package com.llamas.puzzle_websocket_server.flyweight;

import com.llamas.puzzle_websocket_server.model.Stroke;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BrushConcrete implements DrawingUtility {
    
    public BrushConcrete(String color, int thickness) {
        super(color, thickness);
    }

    @Override
    public void draw(Stroke<BrushConcrete> stroke) {
        System.out.println("Drawing with pen of color: " +getColor()+ " at position: " + stroke.getPosition().getX() + ", " + stroke.getPosition().getY());
    }

}