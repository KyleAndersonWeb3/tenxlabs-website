export function BrandName({ className = "", uppercase = false }: { className?: string; uppercase?: boolean }) {
  const ten = uppercase ? "TEN" : "Ten";
  const x = uppercase ? "X" : "X";
  const labs = uppercase ? "LABS" : "Labs";

  return (
    <span className={className}>
      <span className="text-[#e80101]">{ten}</span>
      <span className="text-[#0057ff]">{x}</span>
      <span className="text-[#22c55e]">{labs}</span>
    </span>
  );
}
