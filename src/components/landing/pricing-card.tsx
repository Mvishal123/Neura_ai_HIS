import React from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import clsx from "clsx";

interface PriceCardProps {
  data: {
    type: string;
    price: number | string;
    sub: string;
    features: string[];
  };
}

const PricingCard = ({ data }: PriceCardProps) => {
  const type = data.type.toLowerCase();
  return (
    <div
      className={`border rounded-lg px-4 py-6 bg-slate-900/80 backdrop-blur-xl relative z-10 ${
        type === "pro" && "border-purple-700/70"
      }`}
    >
      <div>
        <h1 className="text-2xl font-bold">{data.type}</h1>
      </div>
      <h3 className="text-sm text-slate-500">{data.sub}</h3>
      <h2 className="mt-2 text-4xl font-semibold">
        {type !== "custom" && "$"}
        {data.price}
      </h2>
      <div className="my-6 border-b py-4">
        <Button
          variant="ghost"
          size="sm"
          className={`w-full bg-purple-900 ${
            (type === "pro" || type === "custom") &&
            "bg-gradient-to-b from-purple-600 to-purple-300"
          }`}
        >
          {type === "free"
            ? "Get started"
            : type === "custom"
            ? "Contact us"
            : "Buy now"}
        </Button>
      </div>
      <div className="space-y-3">
        {data.features.map((feat) => (
          <div className="flex gap-2">
            <div className="p-1 bg-purple-600 h-5 w-5 flex justify-center items-center rounded-full">
              <Check className="" />
            </div>
            <p>{feat}</p>
          </div>
        ))}
      </div>
      {type === "pro" && (
        <div className="absolute top-0 left-0 right-0 w-full bg-purple-700/20 h-full blur-3xl -z-10"></div>
      )}
    </div>
  );
};

export default PricingCard;
