import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import SignInForm from "@/components/auth/signin-form";

export default function SignIn() {
  return (
    
    <Card className="w-full grid grid-cols-12 px-14">
      <CardHeader className="hidden md:block md:col-span-6 w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1474128670149-7082a8d370ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="SignIn Image"
          width={1000}
          height={1000}
          className="h-screen w-full object-fit rounded-md"
        />
      </CardHeader>
      <CardFooter className="md:col-span-6 col-span-12 w-full pr-4">
        <SignInForm />
      </CardFooter>
    </Card>
  );
}