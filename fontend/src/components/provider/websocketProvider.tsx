import React, { createContext, useContext, useState } from "react";
import { playerStart } from "../gameStart";

const WebSocketContext = createContext<{
    ws: WebSocket | null;
    connect: () => void;
    disconnect: () => void;
} | null>(null);

export const WebSocketProvider: React.FC<{ children: React.ReactNode,query:string }> = ({ children,query }) => {
    const [ws, setWs] = useState<WebSocket | null>(null);

    const connect = (initMsg:playerStart) => {
        if (ws) return;

        const newWs =  query
        ? new WebSocket("ws://localhost:8080/event-emitter/" + query)
        : new WebSocket("ws://localhost:8080/event-emitter/publicLobby");
  ;
        
        newWs.onopen = () => newWs.send({initMsg});
        newWs.onclose = () => console.log("Disconnected from WebSocket");
        newWs.onerror = (error) => console.error("WebSocket Error:", error);
        
        setWs(newWs);
    };

    const disconnect = () => {
        ws?.close();
        setWs(null);
    };

    return (
        <WebSocketContext.Provider value={{ ws, connect, disconnect }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => {
    const context = useContext(WebSocketContext);
    if (!context) throw new Error("useWebSocket must be used within a WebSocketProvider");
    return context;
};
