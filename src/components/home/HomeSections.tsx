import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const HP_IMG =
  "https://raw.githubusercontent.com/MolkaBokh/Startup-Village-Homepage/8dc0d9d4d803bb84e524e8bfa0dfd15c667f6050/assets/images/";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <Image
        src={`${HP_IMG}01-hero-reception.png`}
        alt="Accueil Startup Village"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1 className="font-display text-3xl font-extrabold sm:text-5xl">
          L&apos;un des plus grands espaces de coworking en Afrique !
        </h1>
        <p className="mt-4 text-lg text-white/90">Le village des créatifs responsables !</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Réserver une visite</Button>
          <Button href="#nos-univers" variant="outline" className="border-white text-white hover:text-white">
            Découvrir nos espaces
          </Button>
        </div>
      </div>
    </section>
  );
}

const UNIVERS = [
  { title: "Coworking", img: "02-univers-coworking.png", accent: "bg-brand-blue" },
  { title: "Bureaux privés", img: "03-univers-bureaux.png", accent: "bg-[#F5B325]" },
  { title: "Salles d'événements", img: "04-univers-evenements.png", accent: "bg-brand-pink" },
  { title: "Studio d'enregistrement", img: "05-univers-studio.png", accent: "bg-brand-green" },
];

export function UniversGrid() {
  return (
    <section id="nos-univers" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center font-display text-2xl font-extrabold text-brand-navy sm:text-3xl">
        Nos univers
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {UNIVERS.map((item) => (
          <div key={item.title} className="overflow-hidden rounded-2xl border border-brand-navy/10">
            <div className="relative h-40 w-full">
              <Image src={`${HP_IMG}${item.img}`} alt={item.title} fill className="object-cover" />
            </div>
            <div className={`px-4 py-3 text-sm font-semibold text-white ${item.accent}`}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const STORIES = [
  {
    img: "06-vie-cafeteria.png",
    title: "Un lieu de vie avant tout",
    text: "Au-delà du travail, Startup Village est un lieu où se créent des amitiés et des collaborations.",
  },
  {
    img: "07-vie-detente.png",
    title: "Des espaces pensés pour se ressourcer",
    text: "Terrasses, salons et espaces verts pour souffler entre deux réunions.",
    reverse: true,
  },
  {
    img: "08-vie-evenement.png",
    title: "Une communauté vivante",
    text: "Ateliers, conférences et soirées régulières rythment la vie du village.",
  },
];

export function StoryBlocks() {
  return (
    <section id="espace-de-vie" className="mx-auto max-w-6xl space-y-16 px-6 py-20">
      {STORIES.map((story) => (
        <div
          key={story.title}
          className={`flex flex-col items-center gap-8 md:flex-row ${story.reverse ? "md:flex-row-reverse" : ""}`}
        >
          <div className="relative h-64 w-full flex-1 overflow-hidden rounded-2xl md:h-80">
            <Image src={`${HP_IMG}${story.img}`} alt={story.title} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-brand-navy sm:text-2xl">{story.title}</h3>
            <p className="mt-3 text-brand-navy/70">{story.text}</p>
          </div>
        </div>
      ))}
      <div className="text-center">
        <Button href="/espace-de-vie" variant="outline">
          Découvrir l&apos;espace de vie
        </Button>
      </div>
    </section>
  );
}

export function PartnersWall() {
  return (
    <section className="bg-brand-cream px-6 py-16">
      <h2 className="text-center font-display text-xl font-bold text-brand-navy">Ils nous font confiance</h2>
      <div className="relative mx-auto mt-8 h-32 max-w-4xl">
        <Image src={`${HP_IMG}09-partners-logo-wall.png`} alt="Nos partenaires" fill className="object-contain" />
      </div>
    </section>
  );
}

const EVENTS = [
  { img: "10-events-atelier.png", tag: "Atelier", title: "Création d'entreprise 101" },
  { img: "11-events-networking-reception.png", tag: "Networking", title: "Soirée réseau mensuelle" },
  { img: "12-events-conference.png", tag: "Conférence", title: "Tendances tech & innovation" },
];

export function EventsGrid() {
  return (
    <section id="startups" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center font-display text-2xl font-extrabold text-brand-navy sm:text-3xl">
        Événements & startups
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {EVENTS.map((event) => (
          <div key={event.title} className="overflow-hidden rounded-2xl border border-brand-navy/10">
            <div className="relative h-40 w-full">
              <Image src={`${HP_IMG}${event.img}`} alt={event.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-pink">{event.tag}</span>
              <h3 className="mt-1 font-display font-bold text-brand-navy">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="bg-brand-navy px-6 py-20 text-center text-white">
      <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Prêt à rejoindre le village ?</h2>
      <p className="mx-auto mt-3 max-w-xl text-white/80">
        Contactez-nous pour planifier votre visite ou réserver votre espace.
      </p>
      <div className="mt-8">
        <Button href="/contact">Nous contacter</Button>
      </div>
    </section>
  );
}
