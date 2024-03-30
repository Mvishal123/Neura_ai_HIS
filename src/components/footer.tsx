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
    <Section className="py-3 h-20 border-t mt-40">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <Image
            src={neura}
            alt="logo"
            width={1024}
            height={1024}
            className="h-20 w-20"
          />
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
