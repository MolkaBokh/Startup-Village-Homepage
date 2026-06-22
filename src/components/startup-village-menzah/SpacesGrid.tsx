import Image from "next/image";

interface SpacesGridProps {
  title: string;
  images: string[];
}

export default function SpacesGrid({ title, images }: SpacesGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">{title}</h2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
        {images.map((src) => (
          <div key={src} className="relative h-40 overflow-hidden rounded-xl">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
