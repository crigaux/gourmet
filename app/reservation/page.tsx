import { Navigation } from "@/components/navigation"
import { Reservation } from "@/components/reservation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Réservation - Le Gourmet | Réserver une Table",
  description: "Réservez votre table au Gourmet. Restaurant gastronomique étoilé Michelin à Paris.",
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
