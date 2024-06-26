import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex text-black flex-col justify-center items-center h-[300px]">
      <Loader2 className="h-7 w-7 text-black dark:text-white animate-spin my-4" />
      <p className="text-xs text-black  dark:text-white">Loading ...</p>
    </div>
  );
};

export default Loader;
