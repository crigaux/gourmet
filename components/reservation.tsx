"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Reservation() {
  return (
    <section id="reservation" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4 text-primary">
            Réservation
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Une expérience gastronomique vous attend
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-12 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-2xl">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-muted-foreground font-light mb-2">Téléphone</h3>
                <a href="tel:+33142657890" className="text-xl text-foreground hover:text-primary transition-colors">
                  +33 1 42 65 78 90
                </a>
              </div>

              <div>
                <h3 className="text-2xl text-muted-foreground font-light mb-2">Email</h3>
                <a href="mailto:contact@legourmet.fr" className="text-xl text-foreground hover:text-primary transition-colors">
                  contact@legourmet.fr
                </a>
              </div>

              <div>
                <h3 className="text-2xl text-muted-foreground font-light mb-2">Adresse</h3>
                <p className="text-xl text-foreground">15 Rue de la Paix</p>
                <p className="text-lg text-muted-foreground">75002 Paris, France</p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-muted-foreground font-light mb-4">Horaires</h3>
                <div className="space-y-2">
                  <p className="text-lg text-foreground">Mardi - Samedi</p>
                  <p className="text-base text-muted-foreground">12h00 - 14h00, 19h00 - 22h00</p>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="text-lg text-foreground">Dimanche</p>
                  <p className="text-base text-muted-foreground">12h00 - 14h00</p>
                </div>
                <div className="mt-4">
                  <p className="text-base text-primary">Fermé le lundi</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-12 border-t border-border">
            <Link href="tel:+33142657890">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-10 py-7 text-lg">
                Réserver par téléphone
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground font-light mt-6">
              Pour les groupes de plus de 8 personnes, merci de nous contacter directement
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
