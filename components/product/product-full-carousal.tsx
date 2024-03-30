import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";

function ProductFullCarousal() {
  return (
    <div className="md:min-h-screen w-full">
      <Carousel opts={{
            align: "start",
            loop: true,
          }}>
        <CarouselContent>
          <CarouselItem className="md:min-h-screen w-full py-10 relative">
            <Image
              src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="main image"
              width={1000}
              height={1000}
              priority={true}
              className="absolute inset-0 h-full w-full object-cover object-center -z-50"
            />
            <div className="flex flex-col justify-start items-start md:w-2/3 w-full md:pl-20 pl-3 ">
              <h2 className="md:text-6xl text-4xl font-bold md:mt-20 mt-10 md:mb-4 mb-2 text-[#262626]">
                Summer Offer
              </h2>
              <h2 className="md:text-6xl text-4xl font-bold md:mb-20 mb-10 text-[#262626]">
                2024 Collections
              </h2>
              <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-12 py-8">
               SHOP NOW
               </Button>
            </div>
          </CarouselItem>
          <CarouselItem className="md:min-h-screen w-full py-10 relative">
            <Image
              src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="main image"
              width={1000}
              height={1000}
              priority={true}
              className="absolute inset-0 h-full w-full object-cover object-center -z-50"
            />
            <div className="flex flex-col justify-start items-start md:w-2/3 w-full md:pl-20 pl-3 ">
              <h2 className="md:text-6xl text-4xl font-bold md:mt-20 mt-10 md:mb-4 mb-2 text-[#262626]">
                Summer Offer
              </h2>
              <h2 className="md:text-6xl text-4xl font-bold md:mb-20 mb-10 text-[#262626]">
                2024 Collections
              </h2>
              <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-12 py-8">
               SHOP NOW
               </Button>
            </div>
          </CarouselItem>
          <CarouselItem className="md:min-h-screen w-full py-10 relative">
            <Image
              src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="main image"
              width={1000}
              height={1000}
              priority={true}
              className="absolute inset-0 h-full w-full object-cover object-center -z-50"
            />
            <div className="flex flex-col justify-start items-start md:w-2/3 w-full md:pl-20 pl-3 ">
              <h2 className="md:text-6xl text-4xl font-bold md:mt-20 mt-10 md:mb-4 mb-2 text-[#262626]">
                Summer Offer
              </h2>
              <h2 className="md:text-6xl text-4xl font-bold md:mb-20 mb-10 text-[#262626]">
                2024 Collections
              </h2>
              <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-12 py-8">
               SHOP NOW
               </Button>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-primary text-secondary left-0" />
        <CarouselNext className="bg-primary text-secondary right-0" />
      </Carousel>
    </div>
  );
}

export default ProductFullCarousal;
