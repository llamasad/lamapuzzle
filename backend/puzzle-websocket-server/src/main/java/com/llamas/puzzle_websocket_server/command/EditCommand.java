package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.StrokeStack;
import com.llamas.puzzle_websocket_server.service.StrokeStackManager;

import reactor.core.publisher.Mono;

public class EditCommand implements Command<String> {
    // This class is a placeholder for the EditCommand implementation.
    // It currently does not have any specific functionality or properties.
    // You can add methods and properties as needed for your application.
    StrokeStackManager strokeStackManager;
    ObjectMapper objectMapper;
    
    public EditCommand(StrokeStackManager strokeStackManager, ObjectMapper objectMapper) {
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, String data, LobbyEvent lobbyEvent, String lobbyId) {
        StrokeStack strokeStack = strokeStackManager.getStrokeStackForRoom(lobbyId);
        try {
            switch (data) {
                case "UNDO":
                    strokeStack.undo();
                    System.out.println(strokeStack.getRedoStack());
                    System.out.println(strokeStack.getUndoStack());
                    lobbyEvent.publishEvent(objectMapper.writeValueAsString(new DataWraperDTO<String>("edit", "UNDO")));

                    break;
                case "REDO":
                    strokeStack.redo();
                    System.out.println(strokeStack.getRedoStack());
                    System.out.println(strokeStack.getUndoStack());
                    lobbyEvent.publishEvent(objectMapper.writeValueAsString(new DataWraperDTO<String>("edit", "REDO")));

                    break;

            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            // Optionally, handle the exception in a way that fits your application's needs
        }

        return Mono.empty();
    }

}
