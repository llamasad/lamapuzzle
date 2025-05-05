package com.llamas.puzzle_websocket_server.command;

import org.springframework.web.reactive.socket.WebSocketSession;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.command.Command;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.LobbyStatus;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.model.StartTurnDTO;
import com.llamas.puzzle_websocket_server.service.LobbyContext;
import com.llamas.puzzle_websocket_server.service.LobbyEvent;
import com.llamas.puzzle_websocket_server.service.LobbyManager;

import reactor.core.publisher.Mono;

public class ChooseWordCommand implements Command<String> {
    private final LobbyManager lobbyManager;
    private final ObjectMapper objectMapper;

    public ChooseWordCommand(LobbyManager lobbyManager, ObjectMapper objectMapper) {
        this.lobbyManager = lobbyManager;
        this.objectMapper = objectMapper;
    }

    @Override
    public Mono<Void> execute(WebSocketSession session, String data, LobbyEvent lobbyEvent, String lobbyId) {
        Lobby lobby = lobbyManager.getLobby(lobbyId);
        LobbyContext lobbyContext = lobbyManager.getOrCreateLobbyContext(lobbyId);
        if (lobby.getStatus() == LobbyStatus.IS_PLAYING) {
            System.out.println("Lobby is not in WAITING_FOR_WORD status, ignoring command");
            return Mono.empty();
        }
        if (lobby != null) {
            int hints = Math.min(lobby.getHints(), data.length() - 1);
            char[] revealedWord = new char[data.length()];

            // Nếu độ dài từ <= hints + 1 thì không tiết lộ ký tự nào
            boolean shouldReveal = data.length() > hints + 1;

            // Khởi tạo mảng với '_' hoặc giữ nguyên khoảng trắng
            for (int i = 0; i < data.length(); i++) {
                revealedWord[i] = (data.charAt(i) == ' ') ? ' ' : '_';
            }

            if (shouldReveal) {
                for (int i = 0; i < hints; i++) {
                    int randomIndex;
                    do {
                        randomIndex = (int) (Math.random() * data.length());
                    } while (revealedWord[randomIndex] != '_' || data.charAt(randomIndex) == ' ');
                    revealedWord[randomIndex] = data.charAt(randomIndex);
                }
            }

            String revealedWordStr = new String(revealedWord);
            ;
            lobbyContext.startRound();
            System.out.println("Starting round " + lobby.getCurrentRound() + " with word: " + data);
            lobby.getPlayers().values().stream()
                    .filter(player -> player.getRole() == PlayerRole.DRAWER)
                    .findFirst()
                    .ifPresent(player -> {
                        lobby.setCurrentWord(data);
                        lobby.setHintWord(revealedWordStr);
                        System.out.println("Current word: " + lobby.getCurrentWord());
                        StartTurnDTO startTurnDTO = new StartTurnDTO(revealedWordStr, lobby.getDrawTime(),
                                lobby.getCurrentRound(), lobby.getMaxRound());
                        DataWraperDTO dataWrapper = new DataWraperDTO("guessWord", startTurnDTO);
                        try {
                            String json = objectMapper.writeValueAsString(dataWrapper);
                            lobby.getSink().tryEmitNext(json);
                        } catch (JsonProcessingException e) {
                            e.printStackTrace();
                        }
                    });
        }
        return Mono.empty();
    }
}
