"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeWriter = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Create a crew of agents that can be your <span className='custom-pink-gradient bg-clip-text text-transparent'> financial advisor </span>",
        "Create a crew of agents that lorem lorem lorem",
        "Create a crew of agents that lorem lorem lorem lorem",
        "Create a crew of agents that lorem ipsum lorem ipsum",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      showCursor: true,
    };

    // Initialize Typed.js with the options
    const typed = new Typed(typedRef.current, options);

    // Clean up and destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="self-start">
      <span
        ref={typedRef}
        className="text-2xl font-bold md:font-extrabold md:text-4xl"
      ></span>
    </div>
  );
};

export default TypeWriter;
