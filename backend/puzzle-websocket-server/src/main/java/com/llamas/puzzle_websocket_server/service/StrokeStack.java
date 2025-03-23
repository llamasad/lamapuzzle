package com.llamas.puzzle_websocket_server.service;

import java.util.Stack;

import com.llamas.puzzle_websocket_server.flyweight.DrawingUtility;
import com.llamas.puzzle_websocket_server.model.Stroke;

public class StrokeStack {
    private Stack<Stroke<DrawingUtility>> undoStack = new Stack<>();
    private Stack<Stroke<DrawingUtility>> redoStack = new Stack<>();

    public void addStroke(Stroke<DrawingUtility> stroke) {
        undoStack.push(stroke);
        redoStack.clear();
    }

    public void undo() {
        if (!undoStack.isEmpty()) {
            Stroke<DrawingUtility> stroke = undoStack.pop();
            redoStack.push(stroke);
        }
    }

    public void redo() {
        if (!redoStack.isEmpty()) {
            Stroke<DrawingUtility> stroke = redoStack.pop();
            undoStack.push(stroke);
        }
    }

    public Stack<Stroke<DrawingUtility>> getUndoStack() {
        return undoStack;
    }

    public Stack<Stroke<DrawingUtility>> getRedoStack() {
        return redoStack;
    }

    public void clear() {
        undoStack.clear();
        redoStack.clear();
    }
}