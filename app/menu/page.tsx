import { Navigation } from "@/components/navigation"
import { Menu } from "@/components/menu"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menu - Le Gourmet | Restaurant Gastronomique Paris",
  description: "Découvrez notre menu gastronomique. Entrées, plats et desserts raffinés préparés par notre Chef étoilé.",
  openGraph: {
    title: "Menu - Le Gourmet",
    description: "Découvrez notre menu gastronomique étoilé Michelin",
    type: "website",
    locale: "fr_FR",
  },
}

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <Menu />
      </div>
      <Footer />
    </main>
  )
}
