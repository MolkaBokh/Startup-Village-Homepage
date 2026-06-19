interface MagentaDividerProps {
  title: string;
  color?: "magenta" | "green";
  id?: string;
}

const BACKGROUNDS: Record<string, string> = {
  magenta: "bg-sv-magenta",
  green: "bg-sv-green",
};

export default function MagentaDivider({ title, color = "magenta", id }: MagentaDividerProps) {
  return (
    <div id={id} className={`px-6 py-10 text-center text-white ${BACKGROUNDS[color]}`}>
      <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{title}</h2>
    </div>
  );
}
