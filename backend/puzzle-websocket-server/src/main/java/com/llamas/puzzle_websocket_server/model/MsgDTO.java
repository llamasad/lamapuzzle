package com.llamas.puzzle_websocket_server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class MsgDTO {
    private String id;
    private String text;
    private String type;
    private String avatar;
    private Boolean isYourMessage;
    private String name;

    @JsonCreator
    public MsgDTO(@JsonProperty("text") String text,
                  @JsonProperty("type") String type,
                  @JsonProperty("avatar") String avatar,
                  @JsonProperty("isYourMessage") Boolean isYourMessage,
                  @JsonProperty("name") String name,
                  @JsonProperty("id") String id) {
        this.text = text;
        this.type = type;
        this.avatar = avatar;
        this.isYourMessage = isYourMessage;
        this.name = name;
        this.id = id;
    }

    
}
