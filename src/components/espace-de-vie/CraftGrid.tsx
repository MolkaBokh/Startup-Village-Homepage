import Image from "next/image";

interface CraftGridProps {
  title: string;
  images: string[];
  caption: string;
}

export default function CraftGrid({ title, images, caption }: CraftGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">{title}</h2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((src) => (
          <div key={src} className="relative h-40 overflow-hidden rounded-xl">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sv-grey">{caption}</p>
    </section>
  );
}
