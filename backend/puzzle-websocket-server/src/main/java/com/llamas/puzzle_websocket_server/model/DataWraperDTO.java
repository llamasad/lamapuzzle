package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty; 

import lombok.Data; 

@Data
public class DataWraperDTO<T> {
    private String type;
    private T data;

    @JsonCreator
    public DataWraperDTO(@JsonProperty("type") String type, @JsonProperty("data") T data) {
        this.type = type;
        this.data = data;
    }
}
