interface Pole {
  title: string;
  body: string;
  color: "green" | "blue" | "pink";
}

const POLES: Pole[] = [
  {
    title: "AI FIRST",
    color: "green",
    body: "Startup Village rassemble l'expertise de Medianet et Saphir Consult, deux acteurs majeurs du digital avec plus de 20 ans d'expérience internationale. Cette alliance permet d'offrir un accompagnement solide et global aux porteurs de projets technologiques.",
  },
  {
    title: "MEDIA LAB",
    color: "blue",
    body: "Grâce à notre partenariat avec Express FM, la première radio économique en Tunisie, MediaLab offre un environnement d'incubation unique pour les startups médias et journalisme : studios d'enregistrement, coaching média, data journalisme, et bien plus.",
  },
  {
    title: "FOOD LAB",
    color: "pink",
    body: "À travers notre collaboration avec CoChef, nous avons créé un laboratoire Foodtech où les entrepreneurs peuvent tester de nouveaux concepts culinaires, accueillir des chefs en résidence, et expérimenter des projets innovants dans l'alimentation.",
  },
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
        NOS PÔLES D&apos;EXPERTISE
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {POLES.map((pole) => (
          <div
            key={pole.title}
            className={`flex flex-col rounded-lg p-6 text-center text-white ${BACKGROUNDS[pole.color]}`}
          >
            <h3 className="font-display text-lg font-extrabold">{pole.title}</h3>
            <p className="mt-3 text-sm text-white/95">{pole.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
