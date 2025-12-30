import { Plus, Minus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: FaqItemProps) => (
  <div className="border-b border-zinc-800 py-6">
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between text-left"
    >
      <span className="text-xl font-bold text-white md:text-2xl">
        {question}
      </span>
      {isOpen ? (
        <Minus className="text-white" />
      ) : (
        <Plus className="text-white" />
      )}
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-zinc-400 text-lg leading-relaxed">{answer}</p>
    </div>
  </div>
);
