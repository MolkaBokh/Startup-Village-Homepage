interface Stat {
  count: string;
  label: string;
  positions: string;
  icon: "office" | "coworking" | "meeting" | "hall";
}

const STATS: Stat[] = [
  { count: "17", label: "bureaux privatifs", positions: "+120 positions", icon: "office" },
  { count: "2", label: "espaces coworking", positions: "+90 positions", icon: "coworking" },
  { count: "4", label: "salles de réunions", positions: "+40 positions", icon: "meeting" },
  { count: "1", label: "salle polyvalente", positions: "+70 positions", icon: "hall" },
];

function Icon({ name }: { name: Stat["icon"] }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;
  switch (name) {
    case "office":
      return (
        <svg {...common} className="h-8 w-8">
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
        </svg>
      );
    case "coworking":
      return (
        <svg {...common} className="h-8 w-8">
          <circle cx="8" cy="9" r="3" />
          <circle cx="16" cy="10" r="2.5" />
          <path d="M2 20c0-3 2.7-5 6-5s6 2 6 5M13 20c0-2 1.8-3.5 4.5-3.5S22 18 22 20" />
        </svg>
      );
    case "meeting":
      return (
        <svg {...common} className="h-8 w-8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
        </svg>
      );
    case "hall":
      return (
        <svg {...common} className="h-8 w-8">
          <path d="M4 20V10l8-6 8 6v10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
  }
}

export default function StatsGrid() {
  return (
    <section className="bg-brand-cream px-6 py-16">
      <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">
        Un espace stratégique pour des usages pratiques
      </h2>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-10 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sv-blue/10 text-sv-blue">
              <Icon name={stat.icon} />
            </span>
            <span className="mt-3 font-display text-3xl font-extrabold text-sv-navy">{stat.count}</span>
            <span className="mt-1 text-sm font-semibold text-sv-navy">{stat.label}</span>
            <span className="mt-1 text-xs text-sv-grey">{stat.positions}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
