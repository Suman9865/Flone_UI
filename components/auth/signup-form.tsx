"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import React from "react";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpForm({ className, ...props }: UserAuthFormProps) {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");

  const [isPending, setIsPending] = React.useState<boolean>(false);

  const RegisterSchema = z.object({
    fullName: z
      .string()
      .min(4, "minimum of 4 character")
      .max(60, "maximum of 60 characters"),
    email: z.string().email({ message: "Enter Valid Email" }),
    password: z.string().min(4, "minimum of 4 character"),
    confirmPassword: z.string().min(4, "minimum of 4 character"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
  
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    console.log(values);
  }

  return (
    <Card className="max-w-lg mx-auto my-10 p-8">
  <CardHeader className="flex flex-col space-y-1 text-center">
    <CardTitle className="text-2xl font-semibold tracking-tight">
      Sign Up New Account
    </CardTitle>
    <CardDescription className="text-sm text-muted-foreground">
      Enter your details below to sign up for a new account
    </CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your full name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Enter your password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Confirm your password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button disabled={isPending} type="submit" className="w-full">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
    </Form>
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <div className="w-full flex items-center justify-center gap-5 mt-2">
      <Button variant="outline" size={"icon"}>
        <FaGoogle className="h-6 w-6 text-red-500" />
      </Button>
      <Button variant="outline" size={"icon"}>
        <FaFacebook className="h-6 w-6 text-blue-800" />
      </Button>
      <Button variant="outline" size={"icon"}>
        <FaTwitter className="h-6 w-6 text-blue-500" />
      </Button>
    </div>
  </CardContent>
  <CardFooter className="relative flex flex-row items-center justify-center py-0 ">
    <Button asChild variant={"link"} className="text-black">
      <Link href={"/auth/forgetpassword"}>
        Forget Password?
        <span className="sr-only">Forgot password</span>
      </Link>
    </Button>

    <Button asChild variant={"link"} className="text-black">
      <Link href="/auth/signin">
        Sign In Your Account?
        <span className="sr-only">Sign In</span>
      </Link>
    </Button>
  </CardFooter>
</Card>


  );
}