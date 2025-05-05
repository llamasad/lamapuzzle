import Image from "next/image";
import images from "../../assets/images";
import ColorPicker from "./drawingPlane/colorPicker";
import ToolPicker from "./drawingPlane/toolPicker";
import DrawingPlane from "./drawingPlane";
import PlayerSide from "./playerSide";
import ChatAndAnswer from "./chatAndAnswer";
import { useEffect, useRef, useState } from "react";
import GuessHeader from "./guessHeader";
import { Status } from "@/app/page";
import { Player } from "./playerSide";
import GameSettings from "./gameSettings";
import { useWebSocket } from "../provider/websocketProvider";

export default function GamePlay({
  gameStatus,
  setGameStatus,
  isLoading,
  setIsLoading,
  privateLobbyId,
  setPrivateLobbyId,
}: {
  gameStatus: Status;
  setGameStatus: (status: Status) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  privateLobbyId: string | null;
  setPrivateLobbyId: (lobbyId: string | null) => void;
}) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [onDrawRole, setOnDrawRole] = useState(false);
  const [word, setWord] = useState<string>("Waiting");
  const [isWaitingForWord, setIsWaitingForWord] = useState(false);
  
  const { ws } = useWebSocket();

  useEffect(() => {
    if (!ws) return;
    const handleMessage = (event: MessageEvent) => {
      const payload = JSON.parse(event.data);
      if (payload.type === "lobbyStatus") {
        if (payload.data === "ROUND_IN_PROGRESS") {
          setGameStatus("playing");
        }
      }
    };
    ws.addEventListener("message", handleMessage);
    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws, onDrawRole]);

  return (
    <div className="mt-[-40px] m-auto xl:w-[1256px] pb-10">
      <div className="grid grid-cols-48 gap-2 h-[588px] mt-2">
        <div className=" col-span-7">
          <PlayerSide players={players} setPlayers={setPlayers} />
        </div>
        <div className="col-span-31 space-y-2 h-[588px] overflow-hidden ">
          <GuessHeader
            onDrawRole={onDrawRole}
            setWord={setWord}
            word={word}
            setIsWaitingForWord={setIsWaitingForWord}
          />

          <div
            className={` 
              col-span-31 space-y-2 h-[calc(588px_-_58px)] 
              transition-transform duration-500 ease-in-out ${
                gameStatus === "lobby" ? "translate-y-[-538px]" : ""
              }
            `}
          >
            <DrawingPlane
              setIsWaitingForWord={setIsWaitingForWord}
              isWaitingForWord={isWaitingForWord}
              players={players}
              word={word}
              setWord={setWord}
              onDrawRole={onDrawRole}
              setOnDrawRole={setOnDrawRole}
            />
            {gameStatus === "lobby" && (
              <GameSettings
                privateLobbyId={privateLobbyId}
                setGameStatus={setGameStatus}
              />
            )}
          </div>
        </div>
        <div className="bg-white shadow shadow-gray-300 col-span-10">
          <ChatAndAnswer players={players} />
        </div>
      </div>
    </div>
  );
}
