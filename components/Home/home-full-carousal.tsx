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

function HomeFullCarousal() {
  return (
    <div className="md:min-h-screen w-full">
    <Carousel>
  <CarouselContent>
    <CarouselItem className="md:min-h-screen w-full py-10 relative"><Image
        src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="main image"
        width={1000}
        height={1000}
        priority={true}
        className="absolute inset-0 h-full w-full object-cover object-center -z-50"
      />
      <div className="flex flex-col justify-start items-start md:w-2/3 w-full md:pl-20 pl-3 ">
        <h2 className="md:text-6xl text-4xl font-bold md:my-20 my-10 text-[#262626]">
        Fully optimized & customizable shop samples, visually bold design & beautiful effects
        </h2>
        <p className="text-slate-100 font-semibold leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis dapibus rutrum urna, sit amet accumsan velit efficitur sed. Phasellus blandit lacinia consequat. 
        Integer auctor, mi id mollis fringilla, magna elit dignissim ex, ac vulputate odio justo sed purus.
        </p>
      </div></CarouselItem>
    <CarouselItem className="md:min-h-screen w-full py-10 relative"><Image
        src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="main image"
        width={1000}
        height={1000}
        priority={true}
        className="absolute inset-0 h-full w-full object-cover object-center -z-50"
      />
      <div className="flex flex-col justify-start items-start md:w-2/3 w-full md:pl-20 pl-3 ">
        <h2 className="md:text-6xl text-4xl font-bold md:my-20 my-10 text-[#262626]">
          Fully optimized & customizable shop samples, visually bold design & beautiful effects
        </h2>
        <p className="text-slate-100 font-semibold">
        A versatile eCommerce Platform for different purposes that
          emphasizes creativity, efficiency, and diversity.
        </p>
      </div></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="bg-primary text-secondary left-0" />
  <CarouselNext className="bg-primary text-secondary right-0" />
</Carousel>

    </div>
  );
}

export default HomeFullCarousal;
