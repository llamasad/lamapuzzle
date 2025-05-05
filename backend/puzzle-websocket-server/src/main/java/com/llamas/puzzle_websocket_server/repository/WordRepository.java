package com.llamas.puzzle_websocket_server.repository;

import java.util.List;

import com.llamas.puzzle_websocket_server.entity.Word;

import reactor.core.publisher.Mono;

public interface  WordRepository {
    Mono<List<Word>> findRandomWords(int wordCount);
}
