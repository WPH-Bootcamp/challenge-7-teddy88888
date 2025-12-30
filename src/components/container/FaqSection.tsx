import { useState } from "react";
import { FaqItem } from "../ui/FaqItem";

const FAQ_DATA = [
  {
    question: "What services do you offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    question: "How do I know if this is right for my business?",
    answer:
      "Book a free consult — we'll assess your goals and recommend the right approach.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different. Let's talk about your needs to get a tailored estimate.",
  },
  {
    question: "How long does it take?",
    answer:
      "Depends on scope — but we always prioritize quality and deadlines.",
  },
  {
    question: "Can I start with a small project first?",
    answer: "Absolutely. We often begin with MVPs or pilot projects.",
  },
];

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Need Help? Start Here.
          </h2>
          <p className="text-zinc-500">
            Everything you need to know — all in one place.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Kolom Kiri: FAQ Accordion */}
          <div className="flex-1">
            {FAQ_DATA.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>

          {/* Kolom Kanan: CTA Card (Sesuai QA.png) */}
          <div className="lg:w-1/3">
            <div className="bg-[#FF5733] rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Let's talk it through</h3>
              <p className="mb-8 opacity-90">
                Book a free consultation with our team.
              </p>

              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src="src/components/container/HeroSection/ConsultationImage.png"
                  alt="Meeting"
                  className="w-full h-48 object-cover"
                />
              </div>

              <button className="w-full bg-white text-black py-4 rounded-full font-bold hover:bg-zinc-100 transition">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
