"use client";
import Section from "@/components/section";
import TypeWriter from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { PromptFormSchema } from "@/lib/schema/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

import { gearSvg } from "@/assets";
import Image from "next/image";
import { Video } from "@/components/video";

const Page = () => {
  const [isPromptOpen, setIsPromptOpen] = useState<boolean>(true);
  const [formValues, setFormValues] = useState<string>("");
  const [outputSuccess, setOutputSuccess] = useState<boolean>(false);
  const [consoleReady, setConsoleReady] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof PromptFormSchema>>({
    resolver: zodResolver(PromptFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const consoleStart = () => {
    return <Video />;
  };

  function onSubmit(values: z.infer<typeof PromptFormSchema>) {
    setFormValues(values.prompt);
    toast("Agents are being created");
    setIsPromptOpen(false);
  }

  return (
    <div className="h-full ">
      {/* Propmt */}
      {isPromptOpen && (
        <div className="absolute top-0 h-full w-full bg-slate-600/30 z-50 backdrop-blur-xl p-6 ">
          <Button
            className=""
            size="sm"
            variant="brand"
            onClick={() => router.push("/dashboard")}
          >
            <ChevronLeft /> Back to dashboard
          </Button>
          <div className="h-full flex flex-col justify-center items-center">
            <div className=" h-40">
              <TypeWriter />
            </div>
            <div className="w-[90%] lg:w-[900px]">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="prompt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prompt to generate agents</FormLabel>
                        <FormControl>
                          <Textarea
                            className="border-2  focus-visible:ring-0"
                            placeholder="Create a crew of agents for..."
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">
                          Enter a descriptive prompt to get better results
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" variant="brand">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Desktop view */}
      <div className="max-h-[600px]">
        <Section className="hidden lg:block mt-24 ">
          <h2 className="text-2xl font-semibold mb-4">Agent Workshop</h2>
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded overflow-auto shadow-2xl shadow-purple-400"
          >
            <ResizablePanel
              className="min-h-[350px] border-2 bg-slate-900 shadow-inner"
              defaultSize={10}
            >
              <div className="p-6">
                {/* <div className="mt-4">
                  <h1 className="text-sm mb-2 font-semibold">Prompt:</h1>
                  <Textarea
                    value={formValues}
                    rows={2}
                    className="text-slate-400  focus-visible:ring-0"
                    readOnly
                  />
                </div>
                <div>
                  <h1 className="text-sm mt-2 font-semibold">Crew name</h1>
                  <Input type="text" className="mt-2" />
                </div>
                <div>
                  <h1 className="text-sm mt-2 font-semibold">
                    Upload a picture for your AI crew
                  </h1>
                  <Input type="file" className="mt-2" />
                </div> */}
                <Button
                  variant="brand"
                  className="w-full"
                  onClick={() => setConsoleReady(true)}
                >
                  Start
                </Button>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={10}
              className="min-h-[100px] border-2 bg-slate-900"
            >
              <div className="flex h-full items-center justify-center p-6"></div>
            </ResizablePanel>
          </ResizablePanelGroup>

          <ResizablePanelGroup direction="horizontal" className="rounded shadow-lg shadow-purple-400">
            <ResizablePanel
              defaultSize={10}
              className="min-h-[100px] border-2 bg-slate-900 shadow-inner"
            >
              <div className="flex h-full items-center justify-center">
                {!consoleReady && (
                  <Image
                    src={gearSvg}
                    alt="gear"
                    height={1024}
                    width={1024}
                    className="w-16 h-16 animate-spin-slow duration-700"
                  />
                )}
                {consoleReady && <Video />}
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={10}
              className="min-h-[100px] border-2 bg-slate-900 shadow-inner relative"
            >
              <div className="p-2 h-full">
                {!outputSuccess && (
                  <>
                    <div className="absolute bg-slate-600/50 blur-3xl w-full h-full top-0 flex justify-center items-center z-0" />
                    <h1 className="h-full flex justify-center items-center text-white relative z-10 font-bold text-xl">
                      Building...
                    </h1>
                  </>
                )}
                <div></div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Section>
        {/* smaller devices */}
        <Section className="px-12 lg:hidden mt-6 space-y-2">
          <div className="min-h-[100px] border-2 bg-slate-900 shadow-inner rounded">
            <div className="p-3">
              <div className="mt-4">
                <h1 className="text-sm mb-2 font-semibold">Prompt:</h1>
                <Textarea
                  value={formValues}
                  rows={2}
                  className="text-slate-400  focus-visible:ring-0"
                  readOnly
                />
              </div>
              <div>
                <h1 className="text-sm mt-2 font-semibold">Crew name</h1>
                <Input type="text" className="mt-2" />
              </div>
              <div>
                <h1 className="text-sm mt-2 font-semibold">
                  Upload a picture for your AI crew
                </h1>
                <Input type="file" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="min-h-[350px] border-2 bg-slate-900 shadow-inner rounded"></div>
          <div className="min-h-[350px] border-2 bg-slate-900 shadow-inner rounded">
            {!consoleReady && (
              <div className="flex justify-center items-center h-[300px]">
                <Image
                  src={gearSvg}
                  alt="gear"
                  height={1024}
                  width={1024}
                  className="w-16 h-16 animate-spin-slow duration-700 opacity-50"
                />
              </div>
            )}
          </div>
          <div className="min-h-[350px] border-2 bg-slate-900 shadow-inner rounded relative">
            <div className="p-2 h-full">
              {!outputSuccess && (
                <>
                  <div className="absolute bg-slate-600/50 blur-3xl w-full top-0 bottom-0 flex justify-center items-center z-0" />
                  <h1 className="h-full flex justify-center items-center text-white relative z-10 font-bold text-xl">
                    Building...
                  </h1>
                </>
              )}
              <div></div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Page;
