package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.ChatDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;

import reactor.core.publisher.Mono;

public class ChatAndAnswerCommand implements Command<ChatDTO> {

    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;
    private final LobbyService lobbyService;

    public ChatAndAnswerCommand(LobbyManager lobbyManager, ObjectMapper objectMapper, LobbyService lobbyService) {
        this.lobbyManager = lobbyManager;
        this.objectMapper = objectMapper;
        this.lobbyService = lobbyService;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, ChatDTO data, LobbyEvent lobbyEvent, String lobbyId) {
        Player player = lobbyManager.getLobby(lobbyId).getPlayers().get(session.getId());
        PlayerRole playerRole = player.getRole();
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        if (!PlayerRole.GUESSER.equals(playerRole)) {
            System.out.println("Player is not a guesser , ignoring command");
            return Mono.empty();
        }
        String currentWord = lobbyManager.getLobby(lobbyId).getCurrentWord();
        if (currentWord.equals(data.getMsg())&&!player.isAnswered() && lobby.getStatus().equals(LobbyStatus.IS_PLAYING)) {
            long answerTime = System.currentTimeMillis();
            long drawTime = lobby.getDrawTime();
            long roundStartTimes = lobbyManager.getOrCreateLobbyContext(lobbyId).getRoundStartTimes();
            player.setAnswered(true);
            data.setIsCorrect(true);
            try{
                lobbyEvent.publishEvent(objectMapper.writeValueAsString(data));
                int score=lobbyService.calculateScore(answerTime, roundStartTimes, drawTime);
                lobbyService.updateAndEmitScore(player, score, lobby);
            }catch(Exception e){
                e.printStackTrace();
            }
        }
        else if(!player.isAnswered() && lobby.getStatus().equals(LobbyStatus.IS_PLAYING)){
        try {
            lobbyEvent.publishEvent(objectMapper.writeValueAsString(data));
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        }
        return Mono.empty();
    }
}