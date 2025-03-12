package com.llamas.puzzle_websocket_server.model;

import java.util.List;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
public class Vector2DDTO {
    private int[] vector= new int[2];

    public Vector2DDTO(int x, int y) {
        this.vector[0] = x;
        this.vector[1] = y;
    }
}
