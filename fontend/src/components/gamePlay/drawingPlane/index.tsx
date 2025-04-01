import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Line, Image } from "react-konva";
import ColorPicker from "./colorPicker";
import ToolPicker, { ToolName } from "./toolPicker";
import { colors } from "./colorPicker";
import ThicknessSlider from "./thinknessSlider";
import PaintIcon from "../../svgs/paintIcon";

import toolPickerIcons from "@/assets/svgs";

const { toolsChangeColor, normalTool } = toolPickerIcons;

type LineType = {
  tool: ToolName;
  points: number[];
  color: string;
  strokeWidth: number;
};

export default function DrawingPlane() {
  const [selectedTool, setSelectedTool] = useState<ToolName>("pen");
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof colors>("black");
  const [undoStack, setUndoStack] = useState<{ lines: LineType[]; bg: any }[]>(
    []
  );
  const [redoStack, setRedoStack] = useState<{ lines: LineType[]; bg: any }[]>(
    []
  );

  const [onTriggerPaint, setOnTriggerPaint] = useState(true);
  const [lines, setLines] = useState<LineType[]>([]);
  const [strokeWidth, setStrokeWidth] = useState(6);
  const [backgroundImage, setBackgroundImage] = useState<any>(null);
  const isDrawing = useRef(false);
  const stageRef = useRef<any>(null);
    
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "z") {
        handleUndo();
      } else if (e.ctrlKey && e.key === "y") {
        handleRedo();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [ redoStack, lines,backgroundImage]);

  const handleUndo = () => {
    if (undoStack.length === 0) return;

    const previousState = undoStack[undoStack.length - 1];
    setUndoStack(undoStack.slice(0, -1));
    setRedoStack([...redoStack, { lines, bg: backgroundImage }]); 

    setLines(previousState.lines);
    setBackgroundImage(previousState.bg);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;

    const nextState = redoStack[redoStack.length - 1];
    setRedoStack(redoStack.slice(0, -1));
    setUndoStack([...undoStack, { lines, bg: backgroundImage }]); 

    setLines(nextState.lines);
    setBackgroundImage(nextState.bg);
  };

  const handleMouseDown = (e: any) => {
    if (selectedTool === "fill") {
      handleFillClick(e);
      return;
    }

    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();

    setUndoStack([...undoStack, { lines, bg: backgroundImage }]);
    setRedoStack([]); 

    setLines([
      ...lines,
      {
        tool: selectedTool,
        points: [pos.x, pos.y],
        color: colors[selectedColor],
        strokeWidth,
      },
    ]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current || selectedTool === "fill") return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastLine = lines[lines.length - 1];
    lastLine.points = [...lastLine.points, point.x, point.y];

    setLines([...lines.slice(0, -1), lastLine]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleFillClick = (e: any) => {
    if (selectedTool !== "fill" || !stageRef.current) return;

    const stage = stageRef.current;
    const layer = stage.getLayers()[0];
    const canvas = layer.toCanvas();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pos = stage.getPointerPosition();
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = imageData;
    const targetColor = getPixelColor(data, pos.x, pos.y, width);
    const fillColor = hexToRGBA(colors[selectedColor]);

    if (colorsMatch(targetColor, fillColor)) return;

    setUndoStack([...undoStack, { lines, bg: backgroundImage }]);
    setRedoStack([]); 

    floodFill(data, pos.x, pos.y, width, height, targetColor, fillColor);
    ctx.putImageData(imageData, 0, 0);

    const newImage = new window.Image();
    newImage.src = canvas.toDataURL();
    newImage.onload = () => {
      console.log("newImage: ", newImage);
      setBackgroundImage(newImage)};
  };

  return (
    <div className="flex-1 gap-2 h-[calc(100%-58px)] bg-white shadow shadow-gray-300 relative">
      <div
        className={
          "shadow border-gray-300 overflow-hidden bg-white absolute top-2 z-100 ml-2 pb-3 transition-all duration-400 py-1 rounded-full " +
          (onTriggerPaint ? "w-14 h-120" : "w-10 h-10")
        }
      >
        <div className={"relative "}>
          <div
            onClick={() => setOnTriggerPaint(!onTriggerPaint)}
            className="flex justify-center items-center  mb-2 cursor-pointer"
          >
            <PaintIcon
              color="#333"
              width={onTriggerPaint ? 33 : 28}
              height={onTriggerPaint ? 33 : 28}
            />
          </div>
          <div>
            <ToolPicker
              color={colors[selectedColor]}
              selectedTool={selectedTool}
              setSelectedTool={setSelectedTool}
            />
            <div className="h-1 border-t-1 w-4/5 mx-auto border-[#333]"></div>
            <ThicknessSlider
              setStrokeWidth={setStrokeWidth}
              strokeWidth={strokeWidth}
            />
            <div className="h-1 border-t-1 w-4/5 mx-auto border-[#333] mb-1"></div>
            <ColorPicker
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          cursor: `url('${
            selectedTool == "eraser"
              ? normalTool.eraser.src
              : toolsChangeColor[selectedTool][selectedColor].src
          }') 0 24, pointer`,
        }}
      >
        <Stage
          ref={stageRef}
          width={834}
          height={502}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <Layer>
            {backgroundImage && <Image image={backgroundImage} />}
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={line.strokeWidth}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  line.tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            ))}
          </Layer>
        </Stage>
      </div>

    </div>
  );
}

function getPixelColor(
  data: Uint8ClampedArray,
  x: number,
  y: number,
  width: number
) {
  const index = (y * width + x) * 4;
  return [data[index], data[index + 1], data[index + 2], data[index + 3]];
}

function hexToRGBA(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255, 255];
}

function colorsMatch(a: number[], b: number[]) {
  return a.every((v, i) => v === b[i]);
}

function floodFill(
  data: Uint8ClampedArray,
  x: number,
  y: number,
  width: number,
  height: number,
  targetColor: number[],
  fillColor: number[]
) {
  const stack = [[x, y]];
  while (stack.length > 0) {
    const [cx, cy] = stack.pop()!;
    const index = (cy * width + cx) * 4;

    const currentColor = Array.from(data.slice(index, index + 4));

    if (!colorsMatch(currentColor, targetColor)) continue;

    // Set the fill color
    data.set(fillColor, index);
    if (cx > 0) stack.push([cx - 1, cy]);
    if (cx < width - 1) stack.push([cx + 1, cy]);
    if (cy > 0) stack.push([cx, cy - 1]);
    if (cy < height - 1) stack.push([cx, cy + 1]);
  }
}
