"use client"

import Image from "next/image"

export function Gallery() {
  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
      title: "Plats Signature"
    },
    {
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800",
      title: "Bar à Cocktails"
    },
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800",
      title: "Cave à Vins"
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
      title: "Décoration"
    },
    {
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800",
      title: "Terrasse"
    },
    {
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800",
      title: "Ambiance Soir"
    }
  ]

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4 text-primary">
            Galerie
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Découvrez notre univers
          </p>
        </div>

        {/* Gallery Grid - Bento Layout */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[200px]">
          {/* Image 1 - Large */}
          <div className="col-span-4 md:col-span-4 md:row-span-2 group relative overflow-hidden rounded opacity-90 hover:opacity-100 transition-all duration-300">
            <Image
              src={gallery[0].image}
              alt={gallery[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm font-light tracking-wide">{gallery[0].title}</p>
              </div>
            </div>
          </div>

          {/* Image 2 - Medium */}
          <div className="col-span-2 md:col-span-2 md:row-span-1 group relative overflow-hidden rounded opacity-90 hover:opacity-100 transition-all duration-300">
            <Image
              src={gallery[1].image}
              alt={gallery[1].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-light tracking-wide">{gallery[1].title}</p>
              </div>
            </div>
          </div>

          {/* Image 3 - Medium */}
          <div className="col-span-2 md:col-span-2 md:row-span-1 group relative overflow-hidden rounded opacity-90 hover:opacity-100 transition-all duration-300">
            <Image
              src={gallery[2].image}
              alt={gallery[2].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-light tracking-wide">{gallery[2].title}</p>
              </div>
            </div>
          </div>

          {/* Image 4 - Medium */}
          <div className="col-span-2 md:col-span-2 md:row-span-1 group relative overflow-hidden rounded opacity-90 hover:opacity-100 transition-all duration-300">
            <Image
              src={gallery[3].image}
              alt={gallery[3].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-light tracking-wide">{gallery[3].title}</p>
              </div>
            </div>
          </div>

          {/* Image 5 - Medium */}
          <div className="col-span-2 md:col-span-2 md:row-span-1 group relative overflow-hidden rounded opacity-90 hover:opacity-100 transition-all duration-300">
            <Image
              src={gallery[4].image}
              alt={gallery[4].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-light tracking-wide">{gallery[4].title}</p>
              </div>
            </div>
          </div>

          {/* Image 6 - Medium */}
          <div className="col-span-2 md:col-span-2 md:row-span-1 group relative overflow-hidden rounded opacity-90 hover:opacity-100 transition-all duration-300">
            <Image
              src={gallery[5].image}
              alt={gallery[5].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-light tracking-wide">{gallery[5].title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="mt-20 text-center border-t border-border pt-12">
          <p className="text-base text-muted-foreground font-light">
            Suivez-nous sur Instagram{" "}
            <a href="#" className="text-primary hover:opacity-70 transition-opacity">
              @legourmet_paris
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
