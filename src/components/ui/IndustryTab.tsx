interface IndustryTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const IndustryTab = ({ label, isActive, onClick }: IndustryTabProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-left text-lg font-medium transition-all duration-300 border-l-4 pl-6 py-2 w-full ${
        isActive
          ? "border-[#FF5733] text-white" // Warna aksen dari desain Figma
          : "border-zinc-800 text-zinc-500 hover:text-zinc-300"
      }`}
    >
      {label}
    </button>
  );
};
