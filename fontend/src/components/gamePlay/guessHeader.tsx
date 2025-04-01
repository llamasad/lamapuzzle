import Image from "next/image";
import images from "@/assets/images";

export default function GuessHeader() {
  return (
    <div className="h-[52px] bg-white shadow shadow-gray-300 ">
      <div className="grid grid-cols-15">
        <div className="w-11 h-11 relative">
          <Image
            className="m-auto"
            width={42}
            height={42}
            alt="Clock Icon"
            src={images.clockIcon}
          />
          <div className="absolute inset-0 top-1.5 flex flex-col items-center justify-center font-bold text-sm">
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
  );
}
