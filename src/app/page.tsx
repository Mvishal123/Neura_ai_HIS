import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import React from "react";

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default Page;
