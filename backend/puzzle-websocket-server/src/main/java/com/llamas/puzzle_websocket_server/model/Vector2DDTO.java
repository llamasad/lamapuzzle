package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Vector2DDTO {
    private int[] vector= new int[2];


    @JsonCreator
    public Vector2DDTO(@JsonProperty("x") int x, @JsonProperty("y") int y) {
        this.vector[0] = x;
        this.vector[1] = y;
    }

    public Vector2DDTO(){}

    public int getX() {
        return this.vector[0];
    }

    public int getY() {
        return this.vector[1];
    }
    public Vector2D toVector2D() {
        return new Vector2D(this.vector[0], this.vector[1]);
    }
}
