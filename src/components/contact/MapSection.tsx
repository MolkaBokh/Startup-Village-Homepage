export default function MapSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-navy-950/10 p-5">
          <h3 className="font-display font-bold text-navy-950">Site Menzah</h3>
          <p className="text-sm text-navy-950/70">Menzah 1, Tunis, Tunisie</p>
        </div>
        <div className="rounded-xl border border-navy-950/10 p-5">
          <h3 className="font-display font-bold text-navy-950">Site Charguia</h3>
          <p className="text-sm text-navy-950/70">Charguia, Tunis, Tunisie</p>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-navy-950/10">
        <iframe
          title="Startup Village - Carte"
          src="https://maps.google.com/maps?q=Startup%20Village%20Tunis&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-96 w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
