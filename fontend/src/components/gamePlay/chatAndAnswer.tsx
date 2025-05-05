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
  isYourMessage: boolean;
}

export default function ChatAndAnswer({ players }: { players: Player[] }) {
  const { ws } = useWebSocket();
  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    if (!ws) return;
    const handleMessage = (event: MessageEvent) => {
      console.log(event.data);
      const payload = JSON.parse(event.data);
      
      if (payload.type === "message") {
        // Handle chat message
        const message: Message = {
          text: payload.data.text,
          avatar: payload.data.avatar,
          name: payload.data.name,
          type:payload.data.type,
          isYourMessage: payload.data.isYourMessage,
        };
        
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    };
    ws.addEventListener("message", handleMessage);
    return () => {
      ws.removeEventListener("message", handleMessage);
    }
  }, [ws]);

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
                  {msg.name+ " "+msg.text}
                </div>
              </div>
            );
          }


        })}
      </div>
      <div className="w-19/20">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter" && ws) {
              const input = e.target as HTMLInputElement;
              const text = input.value;
              if (text.trim() !== "") {
                const message: Message = {
                  text: text,
                  avatar: players[0]?.avatar || "/test",
                  name: players[0]?.username || "Guest",
                  type:"message",
                  isYourMessage: false,
                };
                ws.send(
                  JSON.stringify({
                    action: "CHAT_AND_ANSWER",
                    data:message,
                  })
                );
                input.value = "";
              }
            }
          }}
          placeholder="Chat or answer"
          className="h-8 text-sm px-1 w-full outline-none border border-gray-300 my-1.5 ml-1.5"
        />
      </div>
    </div>
  );
}
