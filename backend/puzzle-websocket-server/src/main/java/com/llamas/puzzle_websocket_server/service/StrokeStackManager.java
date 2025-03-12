package com.llamas.puzzle_websocket_server.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class StrokeStackManager {
    private final Map<String, StrokeStack> userStrokeStacks = new HashMap<>();

    public StrokeStack getStrokeStackForUser(String userId) {
        return userStrokeStacks.computeIfAbsent(userId, k -> new StrokeStack());
    }

    public void removeStrokeStackForUser(String userId) {
        userStrokeStacks.remove(userId);
    }
}