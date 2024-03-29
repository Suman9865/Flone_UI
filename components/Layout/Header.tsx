import { Button } from "../ui/button";
import { Leaf } from "lucide-react";

function Header() {
  return (
    <>
      <nav className="w-full flex items-center justify-between h-20 px-20 backdrop-blur-xl bg-white/30 sticky top-0 drop-shadow-md z-50">
        <h2 className="md:text-5xl text-3xl font-bold text-[#262626]">
          Flone.
        </h2>
        <div className="">
          <ul className="md:flex items-center justify-center gap-10 font-bold hidden text-[#262626]">
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <>
        <Button variant={"secondary"} className="shadow-sm shadow-slate-400">
          Sign Up
        </Button>
      
        </>
      </nav>
    </>
  );
}

export default Header;
