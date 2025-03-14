package com.llamas.puzzle_websocket_server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String username;
    private UserRole role;   
    private boolean isAuthorized; 
    private int score;
    
}
