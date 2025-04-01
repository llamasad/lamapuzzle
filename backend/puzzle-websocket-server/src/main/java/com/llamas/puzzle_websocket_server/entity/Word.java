package com.llamas.puzzle_websocket_server.entity;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;

// @Table("word")
@AllArgsConstructor
@Data
public class Word {
    @Id
    private Long id;
    private String text;
    private String category;
    private Integer difficulty;
    private String language;
    private String topic;
}

