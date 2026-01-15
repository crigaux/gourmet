import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { HomeHighlights } from "@/components/home-highlights"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Le Gourmet - Restaurant Gastronomique Étoilé Michelin à Paris",
  description: "Restaurant gastronomique étoilé Michelin à Paris. Cuisine française contemporaine par le Chef Laurent Dubois. Réservez votre table pour une expérience culinaire inoubliable.",
  openGraph: {
    title: "Le Gourmet - Restaurant Gastronomique Étoilé Michelin",
    description: "Cuisine française contemporaine par le Chef Laurent Dubois à Paris",
    type: "website",
    locale: "fr_FR",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HomeHighlights />
      <Footer />
    </main>
  )
}
