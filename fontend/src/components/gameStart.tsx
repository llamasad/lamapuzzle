import Image from "next/image";
import images from "@/assets/images";
import fonts from "@/assets/fonts";
import { useState } from "react";
import { useWebSocket } from "./provider/websocketProvider";

export interface playerStart{
  username: string;
  isAuthorized: boolean;
}

export default function GameStart() {
    const [username, setUsername] = useState("");
    const { connect } = useWebSocket();
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
              } ${fonts.nguechNgoacFont}`}/>
          </div>
          <div className="flex mt-2 mb-3 ">
            <Image onClick={() => connect()}
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
            className="m-auto hover:scale-101 cursor-pointer"
            width={262}
            height={100}
            alt="Language Options"
            src={images.createPrivateLobbyBtn}
          />
        </div>
      </div>)
}