import { useState } from "react";

export const colors = {
  black: "#000000",
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFFF00",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  orange: "#FFA500",
  darkGreen: "#008000",
  purple: "#800080",
  gray: "#808080",
  brown: "#A52A2A",
} as const; // Giúp TypeScript hiểu colors có kiểu cố định

export default function ColorPicker({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: keyof typeof colors;
  setSelectedColor: (color: keyof typeof colors) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {Object.entries(colors).map(([key, value]) => (
        <label
          key={key}
          className="cursor-pointer flex items-center justify-center w-6 h-6"
        >
          <input
            type="radio"
            name="color"
            value={key}
            className="hidden"
            onChange={() => setSelectedColor(key as keyof typeof colors)}
          />
          <div
            className={`transition-all duration-200 rounded-full transition-all ${
              selectedColor === key ? "w-5.5 h-5.5" : "w-5 h-5"
            }`}
            style={{ backgroundColor: value }}
          ></div>
        </label>
      ))}
    </div>
  );
}