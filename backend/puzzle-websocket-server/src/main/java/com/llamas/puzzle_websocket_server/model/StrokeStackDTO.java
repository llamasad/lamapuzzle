package com.llamas.puzzle_websocket_server.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class StrokeStackDTO {
    private List<StrokeDTO> undoStack;
    private List<StrokeDTO> redoStack;

    @JsonCreator
    public StrokeStackDTO(
            @JsonProperty("undoStack") List<StrokeDTO> undoStack,
            @JsonProperty("redoStack") List<StrokeDTO> redoStack) {
        this.undoStack = undoStack;
        this.redoStack = redoStack;
    }
    
}
