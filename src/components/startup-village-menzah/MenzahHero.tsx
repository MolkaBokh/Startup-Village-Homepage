import Image from "next/image";
import Button from "@/components/espace-de-vie/Button";

interface MenzahHeroProps {
  image: string;
}

export default function MenzahHero({ image }: MenzahHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10">
      <div className="relative h-[420px] w-full overflow-hidden rounded-2xl sm:h-[520px]">
        <Image src={image} alt="Startup Village Menzah" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-sv-navy/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-display text-3xl font-extrabold sm:text-5xl">Startup Village Menzah</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Le lieu où innovation, médias et entrepreneuriat se rencontrent.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Réserver un espace
            </Button>
            <Button href="#espaces" variant="ghost">
              Découvrir nos espaces
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
