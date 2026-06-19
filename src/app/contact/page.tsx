import type { Metadata } from "next";
import SupportBox from "@/components/contact/SupportBox";
import InfoPanel from "@/components/contact/InfoPanel";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact — Startup Village",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
        <h1 className="font-display text-3xl font-extrabold text-navy-950 sm:text-4xl">
          Parlons de votre projet
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-navy-950/70">
          Visite, abonnement, bureau privé ou événement : dites-nous ce dont vous avez besoin.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <SupportBox />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[2fr_1fr]">
        <ContactForm />
        <InfoPanel />
      </section>

      <MapSection />
    </>
  );
}
