export const StatCard = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="text-center p-8 rounded-full border border-zinc-800 w-40 h-40 flex flex-col justify-center items-center">
    <span className="text-3xl font-bold text-white">{value}</span>
    <span className="text-xs text-zinc-500 uppercase tracking-widest">
      {label}
    </span>
  </div>
);
