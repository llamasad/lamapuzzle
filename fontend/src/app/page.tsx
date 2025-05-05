"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import GamePlay from "@/components/gamePlay";
import { WebSocketProvider } from "@/components/provider/websocketProvider";
import GameStart from "@/components/gameStart";
import LoadingModel from "@/components/loadingModel";
import { useSearchParams } from "next/navigation";
import Invite from "@/components/invite";

export type Status = "playing" | "end" | "landing"| "lobby"; 

const GameUI = {
  playing: GamePlay,
  end: GameStart,
  landing: GameStart,
  lobby: GamePlay,
};

export default function Page() {
  const searchParams = useSearchParams();
  const lobbyId = searchParams.get("invite")||"";
  const [gameStatus, setGameStatus] = useState<Status>("landing");
  const [isLoading, setIsLoading] = useState(false);
  const GameComponent = GameUI[gameStatus];
  const [privateLobbyId, setPrivateLobbyId] = useState<string | null>(null);

  return (
    <div className="pt-19">
      <WebSocketProvider query={lobbyId}>
        {isLoading && <LoadingModel />}
        {lobbyId && <Invite lobbyId={lobbyId} setGameStatus={setGameStatus} setIsLoading={setIsLoading} />}
        <GameComponent
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          privateLobbyId={privateLobbyId}
          setPrivateLobbyId={setPrivateLobbyId}
        />
      </WebSocketProvider>
    </div>
  );
}
