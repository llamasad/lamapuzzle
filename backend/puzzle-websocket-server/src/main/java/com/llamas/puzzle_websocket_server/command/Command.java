package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.llamas.puzzle_websocket_server.service.LobbyService;

import reactor.core.publisher.Mono;

public interface Command<T> {
    Mono<Void> execute(WebSocketSession session, T data, LobbyService lobbyService);
}