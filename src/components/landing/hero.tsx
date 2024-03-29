import Image from "next/image";
import Section from "../section";
import { gradient, heroRobot } from "@/assets";

const Hero = () => {
  return (
    <Section className="mt-6 relative">
      <div className="mt-28 md:mt-12 grid grid-cols md:w-full -1 lg:grid-cols-2 gap-10">
        <section className="max-w-[400px] md:max-w-full place-self-center text-4xl md:text-6xl font-bold tracking-tight">
          <Image
            src={gradient}
            alt="gradient"
            height={1417}
            width={1417}
            className="absolute left-0 top-0 h-[700px] w-screen -translate-x-32 -translate-y-20 -z-50 blur-xl opacity-20"
          />
          Why waste time when you can{" "}
          <span className="custom-pink-gradient bg-clip-text text-transparent">
            automate
          </span>{" "}
          all your tasks with our{" "}
          <span className="custom-pink-gradient bg-clip-text text-transparent">
            Agents
          </span>
        </section>
        <section>
          <div>
            <Image
              src={heroRobot}
              alt="robot"
              height={896}
              width={1344}
              className="object-cover object-center md:h-[600px]"
            />
          </div>
        </section>
      </div>
      <div className="absolute bottom-0 h-20 bg-gradient-to-t from-background to-transparent w-full left-0"></div>
    </Section>
  );
};

export default Hero;
