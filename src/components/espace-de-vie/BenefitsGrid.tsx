interface Benefit {
  title: string;
  icon: "flex" | "community" | "events" | "pin";
}

const BENEFITS: Benefit[] = [
  { title: "Flexibilité totale", icon: "flex" },
  { title: "Communauté engagée", icon: "community" },
  { title: "Événements réguliers", icon: "events" },
  { title: "Deux sites, une expérience", icon: "pin" },
];

function Icon({ name }: { name: Benefit["icon"] }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;
  switch (name) {
    case "flex":
      return (
        <svg {...common} className="h-6 w-6">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      );
    case "community":
      return (
        <svg {...common} className="h-6 w-6">
          <circle cx="8" cy="9" r="3" />
          <circle cx="16" cy="10" r="2.5" />
          <path d="M2 20c0-3 2.7-5 6-5s6 2 6 5M13 20c0-2 1.8-3.5 4.5-3.5S22 18 22 20" />
        </svg>
      );
    case "events":
      return (
        <svg {...common} className="h-6 w-6">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} className="h-6 w-6">
          <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
  }
}

export default function BenefitsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">
        Pourquoi choisir Startup Village ?
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title} className="flex flex-col items-center gap-3 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sv-blue/10 text-sv-blue">
              <Icon name={benefit.icon} />
            </span>
            <p className="text-sm font-semibold text-sv-navy">{benefit.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
