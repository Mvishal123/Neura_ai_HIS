import React from "react";
import Section from "./section";
import Image from "next/image";
import { neura } from "@/assets";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <Section className="py-3 border-t mt-24 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <Image
            src={neura}
            alt="logo"
            width={1024}
            height={1024}
            className="h-20 w-20"
          />
          <div className="flex items-end">
            <h1 className="text-2xl font-bold">Neura</h1>
            <span>.ai</span>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <Link href="/">
            <FaXTwitter />
          </Link>
          <Link href="/">
            <FaInstagram />
          </Link>
          <Link href="/">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
