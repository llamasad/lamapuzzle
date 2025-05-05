package com.llamas.puzzle_websocket_server.repository;

import java.util.List;

import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Repository;

import com.llamas.puzzle_websocket_server.entity.Word;

import com.llamas.puzzle_websocket_server.repository.WordRepository;
import reactor.core.publisher.Mono;

@Repository
public class WordRepositoryImpl implements WordRepository {

    private final DatabaseClient databaseClient; // Thay vì EntityManager như JPA

    public WordRepositoryImpl(DatabaseClient databaseClient) {
        this.databaseClient = databaseClient;
    }

    @Override
    public Mono<List<Word>> findRandomWords(int wordCount) {
        return databaseClient.sql(
                "SELECT w.id, w.word AS text, c.name AS category, l.name AS level, lang.name AS language, t.name AS topic "
                        +
                        "FROM words w " +
                        "LEFT JOIN categories c ON w.category_id = c.id " +
                        "LEFT JOIN topics t ON w.topic_id = t.id " +
                        "LEFT JOIN levels l ON w.level_id = l.id " +
                        "LEFT JOIN languages lang ON w.language_id = lang.id " +
                        "ORDER BY RANDOM() LIMIT :wordCount")
                .bind("wordCount", wordCount)
                .map((row, metadata) -> new Word(
                        row.get("id", Long.class),
                        row.get("text", String.class),
                        row.get("category", String.class),
                        row.get("level", String.class),
                        row.get("language", String.class),
                        row.get("topic", String.class)))
                .all()
                .collectList();
    }

}
