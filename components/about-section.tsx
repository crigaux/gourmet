"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Zap, TrendingUp, Star } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Récompensé par 2 étoiles Michelin pour notre cuisine d'exception",
      color: "from-luxury/20 to-luxury/10"
    },
    {
      icon: Star,
      title: "Passion",
      description: "Chaque plat est une création unique de notre chef étoilé",
      color: "from-secondary/20 to-secondary/10"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Fusion entre tradition gastronomique et techniques modernes",
      color: "from-accent/20 to-accent/10"
    },
    {
      icon: Zap,
      title: "Expérience",
      description: "15 ans d'expertise culinaire au service de vos sens",
      color: "from-primary/20 to-primary/10"
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 glass border border-border/50 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-luxury" />
                <span>Notre Histoire</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                Une Cuisine <span className="gradient-text">Moderne</span>
                <br />& Raffinée
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg">
              <p className="text-muted-foreground leading-relaxed">
                Fondé en 2008, <span className="text-foreground font-semibold gradient-text">Le Gourmet</span> redéfinit
                l&apos;expérience gastronomique en alliant excellence culinaire et innovation tech-luxe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre chef étoilé, formé dans les plus grandes maisons,
                vous propose une cuisine raffinée qui célèbre les produits de saison
                avec une approche résolument moderne.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chaque plat est une œuvre d&apos;art, méticuleusement préparé avec des
                ingrédients sélectionnés auprès de producteurs locaux engagés.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="glass rounded-2xl p-6 border border-border/50 flex-1">
                <div className="text-3xl font-extrabold gradient-text mb-1">2★</div>
                <div className="text-sm text-muted-foreground">Michelin</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-border/50 flex-1">
                <div className="text-3xl font-extrabold gradient-text mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Années</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-border/50 flex-1">
                <div className="text-3xl font-extrabold gradient-text mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Plats</div>
              </div>
            </div>
          </div>

          {/* Right side - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="glass border-2 border-border/50 hover:border-secondary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className={`mb-4 p-4 bg-gradient-to-br ${feature.color} rounded-2xl w-fit group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
