package com.llamas.puzzle_websocket_server.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Queue;

import org.springframework.stereotype.Service;

import com.llamas.puzzle_websocket_server.model.Lobby;
import com.llamas.puzzle_websocket_server.model.Player;
import com.llamas.puzzle_websocket_server.model.PlayerRole;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LobbyService { 

    public Player choosePlayer(Lobby lobby){
        Queue<String> drawers = lobby.getDrawerQueue();
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

    //choose words for the drawer
    public List<String> chooseWords(Lobby lobby) {
        List<String> words = lobby.isUseCustomWords() ? lobby.getCustomWords() : lobby.getWords();
        Collections.shuffle(words);
        int wordCount = Math.min(lobby.getWordCount(), words.size());
        List<String> selectedWords = new ArrayList<>(words.subList(0, wordCount)); 
        words.subList(0, wordCount).clear();
        return selectedWords;
    }

    public void emitWordBasedOnWordCount(Lobby lobby){
        List<String> selectedWords = chooseWords(lobby);
        Player drawer = choosePlayer(lobby);
        lobby.getSink().tryEmitNext(drawer.getSid()+"-"+ String.join(",", selectedWords));
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
        try {
            lobby.getSink().tryEmitNext(player.getSid()+"-"+ score);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void refreshPlayers(Lobby lobby) {
        for (Player player : lobby.getPlayers().values()) {
            player.setRole(PlayerRole.GUESSER);
            player.setAnswered(false);
        }
    }
}
    
