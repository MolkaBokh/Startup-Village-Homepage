import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenaires — Startup Village",
};

export default function PartenairesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-extrabold text-sv-navy sm:text-4xl">Partenaires</h1>
      <p className="mt-4 text-sv-grey">
        Cette page est en cours de préparation. Revenez bientôt pour découvrir nos partenaires.
      </p>
    </section>
  );
}
