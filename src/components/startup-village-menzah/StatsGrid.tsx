interface Stat {
  count: string;
  label: string;
  positions: string;
  icon: "office" | "coworking" | "meeting" | "hall";
}

const STATS: Stat[] = [
  { count: "17", label: "Bureaux privatifs", positions: "+120 positions", icon: "office" },
  { count: "2", label: "Espaces coworking", positions: "+90 positions", icon: "coworking" },
  { count: "4", label: "Salles de réunions", positions: "+40 positions", icon: "meeting" },
  { count: "1", label: "Salle polyvalente", positions: "+70 positions", icon: "hall" },
];

function Icon({ name }: { name: Stat["icon"] }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;
  switch (name) {
    case "office":
      return (
        <svg {...common} className="h-9 w-9">
          <path d="M7 10a5 5 0 0 1 10 0v2H7v-2Z" />
          <path d="M5 12h14l-1.5 9h-11L5 12Z" />
          <path d="M9 21v-3M15 21v-3" />
        </svg>
      );
    case "coworking":
      return (
        <svg {...common} className="h-9 w-9">
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "meeting":
      return (
        <svg {...common} className="h-9 w-9">
          <ellipse cx="12" cy="12" rx="8" ry="5" />
          <circle cx="4" cy="10" r="1.4" />
          <circle cx="20" cy="10" r="1.4" />
          <circle cx="8" cy="17" r="1.4" />
          <circle cx="16" cy="17" r="1.4" />
        </svg>
      );
    case "hall":
      return (
        <svg {...common} className="h-9 w-9">
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <path d="M7 8h6M7 11h4" />
          <circle cx="17" cy="17" r="2" />
          <path d="M17 19v2" />
        </svg>
      );
  }
}

export default function StatsGrid() {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">
        Un espace stratégique pour des usages pratiques
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-sv-grey">
        Ici, tout a été pensé pour accompagner les pratiques professionnelles d&apos;aujourd&apos;hui :
        hybrides, rapides et connectées.
      </p>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-10 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center text-sv-navy">
              <Icon name={stat.icon} />
            </span>
            <span className="mt-3 font-display text-2xl font-extrabold text-sv-navy">{stat.count}</span>
            <span className="mt-1 text-sm font-semibold text-sv-navy">{stat.label}</span>
            <span className="mt-1 text-xs text-sv-grey">{stat.positions}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
