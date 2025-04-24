package com.llamas.puzzle_websocket_server.model;

public enum Action {
    DRAW,
    CHAT_AND_ANSWER,
    CHOOSE_WORD,
    START_GAME,
    JOIN_PUBLIC_LOBBY,
    JOIN_PRIVATE_LOBBY,
    CREATE_PRIVATE_LOBBY,
    EDIT,
    GAME_STATE
}