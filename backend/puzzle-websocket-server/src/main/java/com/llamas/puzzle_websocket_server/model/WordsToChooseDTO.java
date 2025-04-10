package com.llamas.puzzle_websocket_server.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class WordsToChooseDTO {
    private List<String> words;
    private String drawerName;
    private String id;

    @JsonCreator
    public WordsToChooseDTO(@JsonProperty("words") List<String> words,
            @JsonProperty("drawerName") String drawerName, @JsonProperty("id") String id) {
        this.id = id;
        this.words = words;
        this.drawerName = drawerName;
    }

}
