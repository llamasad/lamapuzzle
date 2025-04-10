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

export default function GamePlay({
  gameStatus,
  setGameStatus,
  isLoading,
  setIsLoading,
}: {
  gameStatus: Status;
  setGameStatus: (status: Status) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [onDrawRole, setOnDrawRole] = useState(false);
  const [word, setWord] = useState<string>("Waiting");

  return (
    <div className="mt-[-40px] m-auto xl:w-[1256px] pb-10">
      <div className="grid grid-cols-48 gap-2 h-[588px] mt-2">
        <div className=" col-span-7">
          <PlayerSide players={players} setPlayers={setPlayers} />
        </div>
        <div className="col-span-31 space-y-2 h-[588px] overflow-hidden ">
          <GuessHeader onDrawRole={onDrawRole} setWord={setWord} word={word} />

          <div
            className={` 
              col-span-31 space-y-2 h-[calc(588px_-_58px)] 
              transition-transform duration-500 ease-in-out ${
                gameStatus === "lobby" ? "translate-y-[-538px]" : ""
              }
            `}
          >
            <DrawingPlane
              players={players}
              word={word}
              setWord={setWord}
              onDrawRole={onDrawRole}
              setOnDrawRole={setOnDrawRole}
            />
            {gameStatus==="lobby"&&<GameSettings setGameStatus={setGameStatus} />}
          </div>
        </div>
        <div className="bg-white shadow shadow-gray-300 col-span-10">
          <ChatAndAnswer players={players}/>
        </div>
      </div>
    </div>
  );
}
