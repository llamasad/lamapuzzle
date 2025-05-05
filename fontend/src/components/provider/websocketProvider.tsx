import React, { createContext, useContext, useState } from "react";
import { playerStart } from "../gameStart";
import { on } from "events";
import { v4 as uuidv4 } from 'uuid';


const WebSocketContext = createContext<{
  ws: WebSocket | null;
  connect: (onOpen: (ws: WebSocket) => void) => void;
  disconnect: () => void;
  createLobby: (onOpen: (ws: WebSocket) => void,lobbyId:String) => void;
} | null>(null);

export const WebSocketProvider: React.FC<{
  children: React.ReactNode;
  query: string;
}> = ({ children, query }) => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  const connect = (onOpen: (ws: WebSocket) => void) => {
    if (ws) return;

    const newWs = query
      ? new WebSocket("ws://localhost:8080/event-emitter/" + query)
      : new WebSocket("ws://localhost:8080/event-emitter/publiclobby");
    
    newWs.onopen = () => onOpen(newWs);
    newWs.onclose = () => {
      
      setWs(null);
    };
    newWs.onerror = (error) => console.error("WebSocket Error:", error);

    setWs(newWs);
  };
  
  const createLobby=(onOpen: (ws: WebSocket) => void,lobbyId:String)=>{
    if (ws) return;
    const newWs = new WebSocket("ws://localhost:8080/event-emitter/cpl:" + lobbyId);

    newWs.onopen = () => onOpen(newWs);
    newWs.onclose = () => 
    newWs.onerror = (error) => console.error("WebSocket Error:", error);

    setWs(newWs);
  }

  const disconnect = () => {
    ws?.close();
    setWs(null);
  };

  return (
    <WebSocketContext.Provider value={{ ws, connect, disconnect ,createLobby }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return context;
};


