package com.llamas.puzzle_websocket_server.repository;

import java.util.List;

import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Repository;

import com.llamas.puzzle_websocket_server.entity.Word;

import main.java.com.llamas.puzzle_websocket_server.repository.WordRepository;
import reactor.core.publisher.Mono;

@Repository
public class WordRepositoryImpl implements WordRepository {
    
    private final DatabaseClient databaseClient; // Thay vì EntityManager như JPA

    public WordRepositoryImpl(DatabaseClient databaseClient) {
        this.databaseClient = databaseClient;
    } 

    @Override
    public Mono<List<Word>> findRandomWords(int wordCount) {
        return databaseClient.sql("SELECT * FROM word ORDER BY RANDOM() LIMIT :wordCount")
            .bind("wordCount", wordCount)
            .map((row, metadata) -> new Word(row.get("id", Long.class), row.get("text", String.class), row.get("category", String.class), row.get("difficulty", Integer.class), row.get("language", String.class), row.get("topic", String.class)))
            .all()
            .collectList();
    }

}
