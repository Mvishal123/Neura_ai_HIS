import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface FeatureProps {
  img: StaticImageData;
  className?: string;
  header: string;
  text?: string;
}

const FeatureCard = ({ img, className, header, text }: FeatureProps) => {
  return (
    <div
      className={clsx(
        "bg-slate-800/50 backdrop-blur-lg border rounded-xl p-4 flex gap-4 z-10",
        className
      )}
    >
      <Image
        src={img}
        alt="feature-1"
        width={1024}
        height={1024}
        className="rounded-xl w-40 h-40 md:h-52 md:w-52 opacity-80"
      />

      <div className="">
        <h1 className="text-xl font-semibold custom-purple-gradient bg-clip-text text-transparent">
          {header}
        </h1>
        <p className="max-sm:text-xs md:text-sm text-slate-400">{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
