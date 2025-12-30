interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="bg-[#0A0A0A] border border-zinc-800 p-8 rounded-2xl hover:border-[#FF5733]/50 transition-all group">
    <div className="bg-zinc-900 w-23 h-23 rounded-lg flex items-center justify-center mb-2">
      {/* Menggunakan img tag untuk menampilkan file .png */}
      <img
        src={icon}
        alt={title}
        className="w-60 h-60 object-contain"
        // Error handling jika gambar tidak ditemukan
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
    <h4 className="text-white font-bold text-lg mb-3">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export const FeatureCards = () => (
  <div className="grid gap-6 md:grid-cols-3">
    <h2 className="col-span-full text-center text-3xl  text-white font-bold">
      Smart IT Solutions that growth with you
    </h2>
    <FeatureCard
      title="Custom Software Development"
      description="Tailored software solutions to meet your unique business needs and drive efficiency."
      icon="src/components/container/HeroSection/a.png"
    />
    <FeatureCard
      title="Cloud Integration"
      description="Seamless migration and integration of cloud services to enhance scalability and collaboration."
      icon="src/components/container/HeroSection/b.png"
    />
    <FeatureCard
      title="Cybersecurity Services"
      description="Comprehensive security solutions to protect your digital assets and ensure data integrity."
      icon="src/components/container/HeroSection/c.png"
    />
    <FeatureCard
      title="Cloud Solutions"
      description="Scalable and secure cloud infrastructure to support your business growth."
      icon="src/components/container/HeroSection/d.png"
    />
    <FeatureCard
      title="Software Development"
      description="Custom software solutions tailored to your specific business requirements."
      icon="src/components/container/HeroSection/e.png"
    />
    <FeatureCard
      title="IT Infrastructure"
      description="Robust and scalable IT infrastructure to support your business operations."
      icon="src/components/container/HeroSection/f.png"
    />
    <FeatureCard
      title="Cybersecurity Services"
      description="Comprehensive security solutions to protect your digital assets and ensure data integrity."
      icon="src/components/container/HeroSection/g.png"
    />
    <FeatureCard
      title="QA Solutions"
      description="Comprehensive testing and quality assurance services to ensure your software meets the highest standards."
      icon="src/components/container/HeroSection/h.png"
    />
    <FeatureCard
      title="IT Consulting & Support"
      description="Expert guidance and ongoing support to optimize your IT environment."
      icon="src/components/container/HeroSection/i.png"
    />
  </div>
);
