interface Pole {
  title: string;
  color: "green" | "blue" | "pink";
}

const POLES: Pole[] = [
  { title: "Tech & Digital", color: "green" },
  { title: "Media Lab", color: "blue" },
  { title: "Food Lab", color: "pink" },
];

const BACKGROUNDS: Record<Pole["color"], string> = {
  green: "bg-brand-green",
  blue: "bg-brand-blue",
  pink: "bg-brand-pink",
};

export default function ExpertiseBlocks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">
        Nos pôles d&apos;expertise
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {POLES.map((pole) => (
          <div
            key={pole.title}
            className={`flex h-48 items-center justify-center rounded-2xl text-center ${BACKGROUNDS[pole.color]}`}
          >
            <h3 className="font-display text-2xl font-extrabold text-white">{pole.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
