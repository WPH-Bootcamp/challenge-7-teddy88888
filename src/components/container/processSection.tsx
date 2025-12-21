const steps = [
  { title: "Initial Consultation", desc: "Understanding your vision." },
  { title: "Planning & Strategy", desc: "Mapping the roadmap." },
  { title: "Design & Prototype", desc: "Visualizing the solution." },
];

export const ProcessSection = () => (
  <section className="bg-black py-24 px-6 text-center">
    <h2 className="text-white text-3xl font-bold mb-16">Our Process</h2>
    <div className="max-w-4xl mx-auto relative">
      {/* Garis Vertikal Tengah */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block"></div>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 p-6">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl text-left">
              <h4 className="text-white font-bold">{step.title}</h4>
              <p className="text-zinc-500 text-sm">{step.desc}</p>
            </div>
          </div>
          <div className="z-10 w-10 h-10 rounded-full bg-[#FF5733] border-4 border-black flex items-center justify-center text-white text-sm font-bold">
            {index + 1}
          </div>
          <div className="md:w-1/2"></div>
        </div>
      ))}
    </div>
  </section>
);
