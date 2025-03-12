package com.llamas.puzzle_websocket_server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@AllArgsConstructor
@EqualsAndHashCode
public class DrawingUtilityKey {
    private String type;
    private String color;
    private int thickness;  
}