import React from "react";
import Section from "../section";
import { finance, health, news, superpower } from "@/assets";
import Image from "next/image";
import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <Section className="mt-12">
      <h1 className="text-4xl font-bold">Why create agents</h1>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-x-12 lg:gap-x-16 ">
        <FeatureCard
          img={finance}
          header="Create a crew of finance agents"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <FeatureCard
          img={health}
          className="lg:translate-y-10"
          header="Create a crew of health experts"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <FeatureCard
          img={news}
          header="Create a crew of news scrappers"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <div className="relative lg:translate-y-10">
          <FeatureCard
            img={superpower}
            header="And what not. You get superpowers with Neura and your imagination is the limit."
            className="border-purple-400/50"
          />
          <div className="absolute bg-purple-500/40 blur-3xl -z-10 h-full rounded-full w-full top-0"></div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
