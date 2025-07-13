import MainBackground from "@/components/main-background";

export default function Home() {
  const services = ["Web", "Mobile", "UI/UX"];
  return (
    <main className="h-screen w-screen bg-black overflow-hidden relative">
      <MainBackground />
      <div className="absolute top-0 left-0 z-1 w-full h-full text-white flex items-center justify-center px-[3%]">
        <div className="flex flex-col items-center justify-center text-center gap-[20px]">
          <h2 className="text-6xl text-center mt-20 font-body font-semibold">
            Tiny Minds, Big Impact!
          </h2>
          <h1 className="text-xl font-secondary text-center text-gray-300 tracking-wide">
            We craft scalable, elegant digital solutions with precision and
            passion.
          </h1>
          <ul className="flex text-lg font-semibold">
            {services.map((service, index) => (
              <li
                key={index}
                className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer after:content-['/'] after:mx-4 last:after:content-['']"
              >
                {service}
              </li>
            ))}
          </ul>
          <button>Coming Soon</button>
        </div>
      </div>
    </main>
  );
}
