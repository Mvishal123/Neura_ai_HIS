import React from "react";
import Section from "../section";
import { finance, health, news, superpower } from "@/assets";
import Image from "next/image";
import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <Section className="mt-12">
      <h1 className="text-4xl font-bold">Why create agents</h1>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <FeatureCard
          img={finance}
          header="Create a crew of finance agents"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <FeatureCard
          img={health}
          header="Create a crew of health experts"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <FeatureCard
          img={news}
          header="Create a crew of news scrappers"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <FeatureCard
          img={superpower}
          header="And what not. You get superpowers with Neura and your imagination is the limit."
          /> 
      </div>
    </Section>
  );
};

export default Features;
