interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextArea?: boolean;
}

export const ContactInput = ({ label, isTextArea, ...props }: InputProps) => {
  const inputClass =
    "w-full bg-zinc-900 border border-zinc-800 text-white p-4 rounded-xl focus:outline-none focus:border-[#FF5733] transition-all placeholder:text-zinc-600";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-zinc-400 text-sm font-medium ml-1">{label}</label>
      {isTextArea ? (
        <textarea
          className={`${inputClass} resize-none`}
          rows={4}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
        />
      ) : (
        <input className={inputClass} {...props} />
      )}
    </div>
  );
};
