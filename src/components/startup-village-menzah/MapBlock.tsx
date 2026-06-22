export default function MapBlock() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 rounded-xl border border-sv-navy/10 p-5 text-center">
        <h3 className="font-display font-bold text-sv-navy">Startup Village Menzah</h3>
        <p className="text-sm text-sv-grey">Menzah 1, Tunis, Tunisie</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-sv-navy/10">
        <iframe
          title="Startup Village Menzah - Carte"
          src="https://maps.google.com/maps?q=Startup%20Village%20Menzah%20Tunis&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="h-80 w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
