import { Navigation } from "@/components/navigation"
import { Menu } from "@/components/menu"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Menu - Le Gourmet | Restaurant Gastronomique Paris",
  description: "Découvrez notre menu gastronomique. Entrées, plats et desserts raffinés préparés par notre Chef étoilé.",
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
