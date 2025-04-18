import Image from "next/image";
import images from "@/assets/images";
import { useWebSocket } from "../provider/websocketProvider";
import { useEffect, useState } from "react";

export default function GuessHeader({
  word,
  setWord,
  onDrawRole,
}: {
  word: string;
  setWord: (word: string) => void;
  onDrawRole: boolean;
}) {
  const { ws } = useWebSocket();
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    if (!ws) return; /*  */
    const handleMessage = (event: MessageEvent) => {
      const payload = JSON.parse(event.data);
      if (payload.type === "guessWord") {
        !onDrawRole && setWord(payload.data.word);
        setCountdown(payload.data.drawTime);
      }
    };
    ws.addEventListener("message", handleMessage);
    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  useEffect(() => {
    if (countdown <= 0) return; 

    const timer = setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0)); 
    }, 1000);

    return () => clearInterval(timer); 
  }, [countdown]);
  return (
    <div className="h-[52px] bg-white shadow shadow-gray-300 flex items-center justify-between px-1 z-10 relative">
      <div className="w-11 h-11 relative flex-shrink-0">
        <Image
          className="m-auto"
          width={42}
          height={42}
          alt="Clock Icon"
          src={images.clockIcon}
        />
        <div className="absolute inset-0 top-1.5 flex flex-col items-center justify-center font-bold text-sm">
          <span>{countdown}</span>
        </div>
      </div>

      {/* Guess Word */}
      <div className="flex gap-1 justify-center items-center flex-grow text-center">
        {word.split("").map((letter, index) => (
          <span
            key={index}
            className={`text-xl font-bold ${
              letter === " " ? "text-transparent" : ""
            }`}
          >
            {letter === " " ? "\u00A0" : letter !== "_" ? letter : "_"}
          </span>
        ))}
      </div>

      {/* Placeholder for spacing */}
      <div className="w-11 h-11"></div>
    </div>
  );
}
