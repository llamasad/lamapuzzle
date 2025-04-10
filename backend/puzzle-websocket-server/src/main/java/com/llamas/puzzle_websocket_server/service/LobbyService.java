package com.llamas.puzzle_websocket_server.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Queue;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.model.WordsToChooseDTO;

@Service
public class LobbyService {

    StrokeStackManager strokeStackManager;
    ObjectMapper objectMapper;

    LobbyService(StrokeStackManager strokeStackManager, ObjectMapper objectMapper) {
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
    }

    public Player choosePlayer(Lobby lobby) {
        Queue<String> drawers = lobby.getDrawerQueue();
        if (drawers.isEmpty()) {
            drawers.addAll(lobby.getPlayers().keySet());
        }

        String drawerSid = drawers.poll();
        Player drawer = lobby.getPlayers().get(drawerSid);

        for (Player player : lobby.getPlayers().values()) {
            if (player.getRole() == PlayerRole.DRAWER) {
                player.setRole(PlayerRole.GUESSER);
                break;
            }
        }

        drawer.setRole(PlayerRole.DRAWER);
        drawers.add(drawerSid);
        return drawer;
    }

    public List<String> chooseWords(Lobby lobby) {
        List<String> words = lobby.isUseCustomWords() ? lobby.getCustomWords() : lobby.getWords();
        Collections.shuffle(words);
        int wordCount = Math.min(lobby.getWordCount(), words.size());
        List<String> selectedWords = new ArrayList<>(words.subList(0, wordCount));
        words.subList(0, wordCount).clear();
        return selectedWords;
    }

    public void emitWordBasedOnWordCount(Lobby lobby) {
        List<String> selectedWords = chooseWords(lobby);
        Player drawer = choosePlayer(lobby);
        WordsToChooseDTO wordsToChooseDTO = new WordsToChooseDTO(selectedWords, drawer.getUsername(), drawer.getSid());
        DataWraperDTO<WordsToChooseDTO> dataWraperDTO = new DataWraperDTO("wordsToChoose", wordsToChooseDTO);
        try {
            lobby.getSink().tryEmitNext(objectMapper.writeValueAsString(dataWraperDTO));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int calculateScore(Long answerTime, Long roundStartTimes, Long drawTime) {
        Long guessTime = Math.max(answerTime - roundStartTimes, 0);
        if (guessTime > drawTime) {
            return 0;
        }

        Long score = 100 - (guessTime * 100 / drawTime);

        return Math.toIntExact(score);
    }

    public void updateAndEmitScore(Player player, int score, Lobby lobby) {
        player.setScore(player.getScore() + score);
        player.setScorePerTurn(score);
        List<Player> players = new ArrayList<>(lobby.getPlayers().values());
        List<PlayerDTO> playerDTOs = players.stream()
                .map(p -> new PlayerDTO(p.getUsername(), p.isAuthorized(), p.getAvatar(), p.getRole(), p.getScore(),
                        p.getScorePerTurn(), p.isAnswered()))
                .toList();
        DataWraperDTO<List<PlayerDTO>> dataWraperDTO = new DataWraperDTO("playerList", playerDTOs);

        try {
            lobby.getSink().tryEmitNext(objectMapper.writeValueAsString(dataWraperDTO));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void refreshLobbyEachRound(Lobby lobby) {
        for (Player player : lobby.getPlayers().values()) {
            player.setRole(PlayerRole.GUESSER);
            player.setAnswered(false);
        }
        StrokeStack strokeStack = strokeStackManager.getStrokeStackForRoom(lobby.getId());
        strokeStack.clear();
        lobby.setCurrentWord(null);
        lobby.getSessionTemporaryPoints().clear();

    }
}