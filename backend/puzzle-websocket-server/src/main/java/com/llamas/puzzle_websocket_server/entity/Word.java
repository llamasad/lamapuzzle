package com.llamas.puzzle_websocket_server.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table("word")
@Data
public class Word {
    @Id
    private Long id;
    private String text;
    private String category;
    private String difficulty;
    private String language;
    private String topic;

    public Word() {
        // no-arg constructor
    }
    
    public Word(Long id, String text, String category, String difficulty, String language, String topic) {
        this.id = id;
        this.text = text;
        this.category = category;
        this.difficulty = difficulty;
        this.language = language;
        this.topic = topic;
    }
}

