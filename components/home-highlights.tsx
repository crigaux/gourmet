"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HomeHighlights() {
  return (
    <div className="bg-background">
      {/* Introduction Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6 text-primary">
            Une Étoile Michelin
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Depuis 2018, Le Gourmet célèbre l'excellence de la cuisine française contemporaine
            dans un cadre élégant au cœur de Paris.
          </p>
        </div>
      </section>

      {/* Featured Dishes - Split Layout */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Image Left */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200"
                alt="Plats signature"
                fill
                className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Content Right */}
            <div className="flex flex-col justify-center space-y-6 py-8">
              <h3 className="text-4xl font-light tracking-wide text-primary">
                Notre Cuisine
              </h3>
              <p className="text-lg text-foreground/90 font-light leading-relaxed">
                Chaque assiette est une création unique, mariant tradition et innovation.
                Le Chef Laurent Dubois sublime les produits de saison dans des compositions
                visuellement époustouflantes et gustativement inoubliables.
              </p>
              <div>
                <Link href="/menu">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-8 py-6 text-base">
                    Découvrir la carte
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Content Left */}
            <div className="flex flex-col justify-center space-y-6 py-8 md:order-1">
              <h3 className="text-4xl font-light tracking-wide text-primary">
                Notre Cave
              </h3>
              <p className="text-lg text-foreground/90 font-light leading-relaxed">
                Une sélection exceptionnelle de plus de 300 références,
                soigneusement choisies pour accompagner chaque plat.
                Notre sommelier vous guide dans un voyage œnologique unique.
              </p>
              <div>
                <Link href="/about">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-8 py-6 text-base">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200"
                alt="Cave à vins"
                fill
                className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 px-6 bg-[#395144]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Chef Photo */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800"
                alt="Chef Laurent Dubois"
                fill
                className="object-cover opacity-90"
              />
            </div>

            {/* Chef Info */}
            <div className="md:col-span-2 space-y-6 py-8">
              <div>
                <h3 className="text-4xl font-light tracking-wide text-[#F8F6F3] mb-2">
                  Chef Laurent Dubois
                </h3>
                <p className="text-lg text-primary font-light">Étoilé Michelin</p>
              </div>
              <p className="text-lg text-[#F8F6F3]/90 font-light leading-relaxed">
                Formé auprès des plus grands noms de la gastronomie française,
                Laurent Dubois a développé une cuisine personnelle qui honore les produits
                d'exception tout en osant des associations audacieuses. Sa quête perpétuelle
                d'excellence et son respect des saisons font de chaque repas une expérience unique.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-normal px-8 py-6 text-base">
                  Notre histoire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light tracking-wide text-primary mb-4">
              Notre Univers
            </h3>
            <p className="text-xl text-muted-foreground font-light">
              Découvrez l'ambiance unique du Gourmet
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="relative h-[250px] overflow-hidden rounded group">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
                alt="Ambiance restaurant"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="relative h-[250px] overflow-hidden rounded group">
              <Image
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800"
                alt="Bar à cocktails"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="relative h-[250px] overflow-hidden rounded group">
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800"
                alt="Terrasse"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="relative h-[250px] overflow-hidden rounded group">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800"
                alt="Ambiance soir"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-8 py-6 text-base">
                Voir la galerie complète
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h3 className="text-5xl md:text-6xl font-light tracking-wide text-primary">
            Réservez Votre Table
          </h3>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Rejoignez-nous pour une expérience gastronomique inoubliable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/reservation">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-10 py-7 text-lg">
                Réserver maintenant
              </Button>
            </Link>
            <Link href="tel:+33142657890">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-normal px-10 py-7 text-lg">
                +33 1 42 65 78 90
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
