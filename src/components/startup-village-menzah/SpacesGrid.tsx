import Image from "next/image";

interface SpacesGridProps {
  title: string;
  images: string[];
}

export default function SpacesGrid({ title, images }: SpacesGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex justify-center">
        <span className="rounded-md bg-sv-magenta px-6 py-3 text-center font-display text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
          {title}
        </span>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5">
        {images.map((src) => (
          <div key={src} className="relative h-32 overflow-hidden rounded-lg sm:h-36">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
