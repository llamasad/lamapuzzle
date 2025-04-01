package com.llamas.puzzle_websocket_server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.llamas.puzzle_websocket_server.entity.Word;

import reactor.core.publisher.Mono;

@Service
public class WordService {
    // private final WordRepository wordRepository;

    // public WordService(WordRepository wordRepository) {
    //     this.wordRepository = wordRepository;
    // }

    public Mono<List<Word>> getRandomWord(int wordCount) {
        // return wordRepository.findRandomWord(wordCount);
        //for test i need return word base on count
        return Mono.just(List.of(new Word(1L, "fk12", "category", wordCount, "language", "topic" ),new Word(3L, "fk124", "category", wordCount, "language", "topic" ),new Word(2L, "fk1234", "category", wordCount, "language", "topic" )));
    }
}
