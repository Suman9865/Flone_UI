import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="min-h-screen grid grid-cols-12 gap-0 relative">
        <Image
          src="https://images.unsplash.com/photo-1474128670149-7082a8d370ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="farmer image"
          width={1000}
          height={1000}
          className="absolute w-full h-screen object-cover -z-10"
        />
        <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center col-span-12 md:col-span-6 h-full w-full">
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;