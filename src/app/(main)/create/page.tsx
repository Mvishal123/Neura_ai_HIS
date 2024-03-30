"use client";
import React, { useState } from "react";
import Section from "@/components/section";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="">
      {/* Propmt */}
      {!isPromptOpen && (
        <div className="absolute top-0 bottom-0 w-full bg-slate-600/30 z-50 backdrop-blur-sm p-6">
          <Button
            className="bg-purple-500 text-white  hover:bg-purple-600 flex items-center cursor-pointer"
            size="sm"
            onClick={() => router.push("/dashboard")}
          >
            <ChevronLeft /> Back to dashboard
          </Button>
          <div className="h-full flex justify-center items-center">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {/* Desktop view */}
      <Section className="hidden lg:block">
        <ResizablePanelGroup direction="horizontal" className="rounded">
          <ResizablePanel defaultSize={10} className="min-h-[300px] border-2">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={10} className="min-h-[300px] border-2">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* <ResizableHandle withHandle /> */}
        {/* <ResizablePanel defaultSize={10}> */}
        <ResizablePanelGroup direction="horizontal" className="rounded">
          <ResizablePanel defaultSize={10} className="min-h-[300px] border-2">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={10} className="min-h-[300px] border-2">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Section>
      {/* smaller devices */}
      <Section className="px-12 lg:hidden mt-6 space-y-2">
        <div className="min-h-[400px] bg-slate-800/80 border-2 rounded-md"></div>
        <div className="min-h-[400px] bg-slate-800/80 border-2 rounded-md"></div>
        <div className="min-h-[400px] bg-slate-800/80 border-2 rounded-md"></div>
        <div className="min-h-[400px] bg-slate-800/80 border-2 rounded-md"></div>
      </Section>
    </div>
  );
};

export default Page;
