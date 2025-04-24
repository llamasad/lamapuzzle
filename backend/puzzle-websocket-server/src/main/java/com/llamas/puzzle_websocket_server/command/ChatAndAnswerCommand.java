package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.model.MsgDTO;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;
import com.llamas.puzzle_websocket_server.service.LobbyService;

import reactor.core.publisher.Mono;

public class ChatAndAnswerCommand implements Command<MsgDTO> {

    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;
    private final LobbyService lobbyService;

    public ChatAndAnswerCommand(LobbyManager lobbyManager, ObjectMapper objectMapper, LobbyService lobbyService) {
        this.lobbyManager = lobbyManager;
        this.objectMapper = objectMapper;
        this.lobbyService = lobbyService;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, MsgDTO data, LobbyEvent lobbyEvent, String lobbyId) {
        Player player = lobbyManager.getLobby(lobbyId).getPlayers().get(session.getId());
        PlayerRole playerRole = player.getRole();
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        data.setId(session.getId());
        if (!PlayerRole.GUESSER.equals(playerRole)) {
            System.out.println("Player is not a guesser , ignoring command");
            return Mono.empty();
        }
        String currentWord = lobbyManager.getLobby(lobbyId).getCurrentWord();
        if (currentWord != null && currentWord.equals(data.getText()) && !player.isAnswered()
                && lobby.getStatus().equals(LobbyStatus.IS_PLAYING)) {
            long answerTime = System.currentTimeMillis()/1000;
            long drawTime = lobby.getDrawTime();
            long turnStartTime = lobbyManager.getOrCreateLobbyContext(lobbyId).getTurnStartTime();
            player.setAnswered(true);
            try {
                int score = lobbyService.calculateScore(answerTime, turnStartTime, drawTime);
                System.out.println("Score: " + score);
                data.setName(player.getUsername());
                data.setText("guessed the word");
                data.setType("notify");
                DataWraperDTO dataWraperDTO = new DataWraperDTO("message", data);
                lobbyEvent.publishEvent(objectMapper.writeValueAsString(dataWraperDTO));
                lobbyService.updateAndEmitScore(player, score, lobby);
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else{
            try {
                data.setName(player.getUsername());
                DataWraperDTO dataWraperDTO = new DataWraperDTO("message", data);
                lobbyEvent.publishEvent(objectMapper.writeValueAsString(dataWraperDTO));

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return Mono.empty();
    }
}