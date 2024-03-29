"use client";

import { neura } from "@/assets";
import { NAV_LINKS } from "@/utils/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="">
      <div className="px-14 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src={neura}
            alt="neura-logo"
            height={1024}
            width={1024}
            className="h-14 w-14"
          />
          <h1 className="text-2xl font-bold">
            Neura<span className="text-sm">.ai</span>
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-4 md:flex">
            {NAV_LINKS.map((nav) => {
              const isSelected = pathname
                .split("/")
                .includes(nav.label.toLowerCase());
              return (
                <Link
                  href={nav.href}
                  key={nav.label}
                  className={clsx(
                    "text-slate-500 hover:text-purple-400 ",
                    isSelected && "text-purple-400"
                  )}
                >
                  {nav.label}
                </Link>
              );
            })}
          </nav>
          <div>
            <Link
              href="/login"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-400"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get started
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
