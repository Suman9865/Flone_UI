import { Button } from "../ui/button";
import { Leaf } from "lucide-react";

function Header() {
  return (
    <>
      <header className="w-full flex items-center justify-between h-14 px-5 bg-[#262626] text-2xl sticky top-0 z-50">
        <div className="flex items-center justify-center gap-1 text-[#80B541]">
          <Leaf />
          <h1 className="text-white">
            envato<span className="text-[#80B541]">market</span>
          </h1>
        </div>
        <div className="">
          <Button type="button" className="bg-[#82B440] text-white">
            Buy now
          </Button>
        </div>
      </header>
      <nav className="w-full flex items-center justify-between h-20 px-10 backdrop-blur-xl bg-white/30 sticky top-14 drop-shadow-md z-50">
        <h2 className="md:text-5xl text-3xl font-bold text-[#262626]">
          Flone.
        </h2>
        <div className="">
          <ul className="md:flex items-center justify-center gap-10 font-bold hidden text-[#262626]">
            <li>Demos</li>
            <li>Features</li>
            <li>Support</li>
          </ul>
        </div>
        <Button variant={"secondary"} className="shadow-sm shadow-slate-400">
          Purchase
        </Button>
      </nav>
    </>
  );
}

export default Header;
