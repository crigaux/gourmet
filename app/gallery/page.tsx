import { Navigation } from "@/components/navigation"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Galerie - Le Gourmet | Photos Restaurant Gastronomique",
  description: "Découvrez notre restaurant en images. Plats, décoration et ambiance du Gourmet.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <Gallery />
      </div>
      <Footer />
    </main>
  )
}
