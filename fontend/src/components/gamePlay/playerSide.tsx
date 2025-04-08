import Image from "next/image";
import fonts from "@/assets/fonts";
import { Dispatch, useEffect, useState } from "react";
import { useWebSocket } from "../provider/websocketProvider";
import images from "@/assets/images";
export type Player = {
  id: string;
  name: string;
  score: number;
  avatar: string;
  role: "draw" | "guess";
  isGuessed: boolean;
  scorePerTurn: number;
};
export default function PlayerSide({players, setPlayers}: {players: Player[], setPlayers:Dispatch<React.SetStateAction<Player[]>>}) {
  const { ws } = useWebSocket();
  // Mock data for testing

  useEffect(() => {
    if (!ws) return;
    const handleMessage = (event: MessageEvent) => {
      const payload = JSON.parse(event.data);
      if (payload.type === "playerList") {
        setPlayers(payload.data);
      } else if (payload.type === "DrawRole") {
        setPlayers((prevPlayers) =>
          prevPlayers.map((player: Player) =>
            player.id === payload.data
              ? { ...player, role: "draw" }
              : { ...player, role: "guess" }
          )
        );
      } else if (payload.type === "playerJoin") {
        setPlayers((prevPlayers) => [...prevPlayers, payload.data]);
      } else if (payload.type === "playerLeave") {
        setPlayers((prevPlayers) =>
          prevPlayers.filter((player: Player) => player.id !== payload.data)
        );
      } else if (payload.type === "playerScore") {
        setPlayers((prevPlayers) =>
          prevPlayers.map((player: Player) =>
            player.id === payload.data.id
              ? {
                  ...player,
                  scorePerTurn: payload.data.score,
                  score: player.score + payload.data.score,
                  isGuessed: true,
                }
              : player
          )
        );
      } else if (payload.type === "refreshLobby") {
        setPlayers((prevPlayers) =>
          prevPlayers.map((player: Player) => ({
            ...player,
            role: "guess",
            isGuessed: false,
          }))
        );
      }
    };
    ws.addEventListener("message", handleMessage);
    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  return (
    <div className="bg-white shadow shadow-gray-300 h overflow-y-auto h-[588px]">
      {players.map((player, id) => {
        return (
          <div
            key={id}
            className={
              "h-14 flex relative " + (player.isGuessed ? "bg-green-200" : "")
            }
          >
            <div className="w-12 h-12 mt-1">
              <Image src={player.avatar} alt="." width={48} height={48} />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className={
                  "text-2xl font-bold truncate text-center " +
                  fonts.nguechNgoacFont
                }
              >
                {player.name}
              </div>
              <div className="text-sm text-center ">{player.score}</div>
            </div>
            {player.role === "draw" && (
              <Image
                src={images.pencil}
                width={16}
                height={24}
                className="absolute right-2 rotate-30"
                alt=""
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
