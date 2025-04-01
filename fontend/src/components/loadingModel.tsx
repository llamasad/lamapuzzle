import fonts from "@/assets/fonts";

export default function LoadingModel() {
  return (
    <div
      className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center"
    >
      <div
        className={
          "text-white text-6xl animate-pulse font-bold translate-y-[-30px] " +
          fonts.nguechNgoacFont
        }
      >
        Loading...
      </div>
    </div>
  );
}
