package com.llamas.puzzle_websocket_server.model;

import java.util.List;
import lombok.AllArgsConstructor;

import com.llamas.puzzle_websocket_server.flyweight.DrawingUtility;
import com.llamas.puzzle_websocket_server.model.StrokeDTO;
import com.llamas.puzzle_websocket_server.model.Vector2D;

@AllArgsConstructor
public class Stroke<T extends DrawingUtility> {
    private final T tool;
    private final List<Vector2D> positions;
    private final Class<T> type;

    public StrokeDTO toStrokeDTO() {
        return new StrokeDTO(this.getToolType(),tool.getColor() ,positions,tool.getThickness());
    }    
    private String getToolType() {
        return type.getSimpleName().replace("Concrete", "");
    }

    @Override
    public String toString() {
        return "Stroke{" +
                "drawingUtility=" + tool +
                ", points=" + positions +
                '}';
    }
}
