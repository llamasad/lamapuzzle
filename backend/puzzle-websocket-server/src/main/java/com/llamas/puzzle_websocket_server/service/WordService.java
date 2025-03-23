package com.llamas.puzzle_websocket_server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.llamas.puzzle_websocket_server.entity.Word;
import com.llamas.puzzle_websocket_server.repository.WordRepository;

import reactor.core.publisher.Mono;

@Service
public class WordService {
    private final WordRepository wordRepository;

    public WordService(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    public Mono<List<Word>> getRandomWord(int wordCount) {
        return wordRepository.findRandomWord(wordCount);
    }
}
