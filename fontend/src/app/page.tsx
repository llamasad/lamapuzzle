"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import images from "@/assets/images";
import fonts from "@/assets/fonts";
import GamePlay from "@/components/gamePlay";
import { WebSocketProvider } from "@/components/provider/websocketProvider";

type status = "playing" | "waiting" | "end" | "landing";

export default function Page() {

  return (
    <div className="pt-19">
      <WebSocketProvider query="">
        <GamePlay />
      </WebSocketProvider>
    </div>
  );
}
