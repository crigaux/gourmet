import { Navigation } from "@/components/navigation"
import { Reservation } from "@/components/reservation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Réservation - Le Gourmet | Réserver une Table",
  description: "Réservez votre table au Gourmet. Restaurant gastronomique étoilé Michelin à Paris.",
  openGraph: {
    title: "Réservation - Le Gourmet",
    description: "Réservez votre table dans notre restaurant étoilé Michelin à Paris",
    type: "website",
    locale: "fr_FR",
  },
}

export default function ReservationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <Reservation />
      </div>
      <Footer />
    </main>
  )
}
