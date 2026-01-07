"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Wine, Coffee, Cake, Sparkles, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MenuSection() {
  const menuCategories: Array<{
    icon: any
    title: string
    description: string
    featured?: boolean
    items: Array<{
      name: string
      price: string
      badge?: string
    }>
  }> = [
    {
      icon: Utensils,
      title: "Entrées",
      description: "Saveurs délicates pour commencer",
      featured: true,
      items: [
        { name: "Foie Gras Maison", price: "28€", badge: "Signature" },
        { name: "Carpaccio de Saint-Jacques", price: "32€" },
        { name: "Velouté de Champignons", price: "18€" },
      ]
    },
    {
      icon: Wine,
      title: "Plats Principaux",
      description: "Le cœur de notre cuisine",
      featured: true,
      items: [
        { name: "Bœuf Wagyu Grillé", price: "68€", badge: "Premium" },
        { name: "Homard Bleu Rôti", price: "75€" },
        { name: "Risotto aux Truffes", price: "48€" },
      ]
    },
    {
      icon: Cake,
      title: "Desserts",
      description: "La touche finale parfaite",
      items: [
        { name: "Soufflé au Chocolat", price: "16€" },
        { name: "Crème Brûlée Vanille", price: "14€" },
        { name: "Tarte Tatin Revisitée", price: "15€" },
      ]
    },
    {
      icon: Coffee,
      title: "Boissons",
      description: "Carte des vins et cocktails",
      items: [
        { name: "Château Margaux 2015", price: "320€" },
        { name: "Champagne Krug", price: "280€" },
        { name: "Cocktail Signature", price: "18€" },
      ]
    },
  ]

  return (
    <section id="menu" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 glass border border-border/50 rounded-full px-4 py-2 text-sm font-medium">
            <ChefHat className="w-4 h-4 text-secondary" />
            <span>Menu Gastronomique</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Notre <span className="gradient-text">Menu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de nos créations culinaires les plus appréciées
          </p>
        </div>

        {/* Bento Grid Layout - Asymmetric */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {/* Large featured card - Entrées */}
          <Card className="md:col-span-2 md:row-span-1 glass border-2 border-border/50 hover:border-secondary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl group-hover:scale-110 transition-transform">
                    <Utensils className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="mb-1">{menuCategories[0].title}</h3>
                    <p className="text-muted-foreground text-lg">{menuCategories[0].description}</p>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-luxury" />
              </div>
              <div className="space-y-4">
                {menuCategories[0].items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start pb-4 border-b border-border/30 last:border-0">
                    <div>
                      <span className="font-semibold text-2xl">{item.name}</span>
                      {item.badge && (
                        <span className="ml-2 text-sm px-3 py-1 rounded-full bg-luxury/20 text-luxury font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-secondary font-bold text-2xl">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tall card - Plats Principaux */}
          <Card className="md:row-span-2 glass border-2 border-border/50 hover:border-accent/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <Wine className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3>{menuCategories[1].title}</h3>
                  <p className="text-lg text-muted-foreground">{menuCategories[1].description}</p>
                </div>
              </div>
              <div className="space-y-6 flex-grow">
                {menuCategories[1].items.map((item) => (
                  <div key={item.name} className="group/item">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-2xl">{item.name}</span>
                      {item.badge && (
                        <span className="text-sm px-3 py-1 rounded-full bg-luxury/20 text-luxury font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-accent font-bold text-2xl">{item.price}</div>
                    <div className="h-px bg-border/30 mt-4" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Wide card - Desserts */}
          <Card className="md:col-span-2 glass border-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <Cake className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3>{menuCategories[2].title}</h3>
                  <p className="text-muted-foreground text-lg">{menuCategories[2].description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {menuCategories[2].items.map((item) => (
                  <div key={item.name} className="text-center p-4 rounded-xl hover:bg-secondary/5 transition-colors">
                    <div className="font-semibold text-xl mb-2">{item.name}</div>
                    <div className="text-primary font-bold text-xl">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Boissons - Full width card */}
        <Card className="glass border-2 border-border/50 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 max-w-7xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl">
                  <Coffee className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3>{menuCategories[3].title}</h3>
                  <p className="text-muted-foreground text-lg">{menuCategories[3].description}</p>
                </div>
              </div>
              <Button variant="outline" className="glass">Voir la carte complète</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {menuCategories[3].items.map((item) => (
                <div key={item.name} className="flex justify-between items-center p-4 rounded-xl hover:bg-secondary/5 transition-colors">
                  <span className="font-medium text-xl">{item.name}</span>
                  <span className="text-secondary font-bold text-xl">{item.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
