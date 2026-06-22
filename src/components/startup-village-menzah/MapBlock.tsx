export default function MapBlock() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-16">
      <div className="overflow-hidden rounded-2xl border border-sv-navy/10">
        <iframe
          title="Startup Village Menzah - Carte"
          src="https://maps.google.com/maps?q=Startup%20Village%20Menzah%20Tunis&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="h-80 w-full"
          loading="lazy"
        />
      </div>
      <div className="absolute left-6 top-6 max-w-xs rounded-lg bg-white p-4 shadow-lg sm:left-10 sm:top-10">
        <h3 className="font-display font-bold text-sv-navy">Startup Village Menzah</h3>
        <p className="mt-1 text-sm text-sv-grey">
          Immeuble Essadi Tour C-D Mezzanine, 10 Décembre, Av. Habib Bourguiba, Tunis 1004
        </p>
        <p className="mt-2 text-sm font-semibold text-sv-navy">4,7 ★★★★★ (46)</p>
      </div>
    </section>
  );
}
