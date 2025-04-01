import Image from "next/image";
import fonts from "@/assets/fonts";
type player = {
  name: string;
  score :number;
  avatar: string;
};
export default function PlayerSide() {
  return (
  <div className="bg-white shadow shadow-gray-300 overflow-y-auto">
      <div className="h-14 flex bg-green-200">
        <div className="w-12 h-12 mt-1">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      <div className="h-14 flex ">
        <div className="w-12 h-12 mt-1">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      <div className="h-14 flex">
        <div className="w-12 h-12 ">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      <div className="h-14 flex">
        <div className="w-12 h-12 mt-1">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      <div className="h-14 flex ">
        <div className="w-12 h-12 mt-1">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      <div className="h-14 flex">
        <div className="w-12 h-12 ">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      <div className="h-14 flex">
        <div className="w-12 h-12 mt-1">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      <div className="h-14 flex ">
        <div className="w-12 h-12 mt-1">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      <div className="h-14 flex">
        <div className="w-12 h-12 ">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>

      </div>
      <div className="h-14 flex">
        <div className="w-12 h-12 mt-1">
          <Image src={"/123"} alt="." width={48} height={48} />
        </div>
        <div className="flex-1 min-w-0">
            <div className={"text-2xl font-bold truncate "+fonts.nguechNgoacFont} >khoa ngu133123213</div>
            <div className="text-sm text-center ">0</div>
        </div>
      </div>
      
  </div>
  );
}
