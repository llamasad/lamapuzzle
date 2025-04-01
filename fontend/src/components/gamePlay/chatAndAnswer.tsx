import Image from "next/image";
import fonts from "@/assets/fonts";

export default function ChatAndAnswer() {
  return (
    <div className="flex flex-col w-full h-full">   
      <div className="flex flex-col justify-end h-full">
        <div className="flex ">
          <Image
            src={"/123"}
            alt=""
            className="h-12 w-12"
            width={48}
            height={48}
          />
          <div className="flex flex-col ml-2 translate-y-[-8px]">
            <div className={"text-2xl font-extrabold " + fonts.nguechNgoacFont}>
              dat dsz
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore voluptatibus maxime harum? Iste omnis deserunt, illo,
              libero distinctio nobis at, autem odio perferendis a quod
              veritatis amet eligendi id? Deserunt?
            </div>
          </div>
        </div>
        <div className="flex">
          <Image
            src={"/123"}
            alt=""
            className="h-12 w-12"
            width={48}
            height={48}
          />
          <div className="flex flex-col ml-2 translate-y-[-8px]">
            <div className={"text-2xl font-extrabold " + fonts.nguechNgoacFont}>
              dat dsz
            </div>
            <div className="text-sm">Lorem ipsum?</div>
          </div>
        </div>
      </div>
      <div className="w-19/20">
        <input type="text" placeholder="Chat or answer" className="h-8 text-sm px-1 w-full outline-none border border-gray-300 my-1.5 ml-1.5" />
      </div>
    </div>
  );
}
