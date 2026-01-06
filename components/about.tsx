"use client"

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4 text-primary">
            Notre Histoire
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            L'art de la gastronomie française
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-foreground/90 font-light">
            Fondé en 2015, <span className="text-foreground font-normal">Le Gourmet</span> est
            né de la passion du Chef Laurent Dubois pour la cuisine française contemporaine.
            Récompensé d'une étoile Michelin dès 2018, notre restaurant est devenu une référence
            parisienne de la haute gastronomie.
          </p>

          <p className="text-foreground/90 font-light">
            Notre philosophie : sublimer les produits d'exception dans des assiettes équilibrées
            et visuellement époustouflantes. Chaque plat raconte une histoire, celle de nos
            producteurs locaux, de nos savoir-faire traditionnels revisités, et de notre créativité
            sans limites.
          </p>

          <p className="text-foreground/90 font-light">
            Dans un cadre élégant et contemporain, nous vous invitons à vivre une expérience
            culinaire inoubliable où chaque détail compte.
          </p>
        </div>

        {/* Chef Section */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <h3 className="text-3xl font-light tracking-wide text-foreground mb-2">Chef Laurent Dubois</h3>
          <p className="text-base text-muted-foreground font-light">Étoilé Michelin</p>
        </div>
      </div>
    </section>
  )
}
