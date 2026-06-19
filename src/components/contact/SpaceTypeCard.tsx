import { ReactNode } from "react";

interface SpaceTypeCardProps {
  icon: ReactNode;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function SpaceTypeCard({ icon, label, selected = false, onClick }: SpaceTypeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center text-sm font-medium transition ${
        selected
          ? "border-accent-500 bg-accent-500/5 text-accent-600"
          : "border-navy-950/10 text-navy-950/80 hover:border-primary-400"
      }`}
    >
      <span className={selected ? "text-accent-500" : "text-primary-500"}>{icon}</span>
      {label}
    </button>
  );
}
