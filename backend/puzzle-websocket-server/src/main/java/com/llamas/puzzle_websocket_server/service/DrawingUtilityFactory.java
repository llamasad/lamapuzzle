package com.llamas.puzzle_websocket_server.service;

import com.llamas.puzzle_websocket_server.model.DrawingUtilityKey;
import com.llamas.puzzle_websocket_server.flyweight.DrawingUtility;
import com.llamas.puzzle_websocket_server.flyweight.BrushConcrete;
import com.llamas.puzzle_websocket_server.flyweight.EraserConcrete;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

@Component
public class DrawingUtilityFactory {
    private final Map<DrawingUtilityKey, DrawingUtility> flyweightCache = new HashMap<>();
    private final Map<String, Supplier<DrawingUtility>> drawingUtilityRegister = new HashMap<>();

    {
        registerDrawingUtility("Brush", BrushConcrete.class);
        registerDrawingUtility("Eraser", EraserConcrete.class);
    }

    public DrawingUtility getDrawingUtility(String type, String color, int thickness) {
        DrawingUtilityKey key = new DrawingUtilityKey(type, color, thickness);
        DrawingUtility drawingUtility = flyweightCache.get(key);
        if (drawingUtility == null) {
            Supplier<DrawingUtility> supplier = drawingUtilityRegister.get(type);
            if (supplier != null) {
                drawingUtility = supplier.get();
                drawingUtility.setColor(color);
                flyweightCache.put(key, drawingUtility);
            } else {
                throw new IllegalArgumentException("Unknown drawing utility type: " + type);
            }
        }
        return drawingUtility;
    }

    public void registerDrawingUtility(String type, Class<? extends DrawingUtility> drawingUtilityClass) {
        drawingUtilityRegister.put(type, () -> {
            try {
                return drawingUtilityClass.getDeclaredConstructor().newInstance();
            } catch (Exception e) {
                throw new RuntimeException("Failed to create instance of " + drawingUtilityClass.getName(), e);
            }
        });
    }

    public void registerDrawingUtility(Class<? extends DrawingUtility> drawingUtilityClass) {
        String type = drawingUtilityClass.getSimpleName();
        drawingUtilityRegister.put(type, () -> {
            try {
                return drawingUtilityClass.getDeclaredConstructor().newInstance();
            } catch (Exception e) {
                throw new RuntimeException("Failed to create instance of " + drawingUtilityClass.getName(), e);
            }
        });
    }
}