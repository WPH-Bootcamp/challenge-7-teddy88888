import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded bg-[#FF5733] text-white font-medium hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 md:px-24 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-[#FF5733] rounded-lg"></div>
      <span className="text-white font-bold text-xl">TechCorp</span>
    </div>
    <div className="hidden md:flex gap-8 text-zinc-400 text-xl font-medium">
      <a href="#" className="hover:text-white transition">
        Home
      </a>
      <a href="#" className="hover:text-white transition">
        Service
      </a>
      <a href="#" className="hover:text-white transition">
        Projects
      </a>
      <a href="#" className="hover:text-white transition">
        Testimonials
      </a>
      <a href="#" className="hover:text-white transition">
        FAQ
      </a>
    </div>
    <button className="bg-[#FF5733] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#E04E2C] transition">
      Get Started
    </button>
  </nav>
);
