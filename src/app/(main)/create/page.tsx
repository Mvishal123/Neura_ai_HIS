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

const Page = () => {
  const [isPromptOpen, setIsPromptOpen] = useState<boolean>(true);
  const [formValues, setFormValues] = useState<string>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof PromptFormSchema>>({
    resolver: zodResolver(PromptFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof PromptFormSchema>) {
    setFormValues(values.prompt);
    toast("Agents are being created");
    setIsPromptOpen(false);
  }

  return (
    <div className="h-full">
      {/* Propmt */}
      {isPromptOpen && (
        <div className="absolute top-0 h-full w-full bg-slate-600/30 z-50 backdrop-blur-md p-6">
          <Button
            className="bg-purple-500 text-white  hover:bg-purple-600 flex items-center cursor-pointer"
            size="sm"
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
                            className="border-2"
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
                  <Button
                    type="submit"
                    className="bg-purple-400 w-full hover:bg-purple-600 text-white"
                  >
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
      <div>
        <Section className="hidden lg:block mt-24">
          <h2 className="text-2xl font-semibold mb-4">Agent Workshop</h2>
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded overflow-auto"
          >
            <ResizablePanel
              className="min-h-[350px] border-2 bg-slate-900 shadow-inner"
              defaultSize={10}
            >
              <div className="p-6">
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
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={10}
              className="min-h-[350px] border-2 bg-slate-900 shadow-inner"
            >
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Sidebar</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

          {/* <ResizableHandle withHandle /> */}
          {/* <ResizablePanel defaultSize={10}> */}
          <ResizablePanelGroup direction="horizontal" className="rounded">
            <ResizablePanel
              defaultSize={10}
              className="min-h-[350px] border-2 bg-slate-900 shadow-inner"
            >
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Sidebar</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={10}
              className="min-h-[350px] border-2 bg-slate-900 shadow-inner"
            >
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Sidebar</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Section>
        {/* smaller devices */}
        <Section className="px-12 lg:hidden mt-6 space-y-2">
          <div className="min-h-[350px] border-2 bg-slate-900 shadow-inner rounded"></div>
          <div className="min-h-[350px] border-2 bg-slate-900 shadow-inner rounded"></div>
          <div className="min-h-[350px] border-2 bg-slate-900 shadow-inner rounded"></div>
          <div className="min-h-[350px] border-2 bg-slate-900 shadow-inner rounded"></div>
        </Section>
      </div>
    </div>
  );
};

export default Page;
