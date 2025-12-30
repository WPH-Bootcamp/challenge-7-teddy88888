import { Facebook, Instagram, Linkedin, Video } from "lucide-react";

interface SocialIconProps {
  platform: "facebook" | "tiktok" | "instagram" | "linkedin";
  href: string;
}

const icons = {
  facebook: Facebook,
  tiktok: Video, // TikTok biasanya menggunakan ikon custom atau Video sebagai representasi
  instagram: Instagram,
  linkedin: Linkedin,
};

export const SocialIcon = ({ platform, href }: SocialIconProps) => {
  const IconComponent = icons[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#FF5733] hover:border-[#FF5733] transition-all duration-300 bg-zinc-900/50"
    >
      <IconComponent size={20} />
    </a>
  );
};
