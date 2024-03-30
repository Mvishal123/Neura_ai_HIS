import React from "react";
import { MY_CREW } from "@/utils/constants";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface CrewacardProps {
  data: {
    id: number;
    image: StaticImageData;
    name: string;
    description: string;
  };
}

const CrewCard = ({ data }: CrewacardProps) => {
  return (
    <Link href={`/crew/${data.id}`} className="relative w-[250px] h-[200px] border rounded-xl">
      <Image
        src={data.image}
        alt="image"
        width={1024}
        height={1024}
        className="mx-auto h-20 w-20 rounded-full border-2 border-purple-500/50 absolute left-0 right-0 -top-12"
      />
      <div className="flex flex-col items-center px-4">
        <h1 className="font-semibold pt-8 text-center text-purple-300">
          {data.name}
        </h1>
        <div className="text-sm line-clamp-6 mt-2">{data.description}</div>
      </div>
      <div className="absolute h-24 w-24 bg-purple-600/50 blur-3xl top-0 left-0  right-0  mx-auto" />
    </Link>
  );
};

export default CrewCard;
