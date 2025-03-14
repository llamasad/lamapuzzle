package com.llamas.puzzle_websocket_server.flyweight;

import java.util.List;

import com.llamas.puzzle_websocket_server.model.Stroke;
import com.llamas.puzzle_websocket_server.model.Vector2D;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BrushConcrete extends DrawingUtility {
    
    public BrushConcrete(String color, int thickness) {
        super(color, thickness);
    }



    @Override
    public Stroke<BrushConcrete> draw(List<Vector2D> positions) {

        return new Stroke<>(this, positions, BrushConcrete.class);
    }

}