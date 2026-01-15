import { Navigation } from "@/components/navigation"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galerie - Le Gourmet | Photos Restaurant Gastronomique",
  description: "Découvrez notre restaurant en images. Plats, décoration et ambiance du Gourmet.",
  openGraph: {
    title: "Galerie - Le Gourmet",
    description: "Découvrez notre restaurant en images",
    type: "website",
    locale: "fr_FR",
  },
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
