import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Notre Histoire - Le Gourmet | Restaurant Étoilé Michelin",
  description: "Découvrez l'histoire du Gourmet et du Chef Laurent Dubois, étoilé Michelin depuis 2018.",
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
