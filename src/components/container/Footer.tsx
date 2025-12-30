import { SocialIcon } from "../ui/SocialIcon";

export const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6 md:px-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF5733] rounded"></div>
            <span className="text-white font-bold text-lg">TechCorp</span>
          </div>
          <p className="text-zinc-500 text-sm italic">
            © 2025 TechCorp. All rights reserved.
          </p>
        </div>

        {/* Media Sosial */}
        <div className="flex gap-4">
          <SocialIcon platform="facebook" href="#" />
          <SocialIcon platform="tiktok" href="#" />
          <SocialIcon platform="instagram" href="#" />
          <SocialIcon platform="linkedin" href="#" />
        </div>

        {/* Links */}
        
      </div>
    </footer>
  );
};
