import Image from "next/image";
import fonts from "@/assets/fonts";
import { Dispatch, useEffect, useState } from "react";
import { useWebSocket } from "../provider/websocketProvider";
import images from "@/assets/images";
export type Player = {
  id: string;
  username: string;
  score: number;
  avatar: string;
  role:  "DRAWER"|"GUESSER";
  answered: boolean;
  scorePerTurn: number;
  authorized: boolean;
};
export default function PlayerSide({players, setPlayers}: {players: Player[], setPlayers:Dispatch<React.SetStateAction<Player[]>>}) {
  const { ws } = useWebSocket();
  
  useEffect(() => {
    if (!ws) return;
    
    const handleMessage = (event: MessageEvent) => {
      
      const payload = JSON.parse(event.data);
      if (payload.type === "playerList") {
        console.log(payload.data);
        setPlayers(payload.data);
      }
    };
    ws.addEventListener("message", handleMessage);
    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  return (
    <div className="bg-white shadow shadow-gray-300 h overflow-y-auto h-[588px]">
      {players.reverse().map((player, id) => {
        return (
          <div
            key={id}
            className={
              "h-14 flex relative " + (player.answered ? "bg-green-200" : "")
            }
          >
            <div className="w-12 h-12 mt-1">
              <Image src={player.avatar||"/test"} alt="." width={48} height={48} />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className={
                  "text-2xl font-bold truncate text-center " +
                  fonts.nguechNgoacFont
                }
              >
                {player.username}
              </div>
              <div className="text-sm text-center ">{player.score}</div>
            </div>
            {player.role === "DRAWER" && (
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
