interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  color?: "yellow" | "slate";
}

export function Eyebrow({
  children,
  className = "",
  color = "yellow",
}: EyebrowProps) {
  const colorStyles = {
    yellow: "text-yellow-500",
    slate: "text-slate-400",
  };

  return (
    <span
      className={`inline-block text-sm font-semibold uppercase tracking-widest ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
}
