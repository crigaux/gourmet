import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre Histoire - Le Gourmet | Restaurant Étoilé Michelin",
  description: "Découvrez l'histoire du Gourmet et du Chef Laurent Dubois, étoilé Michelin depuis 2018.",
  openGraph: {
    title: "Notre Histoire - Le Gourmet",
    description: "Découvrez l'histoire du Chef Laurent Dubois et son restaurant étoilé Michelin",
    type: "website",
    locale: "fr_FR",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </main>
  )
}
