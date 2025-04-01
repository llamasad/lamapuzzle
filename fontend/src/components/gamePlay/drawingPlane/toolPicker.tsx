import { useState } from "react";
import FillIcon from "../../svgs/fillIcon";
import EraseIcon from "../../svgs/eraseIcon";
import BrushIcon from "../../svgs/brushIcon";

export type ToolName = "pen" | "eraser" | "fill"; // Include all valid tool names

const tools: { name: ToolName; icon: React.FC<{ color: string; width: number; height: number }> }[] = [
  { name: "pen", icon: BrushIcon  },
  { name: "eraser", icon: EraseIcon },
  { name: "fill", icon: FillIcon },
];

export default function ToolPicker({ selectedTool, setSelectedTool ,color }: {
  selectedTool: ToolName;
  setSelectedTool: (tool: ToolName) => void;
  color: string;
}) {

  return (
    <div className="mb-2 flex flex-col items-center gap-2">
      {tools.map((tool) => (
        <label key={tool.name} className="cursor-pointer">
          <input
            type="radio"
            name="tool"
            value={tool.name}
            className="hidden"
            onChange={() => setSelectedTool(tool.name)}
          />
          <div
            className={`transition-transform duration-200  rounded-full ${
              selectedTool === tool.name
                ? "scale-115 "
                : "hover:scale-110"
            }`}
          >
            {/* Render the tool's icon dynamically */}
            <tool.icon
              color={selectedTool === tool.name ? color : "#333"} // Blue for selected, gray for others
              width={32}
              height={32}
            />
          </div>
        </label>
      ))}
    </div>
  );
}