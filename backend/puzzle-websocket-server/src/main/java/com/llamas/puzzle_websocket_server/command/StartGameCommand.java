package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbySettingDTO;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;
import com.llamas.puzzle_websocket_server.service.WordService;

import reactor.core.publisher.Mono;

public class StartGameCommand implements  Command<LobbySettingDTO>{
    private final LobbyManager lobbyManager;
    private final LobbyService lobbyService;
    private final WordService wordService;

    public StartGameCommand(ObjectMapper objectMapper, LobbyManager lobbyManager, LobbyService lobbyService, WordService wordService) {
        this.lobbyManager = lobbyManager;
        this.lobbyService = lobbyService;
        this.wordService = wordService;
    }
    
    @Override
    public Mono<Void> execute(WebSocketSession session, LobbySettingDTO data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        if (lobby.getStatus().equals(LobbyStatus.IS_PLAYING)) {
            System.out.println("Game is already on, ignoring command");
            return Mono.empty();
        }
        if(lobby.getPlayers().size() < 2) {
            
            return Mono.empty();
        }
        data.applyTo(lobby);
        int wordsFetchCount = lobby.getWordCount()*lobby.getMaxRound();
        wordService.getRandomWord(wordsFetchCount)
            .doOnNext(words -> {
                words.forEach(word -> {
                    lobby.getWords().add(word.getText());
                });
            })
            .doOnSuccess(word -> {
                lobby.setStatus(LobbyStatus.ROUND_IN_PROGRESS);
                lobby.setCurrentRound(1);
                lobbyService.emitWordBasedOnWordCount(lobby);
            })
            .subscribe();
        
        return Mono.empty();
    }

}
