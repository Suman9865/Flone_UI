import Image from "next/image";

function HomeAdvanceOption() {
  return (
    <div className="w-full md:min-h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1519548728539-29ed16dd097a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        width={1000}
        height={800}
        className="absolute inset-0 h-full w-full object-cover object-center -z-50"
      />
      <div className="w-full flex flex-col items-center justify-center gap-32 md:p-20 p-10">
        <div className="w-full md:w-1/2 mx-auto">
          <h2 className="text-white text-4xl font-semibold text-center">
          Impressive design, powerful features, and easy customization
          </h2>
        </div>
        <div className="w-full flex items-center justify-between gap-20 flex-col md:flex-row">
          <div className=" w-full flex flex-col gap-10 md:flex-row">
            <h2 className="font-bold text-7xl text-[#F4B779]">7 +</h2>
            <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5 text-white">
              <h3 className="text-2xl font-semibold">Premade Headers</h3>
              <p>
              A versatile eCommerce Platform for different purposes that
          emphasizes creativity, efficiency, and diversity.
              </p>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-10 md:flex-row">
            <h2 className="font-bold text-7xl text-[#F4B779]">3 +</h2>
            <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5 text-white">
              <h3 className="text-2xl font-semibold">Premade Footers</h3>
              <p>
              A versatile eCommerce Platform for different purposes that
          emphasizes creativity, efficiency, and diversity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdvanceOption;
