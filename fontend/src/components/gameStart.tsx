import Image from "next/image";
import images from "@/assets/images";
import fonts from "@/assets/fonts";
import { useState } from "react";
import { useWebSocket } from "./provider/websocketProvider";
import { Status } from "@/app/page";
import { v4 as uuidv4 } from "uuid";

export interface playerStart {
  username: string;
  isAuthorized: boolean;
}

export default function GameStart({
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
  const [username, setUsername] = useState("");
  const { connect, createLobby } = useWebSocket();
  return (
    <div className="flex flex-col items-center ">
      <Image
        className="m-auto absolute top-20 left-0 right-0 "
        alt="Play Game"
        src={images.playGame}
        width={400}
        height={400}
      />
      <div className="z-10 pl-2">
        <div className="relative">
          <Image
            className="mt-22 hover:scale-101 cursor-pointer"
            width={276}
            height={200}
            alt="Name Input"
            src={images.nameInput}
          />
          <input
            value={username}
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className={`absolute text-2xl outline-none font-bold h-6.5 bottom-3.5 w-56 overflow-hidden left-6 transition-all focus:bg-white ${
              username.trim() ? "bg-white" : "bg-transparent"
            } ${fonts.nguechNgoacFont}`}
          />
        </div>
        <div className="flex mt-2 mb-3 ">
          <Image
            onClick={() =>
              connect((ws) => {
                setIsLoading(true);
                setGameStatus("playing");

                ws.send(
                  JSON.stringify({
                    action: "GAME_STATE",
                  })
                );
                ws.send(
                  JSON.stringify({
                    action: "JOIN_PUBLIC_LOBBY",
                    data: {
                      username: username ? username : ramdomUserName(),
                      isAuthorized: false,
                    },
                  })
                );
                setTimeout(() => {
                  setIsLoading(false);
                }, 1000);
              })
            }
            className="m-auto hover:scale-101 cursor-pointer"
            width={130}
            height={100}
            alt="Play Button"
            src={images.playBtn}
          />
          <Image
            className="m-auto hover:scale-101 cursor-pointer"
            width={130}
            height={100}
            alt="languageOptions"
            src={images.languageOptions}
          />
        </div>
        <Image
          onClick={() => {
            let uuid = shortUUID();
            setPrivateLobbyId(uuid);
            createLobby((ws) => {
              setIsLoading(true);
              setGameStatus("lobby");
              ws.send(
                JSON.stringify({
                  action: "CREATE_PRIVATE_LOBBY",
                  data: {
                    username: username ? username : ramdomUserName(),
                    isAuthorized: false,
                  },
                })
              );
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            }, uuid);
          }}
          className="m-auto hover:scale-101 cursor-pointer"
          width={262}
          height={100}
          alt="Language Options"
          src={images.createPrivateLobbyBtn}
        />
      </div>
    </div>
  );
}

const ramdomUserName = () => {
  const prefix = "unknown#";
  const suffix = Math.floor(Math.random() * 10000);
  const randomName = prefix + suffix;
  return randomName;
};

function shortUUID() {
  const uuid = uuidv4().replace(/-/g, "");
  const matches = uuid.match(/.{1,2}/g) || [];
  const bytes = Uint8Array.from(matches.map((byte) => parseInt(byte, 16)));
  return btoa(String.fromCharCode(...bytes))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}
