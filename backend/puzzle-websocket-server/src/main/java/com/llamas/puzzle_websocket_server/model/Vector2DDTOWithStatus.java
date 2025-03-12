package com.llamas.puzzle_websocket_server.model;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class Vector2DDTOWithStatus extends Vector2DDTO {
    
    private Status status;
    private String color;

}