import Link from "next/link";
import { Button } from "../ui/button";
import { HeaderNavigationMenu } from "./navigation-menu";

function Header() {
  return (
    <>
      <nav className="w-full flex items-center justify-between h-20 px-20 backdrop-blur-xl bg-white/30 sticky top-0 drop-shadow-md z-50">
        <h2 className="md:text-5xl text-3xl font-bold text-[#262626]">
         DIGISTORE
        </h2>
        <div className="md:flex items-center justify-center font-bold hidden">
        <HeaderNavigationMenu />
      </div>
        <Link href="/auth/signin">
        <Button variant={"secondary"} className="shadow-sm shadow-slate-400">
          Sign Up
        </Button>
      
        </Link>
      </nav>
    </>
  );
}

export default Header;
