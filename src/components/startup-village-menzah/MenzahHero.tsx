import Image from "next/image";
import Button from "@/components/espace-de-vie/Button";

interface MenzahHeroProps {
  image: string;
}

export default function MenzahHero({ image }: MenzahHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-8">
      <div className="relative h-[280px] w-full overflow-hidden sm:h-[420px]">
        <Image src={image} alt="Startup Village Menzah" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-sv-navy/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-display text-2xl font-extrabold sm:text-4xl">Startup Village Menzah</h1>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-white/90">
            L&apos;écosystème de l&apos;innovation, des médias et de l&apos;entrepreneuriat
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="blue">
              RÉSERVER UN ESPACE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
