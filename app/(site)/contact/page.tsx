import Image from "next/image";
import ContactForm from "@/components/Home/contact-form";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function Contact() {
  return (
    
    <Card className="w-full grid grid-cols-12 px-14">
      <CardHeader className="hidden md:block md:col-span-6 w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Contact Image"
          width={1000}
          height={1000}
          className="h-screen w-full object-cover rounded-md"
        />
      </CardHeader>
      <CardFooter className="md:col-span-6 col-span-12 w-full pr-4">
        <ContactForm />
      </CardFooter>
    </Card>
  );
}