export const TrustedBrands = () => (
  <section className="bg-black py-16 px-6 text-center border-y border-zinc-900">
    <p className="text-zinc-500 uppercase tracking-widest text-sm mb-10">
      Trusted by Global Innovators & Leading Brands
    </p>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-100 transition-transform">
      {/* Gunakan logo dari Content - Company Logo.png */}
      <img
        src="src/components/container/HeroSection/adobe.png"
        alt="Adobe"
        className="h-8"
      />
      <img
        src="src/components/container/HeroSection/upwork.png"
        alt="Upwork"
        className="h-8"
      />
      <img
        src="src/components/container/HeroSection/airbnb.png"
        alt="Airbnb"
        className="h-8"
      />
      <img
        src="src/components/container/HeroSection/netflix.png"
        alt="Netflix"
        className="h-8"
      />
      <img
        src="src/components/container/HeroSection/databricks.png"
        alt="databricks"
        className="h-8"
      />
      <img
        src="src/components/container/HeroSection/dropbox.png"
        alt="dropbox"
        className="h-8"
      />
      <img
        src="src/components/container/HeroSection/paypal.png"
        alt="paypal"
        className="h-8"
      />
      <img
        src="src/components/container/HeroSection/postman.png"
        alt="postman"
        className="h-8"
      />
    </div>
  </section>
);
