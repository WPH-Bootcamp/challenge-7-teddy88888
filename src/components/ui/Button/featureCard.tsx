export const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <>
    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-[#FF5733]/50 transition-colors">
      <div className="text-[#FF5733] mb-4 text-2xl">{icon}</div>
      <h4 className="text-white font-bold mb-2">{title}</h4>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  </>
);

export const FeatureCards = () => (
  <div className="grid gap-6 md:grid-cols-3">
    <p className="col-span-full text-center text-white font-bold">
      Smart IT Solutions that growth with you
    </p>
    <FeatureCard
      title="Custom Software Development"
      description="Tailored software solutions to meet your unique business needs."
      icon="💻src/components/container/HeroSection/main-Container.png"
    />
  </div>
);
