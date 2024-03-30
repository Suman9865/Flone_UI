import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

function ProductCard() {
  return (
    <div className="w-full flex flex-col justify-center md:my-5 items-center px-3 md:gap-10 gap-7 md:px-10">
      <div className="md:w-1/2 w-full mx-auto flex flex-col items-center justify-center gap-5">
        <h2 className="md:text-5xl text-3xl md:p-5 font-bold">----- Daily Deals! -----</h2>
      </div>
      <div className="w-full grid md:grid-cols-3 gap-10">
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
        <Card className="border-none shadow-transparent group cursor-pointer bg-slate-200">
          <CardHeader className="p-0 pb-4">
            <Image
              src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pages image"
              width={1000}
              height={1000}
              className="shadow-2xl shadow-slate-400 rounded-xl object-cover h-full w-full group-hover:-translate-y-5 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between mx-8">
          <CardTitle>$50</CardTitle>
          <Button variant={"secondary"} className="shadow-sm shadow-slate-400 px-6 py-4">
            BUY NOW
          </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default ProductCard;
