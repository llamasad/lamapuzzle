package com.llamas.puzzle_websocket_server;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;
import org.springframework.web.reactive.socket.WebSocketMessage;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Sinks;

@Component("ReactiveWebSocketHandler")
public class ReactiveWebSocketHandler implements WebSocketHandler {

    private final LobbyManager lobbyManager;

    public ReactiveWebSocketHandler(LobbyManager lobbyManager) {
        this.lobbyManager = lobbyManager;
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        // Extract the lobby ID from the URI (e.g., /ws/{lobbyId})
        String path = session.getHandshakeInfo().getUri().getPath();
        String lobbyId = path.substring(path.lastIndexOf('/') + 1);
        if (lobbyId == null) {
            lobbyId = "default"; // fallback
        }

        Sinks.Many<String> lobbySink = lobbyManager.getOrCreateLobby(lobbyId);
        LobbyService lobbyService = new LobbyService(lobbySink);

        // When a client sends a message, publish it to the appropriate lobby topic
        Mono<Void> receive = session.receive()
            .map(WebSocketMessage::getPayloadAsText)
            .doOnNext(lobbyService::publishEvent)
            .then();

        // Subscribe the client to lobby events from the appropriate lobby topic
        Mono<Void> send = session.send(
            lobbyService.getLobbyEvents().map(session::textMessage)
        );

        return Mono.zip(send, receive).then();
    }
}