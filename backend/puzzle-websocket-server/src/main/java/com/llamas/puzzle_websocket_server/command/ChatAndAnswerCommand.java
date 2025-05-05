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
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        Player player = lobby.getPlayers().get(session.getId());
        PlayerRole playerRole = player.getRole();
        String currentWord = lobbyManager.getLobby(lobbyId).getCurrentWord();

        data.setId(session.getId());
        if (!PlayerRole.GUESSER.equals(playerRole)) {
            System.out.println("Player is not a guesser , ignoring command");
            return Mono.empty();
        }
        if (currentWord != null && currentWord.equals(data.getText()) && !player.isAnswered()
                && lobby.getStatus().equals(LobbyStatus.IS_PLAYING)) {

            long answerTime = System.currentTimeMillis() / 1000;
            long drawTime = lobby.getDrawTime();
            long turnStartTime = lobbyManager.getOrCreateLobbyContext(lobbyId).getTurnStartTime();
            player.setAnswered(true);
            try {
                int score = lobbyService.calculateScore(answerTime, turnStartTime, drawTime);
                System.out.println("Score: " + score);
                String message = player.getUsername() + " guessed the word: " + currentWord;
                data.setName(player.getUsername());
                data.setText("guessed the word");
                data.setType("notify");
                DataWraperDTO dataWraperDTO = new DataWraperDTO("message", data);
                lobbyEvent.publishEvent(objectMapper.writeValueAsString(dataWraperDTO));
                lobbyService.updateAndEmitScore(player, score, lobby);
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            if (data.getText().isEmpty()) {
                return Mono.empty();
            }
            if (currentWord!=null&&data.getText().contains(currentWord) && player.isAnswered()) {
                //
                StringBuilder maskedWord = new StringBuilder();
                for (int i = 0; i < currentWord.length(); i++) {
                    maskedWord.append("*");
                }

                data.setText(data.getText().replace(currentWord, maskedWord.toString()));

            }
            try {

                data.setName(player.getUsername().toString());
                DataWraperDTO dataWraperDTO = new DataWraperDTO("message", data);
                lobbyEvent.publishEvent(objectMapper.writeValueAsString(dataWraperDTO));

            } catch (Exception e) {
                System.out.println("Error while sending message: " + e.getMessage());
                e.printStackTrace();
            }
        }
        return Mono.empty();
    }
}