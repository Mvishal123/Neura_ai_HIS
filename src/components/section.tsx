import clsx from "clsx";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id = "" }: SectionProps) => {
  return (
    <section className={clsx("px-4 md:px-12 lg:px-28", className)} id={id}>
      {children}
    </section>
  );
};

export default Section;
