"use client"

export function Menu() {
  const menuCategories = [
    {
      name: "Entrées",
      dishes: [
        {
          name: "Tartare de Saumon",
          description: "Saumon frais, avocat, citron vert et coriandre",
          price: "24€"
        },
        {
          name: "Foie Gras Mi-Cuit",
          description: "Accompagné de pain brioché et chutney de figues",
          price: "28€"
        },
        {
          name: "Carpaccio de Saint-Jacques",
          description: "Huile de truffe, parmesan et roquette",
          price: "26€"
        }
      ]
    },
    {
      name: "Plats",
      dishes: [
        {
          name: "Magret de Canard",
          description: "Sauce au miel et épices, légumes de saison",
          price: "38€"
        },
        {
          name: "Bar de Ligne",
          description: "Risotto crémeux aux champignons sauvages",
          price: "42€"
        },
        {
          name: "Bœuf Wagyu",
          description: "Jus au vin rouge, purée de pommes de terre truffée",
          price: "56€"
        }
      ]
    },
    {
      name: "Desserts",
      dishes: [
        {
          name: "Soufflé au Chocolat",
          description: "Cœur coulant, glace vanille Bourbon",
          price: "16€"
        },
        {
          name: "Tarte Tatin",
          description: "Pommes caramélisées, crème fraîche épaisse",
          price: "14€"
        },
        {
          name: "Crème Brûlée",
          description: "À la vanille de Madagascar",
          price: "12€"
        }
      ]
    }
  ]

  return (
    <section id="menu" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4 text-primary">
            Notre Carte
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Cuisine française gastronomique
          </p>
        </div>

        {/* Menu List */}
        <div className="space-y-20">
          {menuCategories.map((category, idx) => (
            <div key={idx}>
              {/* Category Title */}
              <h3 className="mb-10 text-center text-5xl">
                {category.name}
              </h3>

              {/* Dishes List */}
              <div className="space-y-10">
                {category.dishes.map((dish, dishIdx) => (
                  <div key={dishIdx} className="border-b border-border pb-8 last:border-0">
                    <div className="flex justify-between items-baseline mb-3 gap-4">
                      <h4 className="text-xl font-poppins-semibold text-foreground">
                        {dish.name}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-border/50 mx-3 mb-1" />
                      <span className="text-xl font-poppins-semibold text-primary whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Menu Note */}
        <div className="mt-20 text-center border-t border-border pt-12">
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            <span className="text-foreground">Menu Dégustation</span> — 5 plats — 85€
          </p>
          <p className="text-base text-muted-foreground font-light mt-2">
            <span className="text-foreground">Accord Mets & Vins</span> — +45€
          </p>
        </div>
      </div>
    </section>
  )
}
