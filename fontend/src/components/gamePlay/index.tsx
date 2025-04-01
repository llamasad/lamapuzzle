import Image from "next/image";
import images from "../../assets/images";
import ColorPicker from "./drawingPlane/colorPicker";
import ToolPicker from "./drawingPlane/toolPicker";
import DrawingPlane from "./drawingPlane";
import PlayerSide from "./playerSide";
import ChatAndAnswer from "./chatAndAnswer";
import { useEffect, useRef } from "react";
import GuessHeader from "./guessHeader";
const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFFF00",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  orange: "#FFA500",
  darkGreen: "#008000",
  purple: "#800080",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#808080",
};

export default function GamePlay() {
  
  return (
    <div className="mt-[-40px] m-auto xl:w-[1256px] pb-10">
      <div className="grid grid-cols-24 gap-2 h-[560px] mt-2">
        <div className=" col-span-3">
          <PlayerSide />
        </div>
        <div className="col-span-16 space-y-2">
          <GuessHeader />
          <DrawingPlane />
        </div>
        <div className="bg-white shadow shadow-gray-300 col-span-5">
          <ChatAndAnswer/>
        </div>
      </div>
    </div>
  );
}
