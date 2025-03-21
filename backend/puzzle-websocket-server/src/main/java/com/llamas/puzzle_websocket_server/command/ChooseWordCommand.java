package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.service.LobbyContext;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;

import reactor.core.publisher.Mono;

public class ChooseWordCommand implements Command<String> {
    private final LobbyManager lobbyManager;

    public ChooseWordCommand(LobbyManager lobbyManager) {
        this.lobbyManager = lobbyManager;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, String data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        LobbyContext lobbyContext = lobbyManager.getOrCreateLobbyContext(lobbyId);
        if (lobby != null) {
            int hints = Math.min(lobby.getHints(), data.length() - 1);
            char[] revealedWord = new char[data.length()];
            for (int i = 0; i < data.length(); i++) {
                revealedWord[i] = '_';
            }
            for (int i = 0; i < hints; i++) {
                int randomIndex;
                do {
                    randomIndex = (int) (Math.random() * data.length());
                } while (revealedWord[randomIndex] != '_');
                revealedWord[randomIndex] = data.charAt(randomIndex);
            }
            String revealedWordStr = new String(revealedWord);
            lobbyContext.startRound();
            lobby.getPlayers().values().stream()
                    .filter(player -> player.getRole() == PlayerRole.DRAWER)
                    .findFirst()
                    .ifPresent(player -> {
                        lobby.setCurrentWord(data);
                        lobby.getSink().tryEmitNext(revealedWordStr);
                    });
        }
        return Mono.empty();    
    }
}
