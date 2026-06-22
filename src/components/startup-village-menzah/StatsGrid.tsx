interface Stat {
  count: string;
  label: string;
  positions: string;
}

const STATS: Stat[] = [
  { count: "17", label: "bureaux privatifs", positions: "+120 positions" },
  { count: "2", label: "espaces coworking", positions: "+90 positions" },
  { count: "4", label: "salles de réunions", positions: "+40 positions" },
  { count: "1", label: "salle polyvalente", positions: "+70 positions" },
];

export default function StatsGrid() {
  return (
    <section className="bg-brand-cream px-6 py-16">
      <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">
        Un espace stratégique pour des usages pratiques
      </h2>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="font-display text-4xl font-extrabold text-sv-blue">{stat.count}</span>
            <span className="mt-1 text-sm font-semibold text-sv-navy">{stat.label}</span>
            <span className="mt-1 text-xs text-sv-grey">{stat.positions}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
