import { Button } from "@/components/ui/Button";

export default function InfoPanel() {
  return (
    <aside className="sticky top-24 space-y-6 rounded-2xl border border-navy-950/10 p-6">
      <div>
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary-600">Adresse</h3>
        <p className="text-sm text-navy-950/80">Menzah 1, Tunis</p>
        <p className="text-sm text-navy-950/80">Charguia, Tunis</p>
      </div>
      <div>
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary-600">Téléphone</h3>
        <p className="text-sm text-navy-950/80">+216 00 000 000</p>
      </div>
      <div>
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary-600">Email</h3>
        <p className="text-sm text-navy-950/80">contact@startupvillage.tn</p>
      </div>
      <Button href="/contact" className="w-full">
        Réserver une visite
      </Button>
    </aside>
  );
}
