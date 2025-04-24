import ThicknessSliderIcon from "../../svgs/thicknessSliderIcon";

export default function ThicknessSlider({
  setStrokeWidth,
  strokeWidth,
}: {
  setStrokeWidth: (strokeWidth: number) => void;
  strokeWidth: number;
}) {
  return (
    <div className="relative h-32">
      <ThicknessSliderIcon color="#333" width={140} height={52} />
      <input
        type="range"
        min="1"
        max="30"
        value={strokeWidth} // Controlled input
        onChange={(event) => {
          setStrokeWidth(parseInt((event.target as HTMLInputElement).value));
        }}
        className="w-[122px] left-[-36px] top-14 absolute z-10 weight-slider rotate-90"
      />
    </div>
  );
}
//             />