package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

//json object for role change
@Data
public class ChatDTO {
    private final String msg;
    private final String username;
    private final String sid;
    private Boolean isCorrect;

    @JsonCreator
    public ChatDTO(@JsonProperty("msg") String msg, @JsonProperty("username") String username , @JsonProperty("sid") String sid , @JsonProperty("isCorrect") Boolean isCorrect) {
        this.msg = msg;
        this.username = username;
        this.sid = sid;
        this.isCorrect = isCorrect;
    }
}
