import clsx from "clsx";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return <section className={clsx("px-4 md:px-12 lg:px-28", className)}>{children}</section>;
};

export default Section;
