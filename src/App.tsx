import { Navbar } from "./components/ui/navbar";
import { HeroSection } from "./components/container/HeroSection/heroSection";
import { ProcessSection } from "./components/container/processSection";
import { StatCard } from "./components/ui/statcard";
import { IndustrySection } from "./components/container/industry";
import { TrustedBrands } from "./components/container/content";
import { FeatureCards } from "./components/ui/Button/featureCard";
import { FaqSection } from "./components/container/FaqSection";
import { Contact } from "./components/container/contact";
import { ContactSection } from "./components/container/ContactSection";
import { Footer } from "./components/container/Footer";
function App() {
  return (
    <main className="bg-black min-h-screen font-sans selection:bg-[#FF5733] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <TrustedBrands />

      {/* Bagian Grid FeatureCard */}
      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{new Map()}</div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-24">
        <FeatureCards />
      </section>

      {/* Stats Section */}
      <section className="py-20 flex flex-wrap justify-center gap-8 bg-black">
        <StatCard value="50+" label="Projects Completed" />
        <StatCard value="5+" label="Years Experience" />
        <StatCard value="10+" label="Industry Experts" />
        <StatCard value="100%" label="Client Satisfaction" />
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Industry Section (Fitur Utama) */}
      <IndustrySection />

      <FaqSection />

      <Contact />

      <ContactSection />

      {/* Footer CTA */}
      <Footer />
      {/* Footer Bottom */}
      {/* <footer className="py-12 px-6 md:px-24 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">
          © 2024 TechCorp. All rights reserved.
        </p>
        <div className="flex gap-6 text-zinc-500 text-sm">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
      <div className="flex gap-6 text-zinc-500 text-sm">
        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white transition">
          Terms of Service
      //   </a> */}
      {/* // </div> */}
    </main>
  );
}

export default App;
