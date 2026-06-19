"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select } from "@/components/ui/Field";
import SpaceTypeCard from "./SpaceTypeCard";
import {
  VisitIcon,
  ClubIcon,
  OfficeIcon,
  MeetingRoomIcon,
  EventIcon,
  StockIcon,
  MarketIcon,
  InfoIcon,
  OtherIcon,
} from "./icons";

const REQUEST_TYPES = [
  { label: "Réserver une visite", icon: <VisitIcon /> },
  { label: "Devenir membre", icon: <ClubIcon /> },
  { label: "Louer un bureau privé", icon: <OfficeIcon /> },
  { label: "Réserver une salle", icon: <MeetingRoomIcon /> },
  { label: "Organiser un événement", icon: <EventIcon /> },
  { label: "Espace de stockage", icon: <StockIcon /> },
  { label: "Partenariat / marché", icon: <MarketIcon /> },
  { label: "Demande d'information", icon: <InfoIcon /> },
  { label: "Autre", icon: <OtherIcon /> },
];

const SITES = ["Menzah", "Charguia", "Je ne sais pas encore"];

export default function ContactForm() {
  const [requestType, setRequestType] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 text-center">
        <h3 className="font-display text-lg font-bold text-navy-950">Merci pour votre message !</h3>
        <p className="mt-2 text-sm text-navy-950/70">
          Notre équipe vous recontactera très rapidement.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <Label>Type de demande</Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
          {REQUEST_TYPES.map((type) => (
            <SpaceTypeCard
              key={type.label}
              icon={type.icon}
              label={type.label}
              selected={requestType === type.label}
              onClick={() => setRequestType(type.label)}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nom</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
        <div>
          <Label htmlFor="organization">Organisation</Label>
          <Input id="organization" name="organization" />
        </div>
        <div>
          <Label htmlFor="site">Site</Label>
          <Select id="site" name="site">
            {SITES.map((site) => (
              <option key={site} value={site}>
                {site}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="people">Nombre de personnes</Label>
          <Input id="people" name="people" type="number" min={1} />
        </div>
        <div>
          <Label htmlFor="date">Date souhaitée</Label>
          <Input id="date" name="date" type="date" />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} />
      </div>

      <label className="flex items-start gap-2 text-sm text-navy-950/70">
        <input type="checkbox" required className="mt-1" />
        J&apos;accepte que mes données soient utilisées pour traiter ma demande (RGPD).
      </label>

      <Button type="submit">Envoyer ma demande</Button>
    </form>
  );
}
