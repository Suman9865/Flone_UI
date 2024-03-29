import Image from "next/image";

function HomeTheme() {
  return (
    <div className="md:min-h-screen w-full py-10 relative">
      <Image
        src="https://images.unsplash.com/photo-1624359136353-f60129a367b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="theme image"
        width={1000}
        height={1000}
        priority={true}
        className="absolute inset-0 h-full w-full object-cover object-center -z-50"
      />
    </div>
  )
}

export default HomeTheme;
