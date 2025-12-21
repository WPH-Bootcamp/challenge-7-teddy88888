import { useState } from "react";
import { IndustryTab } from "../ui/IndustryTab";

export const IndustrySection = () => {
  type IndustryKey = "Fintech" | "E-Commerce" | "Healthcare";
  const [active, setActive] = useState<IndustryKey>("Fintech");

  const content: Record<IndustryKey, { desc: string; img: string }> = {
    Fintech: {
      desc: "Secure and scalable banking systems.",
      img: "src/components/container/HeroSection/Fintech.png",
    },
    "E-Commerce": {
      desc: "Reliable platforms for seamless shopping.",
      img: "src/components/container/HeroSection/E-Commerce.png",
    },
    Healthcare: {
      desc: "Digital solutions improving patient care.",
      img: "src/components/container/HeroSection/Healthcare.png",
    },
  };

  return (
    <section className="bg-black py-24 px-6 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Built for Your Industry
      </h2>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col space-y-4 lg:w-1/4">
          {(Object.keys(content) as IndustryKey[]).map((key) => (
            <IndustryTab
              key={key}
              label={key}
              isActive={active === key}
              onClick={() => setActive(key)}
            />
          ))}
        </div>
        <div className="lg:w-3/4">
          <p className="text-zinc-300 text-xl mb-8 leading-relaxed">
            {content[active].desc}
          </p>
          <img
            src={content[active].img}
            className="rounded-3xl w-full aspect-video object-cover border border-zinc-800"
            alt={active}
          />
        </div>
      </div>
    </section>
  );
};
