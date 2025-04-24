package com.llamas.puzzle_websocket_server.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.llamas.puzzle_websocket_server.entity.Word;
import com.llamas.puzzle_websocket_server.model.DataWraperDTO;
import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerDTO;
import com.llamas.puzzle_websocket_server.model.PlayerRole;
import com.llamas.puzzle_websocket_server.model.WordsToChooseDTO;

import reactor.core.publisher.Mono;

@Service
public class LobbyService {

    StrokeStackManager strokeStackManager;
    ObjectMapper objectMapper;
    WordService wordService;

    LobbyService(StrokeStackManager strokeStackManager, ObjectMapper objectMapper, WordService wordService) {
        this.strokeStackManager = strokeStackManager;
        this.objectMapper = objectMapper;
        this.wordService = wordService;
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

  public Mono<List<String>> chooseWords(Lobby lobby) {
    int wordsFetchCount = lobby.getWordCount() * lobby.getMaxRound() * lobby.getPlayers().size();

    List<String> words = lobby.isUseCustomWords() && lobby.getCustomWords().size() >= lobby.getWordCount()? lobby.getCustomWords()
        : lobby.getWords();

    if (!words.isEmpty()) {
        Collections.shuffle(words);
        int wordCount = Math.min(lobby.getWordCount(), words.size());
        List<String> selectedWords = new ArrayList<>(words.subList(0, wordCount));
        words.subList(0, wordCount).clear();
        return Mono.just(selectedWords);
    } else {
        return wordService.getRandomWord(wordsFetchCount) // Mono<List<Word>>
            .map(fetchedWords -> {
                // Convert to strings
                List<String> asStrings = fetchedWords.stream()
                    .map(Word::getText) // or getText(), etc.
                    .collect(Collectors.toList());

                words.addAll(asStrings); 

                Collections.shuffle(words);
                int wordCount = Math.min(lobby.getWordCount(), words.size());
                List<String> selectedWords = new ArrayList<>(words.subList(0, wordCount));
                words.subList(0, wordCount).clear();

                return selectedWords;
            });
    }
}

    
    public void emitWordBasedOnWordCount(Lobby lobby) {
        chooseWords(lobby).subscribe(selectedWords -> {
            Player drawer = choosePlayer(lobby);
            WordsToChooseDTO wordsToChooseDTO = new WordsToChooseDTO(selectedWords, drawer.getUsername(), drawer.getSid());
            DataWraperDTO<WordsToChooseDTO> dataWraperDTO = new DataWraperDTO<>("wordsToChoose", wordsToChooseDTO);
            try {
                lobby.getSink().tryEmitNext(objectMapper.writeValueAsString(dataWraperDTO));
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }
    

    public int calculateScore(Long answerTime, Long turnStartTime, Long drawTime) {
        System.out.println("Answer time: " + answerTime + "-"+ turnStartTime);
        Long guessTime = Math.max(answerTime - turnStartTime, 0);
        if (guessTime > drawTime) {
            return 0;
        }

        Long score = 100 - (guessTime * 100 / drawTime);

        return Math.toIntExact(score);
    }

    public void updateAndEmitScore(Player player, int score, Lobby lobby) {
        player.setScore(player.getScore() + score);
        player.setScorePerTurn(score);

        Map<String, Player> playersMap = lobby.getPlayers();
        if (playersMap == null) {
            System.err.println("Players map is null");
            return; // Exit early to avoid null issues
        }

        List<Player> players = new ArrayList<>(playersMap.values());
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