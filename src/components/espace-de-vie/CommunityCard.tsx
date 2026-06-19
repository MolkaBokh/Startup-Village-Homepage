import Image from "next/image";

interface CommunityCardProps {
  image: string;
  alt: string;
  color?: "green" | "blue" | "magenta" | "navy";
  title: string;
  body: string;
}

const COLORS: Record<string, string> = {
  green: "text-sv-green",
  blue: "text-sv-blue",
  magenta: "text-sv-magenta",
  navy: "text-sv-navy",
};

export default function CommunityCard({ image, alt, color = "navy", title, body }: CommunityCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sv-navy/10">
      <div className="relative h-40 w-full">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className={`font-display font-bold ${COLORS[color]}`}>{title}</h3>
        <p className="mt-1 text-sm text-sv-grey">{body}</p>
      </div>
    </div>
  );
}
