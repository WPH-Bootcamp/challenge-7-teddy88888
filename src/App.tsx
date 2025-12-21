import { Navbar } from "./components/ui/navbar";
import { HeroSection } from "./components/container/HeroSection/heroSection";
import { ProcessSection } from "./components/container/processSection";
import { StatCard } from "./components/ui/statcard";
import { IndustrySection } from "./components/container/industry";
import { Button } from "./components/ui/Button/Button";
import { TrustedBrands } from "./components/container/content";

function App() {
  return (
    <main className="bg-black min-h-screen font-sans selection:bg-[#FF5733] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <TrustedBrands />

     
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
      
     
      

      {/* Footer CTA */}
      <section className="bg-zinc-900 mx-6 md:mx-24 mb-24 rounded-3xl py-16 px-8 text-center border border-zinc-800">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start? Let's Talk
        </h2>
        <p className="text-zinc-400 mb-10">
          Transform your business with our expert IT solutions.
        </p>
        <Button>Contact Us Now</Button>
      </section>

      {/* Footer Bottom */}
      <footer className="py-12 px-6 md:px-24 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">
          © 2024 TechCorp. All rights reserved.
        </p>
        <div className="flex gap-6 text-zinc-500 text-sm">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
