import Image from "next/image";

function HomeMain() {
  return (
    <div className="md:min-h-screen w-full py-10 relative">
      <Image
        src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="main image"
        width={1000}
        height={1000}
        priority={true}
        className="absolute inset-0 h-full w-full object-cover object-center -z-50"
      />
      <div className="flex flex-col justify-start items-start md:w-2/3 w-full md:pl-20 pl-3 ">
        <h2 className="md:text-6xl text-4xl font-bold md:my-20 my-10 text-[#262626]">
          Summer Offer - Latest Collections of 2024
        </h2>
        <p className="text-slate-100 font-semibold">
          A versatile eCommerce Platform for different purposes that
          emphasizes creativity, efficiency, and diversity.
        </p>
      </div>
    </div>
  );
}

export default HomeMain;
