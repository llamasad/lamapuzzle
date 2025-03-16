package com.llamas.puzzle_websocket_server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Player {
    private String sid;
    private String username;
    private PlayerRole role;   
    private boolean isAuthorized; 
    private int score;
    
}
