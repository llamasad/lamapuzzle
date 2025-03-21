package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.llamas.puzzle_websocket_server.service.LobbyEvent;

import reactor.core.publisher.Mono;

public interface Command<T> {
    Mono<Void> execute(WebSocketSession session, T data, LobbyEvent lobbyEvent ,String lobbyId);
}