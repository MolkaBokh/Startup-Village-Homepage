import Link from "next/link";
import { MailIcon } from "@/components/SocialIcons";

const LINKS = [
  { label: "Voir nos événements", href: "/#startups" },
  { label: "Découvrir l'espace de vie", href: "/espace-de-vie" },
];

export default function SupportBox() {
  return (
    <div className="rounded-2xl border border-navy-950/10 bg-primary-50 p-6">
      <div className="mb-3 flex items-center gap-2 text-primary-700">
        <MailIcon />
        <span className="text-sm font-semibold">Besoin d&apos;aide rapidement ?</span>
      </div>
      <ul className="space-y-2 text-sm">
        {LINKS.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="font-medium text-primary-600 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
