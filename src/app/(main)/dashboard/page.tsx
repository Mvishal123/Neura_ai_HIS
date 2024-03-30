import CrewCard from "@/components/main/crew-card";
import Section from "@/components/section";
import { Button, buttonVariants } from "@/components/ui/button";
import { MY_CREW } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Section className="mt-12">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">My crews</h1>
        <Link
          href="/create"
          className={`bg-purple-500 hover:bg-purple-600 text-white font-semibold ${buttonVariants(
            { size: "sm" }
          )}`}
        >
          Create crew
        </Link>
      </div>
      <div className="flex flex-wrap gap-6 mt-20">
        {MY_CREW.map((data) => (
          <CrewCard data={data} />
        ))}
      </div>
    </Section>
  );
};

export default Page;
