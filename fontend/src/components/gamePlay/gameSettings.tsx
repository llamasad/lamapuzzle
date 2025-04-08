import Link from "next/link";
import { use, useEffect, useState } from "react";
import LinkIcon from "../svgs/linkIcon";
import { useWebSocket } from "../provider/websocketProvider";
import { Status } from "@/app/page";

export default function GameSettings({setGameStatus}:{setGameStatus:(status:Status)=>void}) {
  
  const {ws}= useWebSocket();
  const [players, setPlayers] = useState(8);
  const [language, setLanguage] = useState("VIETNAMESE");
  const [drawTime, setDrawTime] = useState(60);
  const [rounds, setRounds] = useState(3);
  const [gameMode, setGameMode] = useState("NORMAL");
  const [wordCount, setWordCount] = useState(3);
  const [hints, setHints] = useState(2);
  const [customWords, setCustomWords] = useState("");
  const [useCustomWordsOnly, setUseCustomWordsOnly] = useState(false);
  const [isPrivate, setIsPrivate] = useState(true);
  
  const [inviteURL, setInviteURL] = useState(``);

  useEffect(() => {
    if (ws) {
      const baseUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000";
      const url = new URL(ws.url);
      setInviteURL(`${baseUrl}/${url.pathname}`);
    }
  }, [ws]);


  const handleStartGame = () => {
    if (!ws) return;
    const customWordsArray=customWords.split(",").filter((word) => word.trim() !== "").map((word) => word.trim());
    ws.send(
      JSON.stringify({
        action: "START_GAME",
        data: {
          maxPlayer:players,
          language,
          drawTime,
          maxRound:rounds,
          gameMode,
          wordCount,
          hints,
          customWords:customWordsArray,
          isUseCustomWords:useCustomWordsOnly,
          isPrivate
        },
      })
    );

    
  };

  return (
    <div className=" mx-auto p-4 w-full  shadow shadow-gray-300  bg-gray-700">
      <div className="mb-2 flex">
        <label className="block w-1/2 text-white">Players</label>
        <select
          className=" p-2 border border-gray-300 bg-white w-1/2 "
          value={players}
          onChange={(e) => setPlayers(Number(e.target.value))}
        >
          {[...Array(11)].map((_, i) => (
            <option key={i} value={i + 2}>
              {i + 2}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2 flex">
        <label className="block w-1/2 text-white">Language</label>
        <select
          className=" p-2 border border-gray-300 bg-white w-1/2 "
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value={"VIETNAMESE"}>Vietnamese</option>
        </select>
      </div>
      <div className="mb-2 flex">
        <label className="block w-1/2 text-white">Draw Time</label>
        <select
          className=" p-2 border border-gray-300 bg-white w-1/2 "
          value={drawTime}
          onChange={(e) => setDrawTime(Number(e.target.value))}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={30 + i * 10}>
              {30 + i * 10}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2 flex">
        <label className="block w-1/2 text-white">Rounds</label>
        <select
          className=" p-2 border border-gray-300 bg-white w-1/2 "
          value={rounds}
          onChange={(e) => setRounds(Number(e.target.value))}
        >
          {[...Array(9)].map((_, i) => (
            <option key={i} value={i + 2}>
              {i + 2}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2 flex">
        <label className="block w-1/2 text-white">Game Mode</label>
        <select
          className=" p-2 border border-gray-300 bg-white w-1/2 "
          value={gameMode}
          onChange={(e) => setGameMode(e.target.value)}
        >
          <option value={"NORMAL"}>Normal</option>
        </select>
      </div>
      <div className="mb-2 flex">
        <label className="block w-1/2 text-white">Word Count</label>
        <select
          className=" p-2 border border-gray-300 bg-white w-1/2 "
          value={wordCount}
          onChange={(e) => setWordCount(Number(e.target.value))}
        >
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 2}>
              {i + 2}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2 flex">
        <label className="block w-1/2 text-white">Hints</label>
        <select
          className=" p-2 border border-gray-300 bg-white w-1/2 "
          value={hints}
          onChange={(e) => setHints(Number(e.target.value))}
        >
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 2}>
              {i + 2}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2 flex">
        <label className="block w-1/2 text-white">
          
          <input type="checkbox" className="" checked={isPrivate} onChange={()=>{
            setIsPrivate(!isPrivate)
          }}/>
          <span className="ml-2">Private lobby</span>
        </label>
        <label className="flex items-center text-white">
          <input
            type="checkbox"
            className="mr-2 "
            checked={useCustomWordsOnly}
            onChange={(e) => setUseCustomWordsOnly(!useCustomWordsOnly)}
          />
          Use custom words only
        </label>
      </div>
      <div className="mb-2 flex">
        <textarea
          className=" p-2 border border-gray-300 bg-white w-full resize-none outline-none"
          rows={3}
          value={customWords}
          onChange={(e) => setCustomWords(e.target.value)}
          placeholder="Enter words separated by commas"
        />
      </div>
      <div className="flex justify-between gap-2">
        <button onClick={handleStartGame} style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }} className="w-2/3 p-3 cursor-pointer bg-green-500 text-white font-semibold text-lg">Start!</button>
        <button  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}  className="w-1/3 p-3 bg-blue-500 cursor-pointer font-semibold text-lg flex text-white pl-12 items-center gap-2">
         <LinkIcon width={22} height={22} />
          Invite Friends
        </button>
      </div>
    </div>
  );
}
