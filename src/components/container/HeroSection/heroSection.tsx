import { Button } from "../../ui/Button/Button";
export const HeroSection = () => (
  <section className="relative bg-black pt-32 pb-20 px-6 md:px-24 flex flex-col lg:flex-row items-center gap-12">
    <div className="flex-1 text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Your Tech Partner for <br />
        <span className="text-[#FF5733]">Smarter Growth</span>
      </h1>
      <p className="text-zinc-400 max-w-lg mb-10 text-lg">
        We deliver innovative IT solutions tailored to your business needs,
        ensuring speed, security, and scalability.
      </p>
      <Button className="bg-[#FF5733] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
        Get Started
      </Button>
    </div>
    <div className="flex-1 w-full max-w-2xl">
      <img
        src="src/components/container/HeroSection/imageHero.png"
        alt="Tech Visualization"
        className="w-full h-auto rounded-3xl shadow-2xl shadow-[#FF5733]/20"
      />
    </div>
  </section>
);
