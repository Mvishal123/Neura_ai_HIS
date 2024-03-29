"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useMemo, useState } from "react";
import { LoginSchema, SignUpFormSchema } from "@/lib/schema/form-schema";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Loader from "@/components/ui/loader";
import { useRouter, useSearchParams } from "next/navigation";
import {
  actionLoginUser,
  actionSignUpUser,
} from "@/lib/server-actions/auth-sections";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MailCheck } from "lucide-react";

const LoginPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const codeExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(
    () =>
      clsx("bg-primary", {
        "bg-red-500/10": codeExchangeError,
        "border-red-500/50": codeExchangeError,
        "text-red-700": codeExchangeError,
      }),
    [codeExchangeError]
  );

  const Signupform = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async (
    formData
  ) => {
    const { error } = await actionLoginUser(formData);
    if (error) {
      form.reset();
      setSubmitError(error.message);
    } else {
      router.replace("/onboarding/create-profile");
    }
  };

  const onSignUpSubmit = async ({
    email,
    password,
  }: z.infer<typeof LoginSchema>) => {
    const { error } = await actionSignUpUser({ email, password });
    if (error) {
      setSubmitError(error.message);
      router.push(`/login?error_description=${error.message}`);
      form.reset();
      return;
    }
    setConfirmation(true);
    form.reset();
  };
  return (
    <div className="z-10 flex flex-col items-center justify-center h-[550px] bg-slate-900/50 w-full sm:w-[450px] min-h-20 rounded-[20px] border border-white/10 backdrop-blur-md relative mx-auto mt-4">
      <div className="w-full px-6">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-xl">
            <TabsTrigger className=" text-white rounded-xl " value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className=" text-white rounded-xl " value="signup">
              Sign up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-4">
            <Form {...form}>
              <form
                onChange={() => {
                  if (submitError) setSubmitError("");
                }}
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full sm:justify-center sm:w-[400px] space-y-4 flex flex-col"
              >
                <Label>Email</Label>
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          className="shadow-lg"
                          placeholder="neura@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Label>Password</Label>
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          className="shadow-lg"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="items-end flex justify-end w-full">
                  <span> Forget Password?</span>
                </div>
                {submitError && <FormMessage>{submitError}</FormMessage>}
                <Button
                  type="submit"
                  className="w-full p-5 rounded-[15px] bg-purple-700 border-4 border-purple-900 text-white hover:bg-purple-800"
                  size="lg"
                  disabled={isLoading}
                >
                  {!isLoading ? "LOGIN TO ACCOUNT" : <Loader />}
                </Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="signup" className="mt-4">
            <Form {...Signupform}>
              <form
                onChange={() => {
                  if (submitError) setSubmitError("");
                }}
                onSubmit={Signupform.handleSubmit(onSignUpSubmit)}
                className="w-full sm:justify-center sm:w-[400px] space-y-4 flex flex-col"
              >
                <Label>Email</Label>
                <FormField
                  disabled={isLoading}
                  control={Signupform.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          className="shadow-lg"
                          placeholder="neura@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Label>Password</Label>
                <FormField
                  disabled={isLoading}
                  control={Signupform.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          className="shadow-lg"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Label>Confirm Password</Label>
                <FormField
                  disabled={isLoading}
                  control={Signupform.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {submitError && <FormMessage>{submitError}</FormMessage>}
                <Button
                  type="submit"
                  className="w-full p-5 rounded-[15px] bg-purple-700 border-4 border-purple-900 text-white hover:bg-purple-800"
                  size="lg"
                  disabled={isLoading}
                >
                  {!isLoading ? "REGISTER AN ACCOUNT" : <Loader />}
                </Button>
                {(confirmation || codeExchangeError) && (
                  <>
                    <Alert className={`${confirmationAndErrorStyles} bg-black`}>
                      {!codeExchangeError && (
                        <MailCheck className=" text-white h-4 w-4" />
                      )}
                      <AlertTitle className="text-white font-semibold">
                        {codeExchangeError
                          ? "Invalid Link"
                          : "Check your email."}
                      </AlertTitle>
                      <AlertDescription className="text-white font-semibold">
                        {codeExchangeError ||
                          "An email confirmation has been sent."}
                      </AlertDescription>
                    </Alert>
                  </>
                )}
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
