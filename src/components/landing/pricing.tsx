import React from "react";
import Section from "../section";
import { PRICING_DETAILS } from "@/utils/constants";
import PricingCard from "./pricing-card";

const Pricing = () => {
  return (
    <Section className="mt-12 lg:mt-28">
      <h1 className="text-2xl md:text-4xl font-bold">Pricing</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        {PRICING_DETAILS.map((plan) => (
            <PricingCard data={plan}/>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;
