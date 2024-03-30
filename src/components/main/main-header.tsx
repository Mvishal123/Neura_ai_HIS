"use client";

import { neura } from "@/assets";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
import { FaHamburger, FaUser } from "react-icons/fa";
import Section from "../section";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LogOut, Menu } from "lucide-react";
import { MAIN_NAV_LINKS } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MainHeader = () => {
  const pathname = usePathname();
  // console.log(pathname.split("/").includes("Create".toLowerCase()));

  return (
    <header className="h-14">
      <Section className="flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-1">
          <Image
            src={neura}
            alt="neura-logo"
            height={1024}
            width={1024}
            className="w-16 h-16"
          />
          <h1 className="text-2xl font-bold">
            Neura<span className="text-sm">.ai</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            {MAIN_NAV_LINKS.map((item, index) => {
              const isSelected = pathname
                .split("/")
                .includes(item.label.toLowerCase());

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={clsx(
                    " hover:text-purple-400 ",
                    isSelected ? "text-purple-400" : "text-slate-500"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div>
            <Popover>
              <PopoverTrigger>
                <Avatar className="border flex justify-center items-center">
                  <AvatarFallback>
                    <FaUser />
                  </AvatarFallback>
                  <AvatarImage src="" alt="profile-image" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="px-4 flex flex-col items-center w-60">
                <Button variant="ghost" className="w-full">
                  Profile
                </Button>
                <Button variant="ghost" className="w-full">
                  Log out
                  <LogOut className="ml-2 h-4 w-4" />{" "}
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="sm:hidden cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-[250px]">
              <div className="py-6 px-3 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-4">
                  {MAIN_NAV_LINKS.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href}
                      className="text-slate-300 hover:text-purple-400 text-xl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Button>
                  Log out
                  <LogOut className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Section>
    </header>
  );
};

export default MainHeader;
