import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Line, Image } from "react-konva";
import ColorPicker from "./colorPicker";
import ToolPicker, { ToolName } from "./toolPicker";
import { colors } from "./colorPicker";
import ThicknessSlider from "./thicknessSlider";
import PaintIcon from "../../svgs/paintIcon";
import { useWebSocket } from "@/components/provider/websocketProvider";
import toolPickerIcons from "@/assets/svgs";
import fonts from "@/assets/fonts";
import { Player } from "../playerSide";
import Image2 from "next/image";

const { toolsChangeColor, normalTool } = toolPickerIcons;

type LineType = {
  tool: ToolName;
  points: number[];
  color: string;
  strokeWidth: number;
};

export default function DrawingPlane({
  word,
  setWord,
  onDrawRole,
  setOnDrawRole,
  players,
  setIsWaitingForWord,
  isWaitingForWord,
}: {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  onDrawRole: boolean;
  setOnDrawRole: React.Dispatch<React.SetStateAction<boolean>>;
  players: Player[];
  setIsWaitingForWord: React.Dispatch<React.SetStateAction<boolean>>;
  isWaitingForWord: boolean;
}) {
  const { ws } = useWebSocket();
  const [selectedTool, setSelectedTool] = useState<ToolName>("pen");
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof colors>("black");
  const [wordsToChoose, setWordsToChoose] = useState<string[]>([]);
  const [undoStack, setUndoStack] = useState<{ lines: LineType[]; bg: any }[]>(
    []
  );
  const [redoStack, setRedoStack] = useState<{ lines: LineType[]; bg: any }[]>(
    []
  );
  const [isRevealAndSum, setIsRevealAndSum] = useState(false);
  const [drawName, setDrawName] = useState<string>("");
  const [onTriggerPaint, setOnTriggerPaint] = useState(false);
  const [lines, setLines] = useState<LineType[]>([]);
  const [strokeWidth, setStrokeWidth] = useState(6);
  const [backgroundImage, setBackgroundImage] = useState<any>(null);
  const isDrawing = useRef(false);
  const stageRef = useRef<any>(null);
  const backgroundImageRef = useRef<any>(null);
  const linesRef = useRef<LineType[]>(lines);
  const redoFunctionRef = useRef<any>(null);
  const undoFunctionRef = useRef<any>(null);
  linesRef.current = lines;
  backgroundImageRef.current = backgroundImage;
  console.log(
    "lines",
    lines,
    "bg",
    backgroundImage,
    "undoStack",
    undoStack,
    "redoStack",
    redoStack
  );
  useEffect(() => {
    if (ws) {
      let timeOutId: NodeJS.Timeout | undefined;
      let timeOutId2: NodeJS.Timeout | undefined;
      let currentTool: ToolName | null = null;
      const messageHandler = (event: any) => {
        const payload = JSON.parse(event.data);
        if (payload.type === "draw") {
          if (payload.data.status === "START") {
            setUndoStack((undoStack) => [
              ...undoStack,
              { lines: linesRef.current, bg: backgroundImageRef.current },
            ]);
            setRedoStack([]);
            currentTool = payload.data.toolType;
          }
          if (payload.data.status === "END") {
            currentTool = null;
          }
          if (
            currentTool &&
            currentTool === "fill" &&
            payload.data.status &&
            payload.data.status === "START"
          ) {
            const { x, y, color } = payload.data;

            drawFill(Math.floor(x), Math.floor(y), color);
          } else if (currentTool && currentTool === "pen") {
            if (payload.data.status === "START") {
              const { toolType, x, y, color, thickness } = payload.data;

              setLines((prevLines) => [
                ...prevLines,
                {
                  tool: toolType as ToolName,
                  points: [x, y],
                  color: color,
                  strokeWidth: thickness,
                },
              ]);
            } else {
              const { x, y } = payload.data;
              setLines((lines) => {
                const lastLine = lines[lines.length - 1];
                lastLine.points = [...lastLine.points, x, y];
                return [...lines.slice(0, -1), lastLine];
              });
            }
          }
          if (currentTool && currentTool === "eraser") {
            if (payload.data.status) {
              const { toolType, x, y, thickness } = payload.data;
              setLines((prevLines) => [
                ...prevLines,
                {
                  tool: toolType,
                  points: [x, y],
                  color: "#fff",
                  strokeWidth: thickness,
                },
              ]);
            } else {
              const { x, y } = payload.data;
              setLines((lines) => {
                const lastLine = lines[lines.length - 1];
                lastLine.points = [...lastLine.points, x, y];
                return [...lines.slice(0, -1), lastLine];
              });
            }
          }
        } else if (payload.type === "wordsToChoose") {
          console.log("wordsToChoose", payload.data);
          if (payload.data.words && payload.data.words.length > 0) {
            timeOutId = setTimeout(() => {
              setWordsToChoose(payload.data.words);
              setIsRevealAndSum(false);
              setOnDrawRole(true);
              setWord((currentWord) => {
                console.log("test2", currentWord);

                if (currentWord === "Waiting") {
                  return "";
                }
                return currentWord;
              });
              timeOutId2 = setTimeout(() => {
                setWord((currentWord) => {
                  console.log("test3", currentWord);

                  let word =
                    payload.data.words[
                      Math.floor(Math.random() * payload.data.words.length)
                    ];
                  if (!currentWord) {
                    ws.send(
                      JSON.stringify({
                        action: "CHOOSE_WORD",
                        data: word,
                      })
                    );
                    setWordsToChoose([]);
                    setIsWaitingForWord(false);
                    return word;
                  }
                  return currentWord;
                });
              }, 10000);
            }, 3000);
          } else {
            setTimeout(() => {
              setOnDrawRole(false);
              setWord("");
              setIsRevealAndSum(false);
              setIsWaitingForWord(true);
              setWordsToChoose([]);
              setDrawName(payload.data.drawerName);
            }, 3000);
          }
        } else if (payload.type === "revealAndSum") {
          setWordsToChoose([]);
          setWord("Waiting");
          refreshDrawing();
          setIsRevealAndSum(true);
        } else if (payload.type === "edit") {
          if (payload.data === "UNDO") {
            undoFunctionRef.current();
          } else if (payload.data === "REDO") {
            redoFunctionRef.current();
          }
        } else if (payload.type === "gameState") {
          console.log("gameState", payload.data);
          const initGameState = async () => {
            if (payload.data.strokeStack) {
              if (payload.data.strokeStack.undoStack.length > 0) {
                await handleGameStateToStateUndo(
                  payload.data.strokeStack.undoStack
                );
              }
              if (
                payload.data.strokeStack.redoStack.length > redoStack.length
              ) {
                await handleGameStateToStateRedo(
                  payload.data.strokeStack.redoStack
                );
              }
            }
          };
          initGameState();
        }
      };

      ws.addEventListener("message", messageHandler);

      return () => {
        if (timeOutId) clearTimeout(timeOutId);
        if (timeOutId2) clearTimeout(timeOutId2);
        ws.removeEventListener("message", messageHandler);
      };
    }
  }, [ws]);

  const handleGameStateToStateUndo = async (
    state: Array<{
      toolType: string;
      position: Array<{ x: number; y: number }>;
      color: string;
      thickness: number;
    }>
  ) => {
    for (const item of state) {
      item.toolType = item.toolType.toLowerCase();

      setUndoStack((undoStack) => {
        console.log(linesRef.current.length, backgroundImageRef.current);
        if (
          linesRef.current.length <= 0 &&
          backgroundImageRef.current === null
        ) {
          return undoStack;
        }
        return [
          ...undoStack,
          { lines: linesRef.current, bg: backgroundImageRef.current },
        ];
      });

      const flatArray = item.position
        .slice(0, -1)
        .flatMap(({ x, y }) => [x, y]);

      if (item.toolType === "pen") {
        setLines((prevLines) => {
          linesRef.current = [
            ...prevLines,
            {
              tool: item.toolType as ToolName,
              points: flatArray,
              color: item.color,
              strokeWidth: item.thickness,
            },
          ];
          return [
            ...prevLines,
            {
              tool: item.toolType as ToolName,
              points: flatArray,
              color: item.color,
              strokeWidth: item.thickness,
            },
          ];
        });
      } else if (item.toolType === "eraser") {
        setLines((prevLines) => [
          ...prevLines,
          {
            tool: item.toolType as ToolName,
            points: flatArray,
            color: "#fff",
            strokeWidth: item.thickness,
          },
        ]);
      } else if (item.toolType === "fill") {
        const fillArray = item.position.flatMap(({ x, y }) => [x, y]);
        await drawFill(
          Math.floor(fillArray[0]),
          Math.floor(fillArray[1]),
          item.color
        );
      }
      await new Promise((res) => setTimeout(res, 100));
    }
  };

  const handleGameStateToStateRedo = async (
    state: Array<{
      toolType: string;
      position: Array<{ x: number; y: number }>;
      color: string;
      thickness: number;
    }>
  ) => {
    const bg = backgroundImageRef.current;
    const lines = linesRef.current;
    console.log("state", state);
    if (state.length > 0) {
      const nextState = state[state.length - 1];
      nextState.toolType = nextState.toolType.toLowerCase();
      if (nextState.toolType === "pen") {
        const flatArray = nextState.position
          .slice(0, -1)
          .flatMap(({ x, y }) => [x, y]);
        setLines((prevLines) => {
          linesRef.current = [
            ...prevLines,
            {
              tool: nextState.toolType as ToolName,
              points: flatArray,
              color: nextState.color,
              strokeWidth: nextState.thickness,
            },
          ];

          return [
            ...prevLines,
            {
              tool: nextState.toolType as ToolName,
              points: flatArray,
              color: nextState.color,
              strokeWidth: nextState.thickness,
            },
          ];
        });
      } else if (nextState.toolType === "eraser") {
        const flatArray = nextState.position
          .slice(0, -1)
          .flatMap(({ x, y }) => [x, y]);
        setLines((prevLines) => {
          linesRef.current = [
            ...prevLines,
            {
              tool: nextState.toolType as ToolName,
              points: flatArray,
              color: "#fff",
              strokeWidth: nextState.thickness,
            },
          ];

          return [
            ...prevLines,
            {
              tool: nextState.toolType as ToolName,
              points: flatArray,
              color: "#fff",
              strokeWidth: nextState.thickness,
            },
          ];
        });
      } else if (nextState.toolType === "fill") {
        const flatArray = nextState.position.flatMap(({ x, y }) => [x, y]);
        await drawFill(
          Math.floor(flatArray[0]),
          Math.floor(flatArray[1]),
          nextState.color
        );
      }
      setRedoStack((redoStack) => {
        if (
          linesRef.current.length < 0 &&
          backgroundImageRef.current === null
        ) {
          return redoStack;
        }
        return [
          ...redoStack,
          { lines: linesRef.current, bg: backgroundImageRef.current },
        ];
      });
      await handleGameStateToStateRedo(state.slice(0, state.length - 1));

      await new Promise((res) => setTimeout(res, 100));
    }
    setLines(lines);
    setBackgroundImage(bg);
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "z") {
        handleUndo();
        ws &&
          ws.send(
            JSON.stringify({
              action: "EDIT",
              data: "UNDO",
            })
          );
      } else if (e.ctrlKey && e.key === "y") {
        handleRedo();
        ws &&
          ws.send(
            JSON.stringify({
              action: "EDIT",
              data: "REDO",
            })
          );
      }
    };

    if (onDrawRole) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (onDrawRole) {
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [onDrawRole, redoStack, lines, backgroundImage]);

  const refreshDrawing = () => {
    setLines([]);
    setBackgroundImage(null);
    setUndoStack([]);
    setRedoStack([]);
  };

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
  redoFunctionRef.current = handleRedo;
  undoFunctionRef.current = handleUndo;
  const handleMouseDown = (e: any) => {
    if (!onDrawRole) return;
    if (selectedTool === "fill") {
      handleFillClick(e);
      return;
    }

    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();

    // Send the "START" event with x, y coordinates
    ws &&
      ws.send(
        JSON.stringify({
          action: "DRAW",
          data: {
            status: "START",
            toolType: selectedTool,
            x: pos.x,
            y: pos.y,
            color: colors[selectedColor],
            thickness: strokeWidth,
          },
        })
      );

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
    if (!onDrawRole) return;
    if (!isDrawing.current || selectedTool === "fill") return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    ws &&
      ws.send(
        JSON.stringify({
          action: "DRAW",
          data: {
            x: point.x,
            y: point.y,
          },
        })
      );

    const lastLine = lines[lines.length - 1];
    lastLine.points = [...lastLine.points, point.x, point.y];

    setLines([...lines.slice(0, -1), lastLine]);
  };

  const handleMouseUp = () => {
    if (!onDrawRole) return;
    if (selectedTool === "fill") {
      ws &&
        ws.send(
          JSON.stringify({
            action: "DRAW",
            data: {
              toolType: selectedTool,
              color: colors[selectedColor],
              thickness: strokeWidth,
              status: "END",
            },
          })
        );
      return;
    }
    isDrawing.current = false;

    // Send the "END" event
    ws &&
      ws.send(
        JSON.stringify({
          action: "DRAW",
          data: {
            toolType: selectedTool,
            color: colors[selectedColor],
            thickness: strokeWidth,
            status: "END",
          },
        })
      );
  };
  const drawFill = async (x: number, y: number, color: string) => {
    const stage = stageRef.current;
    if (!stage) return;

    const layer = stage.getLayers()[0];
    const canvas = layer.toCanvas();
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = imageData;

    const targetColor = getPixelColor(data, x, y, width);

    const fillColor = hexToRGBA(color);

    if (colorsMatch(targetColor, fillColor)) return;

    floodFill(data, x, y, width, height, targetColor, fillColor);
    ctx.putImageData(imageData, 0, 0);

    const newImage = await new Promise<HTMLImageElement>((resolve) => {
      const img = new window.Image();
      img.src = canvas.toDataURL();
      img.onload = () => resolve(img);
    });
    backgroundImageRef.current = newImage;
    setBackgroundImage(newImage);
  };

  const handleFillClick = (e: any) => {
    if (selectedTool !== "fill" || !stageRef.current) return;

    const stage = stageRef.current;

    // Send the "FILL" event with x, y, and color

    const layer = stage.getLayers()[0];
    const canvas = layer.toCanvas();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const pos = stage.getPointerPosition();
    ws &&
      ws.send(
        JSON.stringify({
          action: "DRAW",
          data: {
            status: "START",
            x: Math.floor(pos.x),
            y: Math.floor(pos.y),
            color: colors[selectedColor],
            toolType: selectedTool,
          },
        })
      );
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = imageData;
    const targetColor = getPixelColor(
      data,
      Math.floor(pos.x),
      Math.floor(pos.y),
      width
    );
    const fillColor = hexToRGBA(colors[selectedColor]);

    if (colorsMatch(targetColor, fillColor)) return;

    setUndoStack([...undoStack, { lines, bg: backgroundImage }]);
    setRedoStack([]);

    floodFill(
      data,
      Math.floor(pos.x),
      Math.floor(pos.y),
      width,
      height,
      targetColor,
      fillColor
    );
    ctx.putImageData(imageData, 0, 0);

    const newImage = new window.Image();
    newImage.src = canvas.toDataURL();
    newImage.onload = () => {
      setBackgroundImage(newImage);
    };
  };

  return (
    <div
      className="flex-1 gap-2 h-[calc(588px_-_58px)]
 bg-white shadow shadow-gray-300 relative"
    >
      {onDrawRole && (
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
      )}

      <div
        className="relative overflow-hidden h-full"
        style={{
          cursor: onDrawRole
            ? `url('${
                selectedTool == "eraser"
                  ? normalTool.eraser.src
                  : toolsChangeColor[selectedTool][selectedColor].src
              }') 0 24, pointer`
            : "",
        }}
      >
        <div
          className={`absolute inset-0  bg-black/50 flex items-center gap-4 justify-center transition-transform duration-400 ${
            wordsToChoose.length > 0 && onDrawRole
              ? "translate-y-0 opacity-100 z-30"
              : "-translate-y-40 opacity-0"
          }`}
        >
          {wordsToChoose.map((value, index) => (
            <div
              key={index}
              onClick={() => {
                setWord(value);

                ws &&
                  ws.send(
                    JSON.stringify({
                      action: "CHOOSE_WORD",
                      data: value,
                    })
                  );
                setWordsToChoose([]);
              }}
              className="text-2xl font-medium bg-gray-600 p-4 text-white cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              {value}
            </div>
          ))}
        </div>

        <div
          className={`absolute inset-0  bg-black/50 flex items-center gap-4 justify-center transition-transform duration-400 ${
            drawName && isWaitingForWord && !onDrawRole
              ? "translate-y-0 opacity-100 z-30"
              : "-translate-y-40 opacity-0"
          }`}
        >
          <div className="text-2xl font-medium  p-4 text-white  ">
            <span className={"text-4xl font-bold " + fonts.nguechNgoacFont}>
              {drawName}
            </span>
            đang chọn từ
          </div>
        </div>
        <div
          className={`absolute inset-0 bg-black/50 flex items-center gap-4 justify-center transition-transform duration-400 ${
            isRevealAndSum
              ? "translate-y-0 opacity-100 z-30"
              : "-translate-y-40 opacity-0"
          }`}
        >
          {wordsToChoose.length <= 0 &&
            players.length > 0 &&
            isRevealAndSum && (
              <div className="mx-auto w-8/10 pl-8">
                <div className="flex gap-x-16 flex-wrap">
                  {players
                    .sort((a, b) => b.scorePerTurn - a.scorePerTurn)
                    .map((player, index) => {
                      console.log(player);
                      return (
                        <div
                          key={index}
                          className="flex justify-between mb-1 items-center w-4/10"
                        >
                          <div
                            className={
                              "text-2xl font-bold flex flex-1 min-w-0  " +
                              fonts.nguechNgoacFont
                            }
                          >
                            <Image2
                              className="mr-2"
                              src={player.avatar || "/test"}
                              alt=""
                              width={58}
                              height={58}
                            />
                            <div className="truncate leading-14">
                              {player.username}
                            </div>
                          </div>
                          <div
                            className={
                              "leading-8 pl-4 " +
                              (player.isGuessed ? "text-green-500" : "")
                            }
                          >
                            +{player.scorePerTurn ? player.scorePerTurn : 0}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
        </div>
        <Stage
          ref={stageRef}
          width={808}
          height={530}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          className="z-40"
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
  const index = (Math.floor(y) * Math.floor(width) + Math.floor(x)) * 4;
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
