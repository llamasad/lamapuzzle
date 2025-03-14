package com.llamas.puzzle_websocket_server.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class StrokeStackManager {
    private final Map<String, StrokeStack> roomStrokeStacks = new HashMap<>();

    public StrokeStack getStrokeStackForRoom(String roomId) {
        return roomStrokeStacks.computeIfAbsent(roomId, k -> new StrokeStack());
    }

    public void removeStrokeStackForRoom(String roomId) {
        roomStrokeStacks.remove(roomId);
    }
}