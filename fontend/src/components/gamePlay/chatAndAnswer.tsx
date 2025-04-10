import Image from "next/image";
import fonts from "@/assets/fonts";
import { useWebSocket } from "../provider/websocketProvider";
import { useEffect, useState } from "react";
import { Player } from "./playerSide";

interface Message {
  text: string;
  avatar: string;
  name: string;
  type:"message"|"notify";
  color: string;
  isYourMessage: boolean;
}

export default function ChatAndAnswer({ players }: { players: Player[] }) {
  const { ws } = useWebSocket();
  const [messages, setMessages] = useState<Array<Message>>([
    {
      text: "Hello",
      avatar: "/test",
      name: "Nguyễn Ngọc Nghĩa",
      type:"message",
      color: "red",
      isYourMessage: true,
    },
    {
      text: "Joined lobby",
      avatar: "/test",
      name: "Nguyễn Ngọc Nghĩa",
      type:"notify",
      color: "red",
      isYourMessage: false,
    },
    {
      text: "Hello",
      avatar: "/test",
      name: "Nguyễn Ngọc Nghĩa",
      type:"message",
      color: "red",
      isYourMessage: false,
    },
    {
      text: "Hello",
      avatar: "/test",
      name: "Nguyễn Ngọc Nghĩa",
      type:"notify",
      color: "red",
      isYourMessage: false,
    },
    {
      text: "Hello",
      avatar: "/test",
      name: "Nguyễn Ngọc Nghĩa",
      type:"notify",
      color: "red",
      isYourMessage: false,
    },
  ]);

  useEffect(() => {
    if (!ws) return;
    const handleMessage = (event: MessageEvent) => {
      const payload = JSON.parse(event.data);
      if (payload.type === "message") {
        // Handle chat message
        const message: Message = {
          text: payload.text,
          avatar: payload.avatar,
          name: payload.name,
          type:"message",
          color: payload.color,
          isYourMessage: payload.isYourMessage,
        };
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    };
  });

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col justify-end h-full">
        {messages.map((msg, i) => { 
          if(msg.type==="message"){

            return (
              <div key={i} className="flex ">
                <Image
                  src={msg.avatar || '/test'}
                  alt=""
                  className="h-12 w-12"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col ml-2 translate-y-[-8px]">
                  <div
                    className={`text-2xl font-extrabold ${fonts.nguechNgoacFont} ${msg.isYourMessage ? "text-green-500" : "text-black"}`}
                  >
                    {msg.name}
                  </div>
                  <div>
                   {msg.text}
                  </div>
                </div>
              </div>
            
            );
          }else if(msg.type==="notify"){
            return (
              <div key={i} className="flex mb-2 ">
                <div
                  className={
                    "text-gray-500 text-xs w-full text-center"
                  }
                >
                  {msg.text}
                </div>
              </div>
            );
          }


        })}
      </div>
      <div className="w-19/20">
        <input
          type="text"
          placeholder="Chat or answer"
          className="h-8 text-sm px-1 w-full outline-none border border-gray-300 my-1.5 ml-1.5"
        />
      </div>
    </div>
  );
}
