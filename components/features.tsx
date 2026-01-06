"use client"

import { Calendar, ShoppingCart, BarChart3, Users, Zap, Shield } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Reservations",
      description: "AI-powered table management that optimizes seating and reduces wait times.",
      size: "large",
      gradient: "from-secondary/10 to-secondary/5",
    },
    {
      icon: ShoppingCart,
      title: "Order Management",
      description: "Streamline orders from kitchen to table with real-time tracking.",
      size: "small",
      gradient: "from-accent/10 to-accent/5",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Deep insights into sales, trends, and customer preferences.",
      size: "small",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Coordinate your team efficiently with scheduling and task management.",
      size: "medium",
      gradient: "from-luxury/10 to-luxury/5",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times for peak hour performance.",
      size: "small",
      gradient: "from-accent/10 to-accent/5",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance certifications.",
      size: "small",
      gradient: "from-secondary/10 to-secondary/5",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <span className="gradient-text">Everything you need</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Powerful Features for
            <br />
            <span className="gradient-text">Modern Restaurants</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with the latest technology to help you manage every aspect of your restaurant business.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Large Feature - Spans 2 columns */}
          <div className="md:col-span-2 glass-card rounded-2xl p-8 card-lift group">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 text-white">
                <Calendar className="w-7 h-7" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{features[0].title}</h3>
            <p className="text-muted-foreground mb-6">{features[0].description}</p>
            <div className="h-48 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">📅</div>
                <div className="text-sm text-muted-foreground">Interactive Calendar View</div>
              </div>
            </div>
          </div>

          {/* Medium Feature - Right side */}
          <div className="md:col-span-1 lg:col-span-2 md:row-span-2 glass-card rounded-2xl p-8 card-lift group">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-luxury to-luxury/50 text-white">
                <Users className="w-7 h-7" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{features[3].title}</h3>
            <p className="text-muted-foreground mb-6">{features[3].description}</p>
            <div className="space-y-3">
              {["Schedule shifts", "Track performance", "Team communication"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-luxury/5 to-transparent">
                  <div className="w-2 h-2 rounded-full bg-luxury" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 h-32 rounded-xl bg-gradient-to-br from-luxury/10 to-luxury/5 flex items-center justify-center">
              <div className="text-5xl">👥</div>
            </div>
          </div>

          {/* Small Features Grid */}
          <div className="glass-card rounded-2xl p-6 card-lift group">
            <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent/50 text-white w-fit mb-4">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{features[1].title}</h3>
            <p className="text-sm text-muted-foreground">{features[1].description}</p>
          </div>

          <div className="glass-card rounded-2xl p-6 card-lift group">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/50 text-white w-fit mb-4">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{features[2].title}</h3>
            <p className="text-sm text-muted-foreground">{features[2].description}</p>
          </div>

          <div className="glass-card rounded-2xl p-6 card-lift group">
            <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent/50 text-white w-fit mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{features[4].title}</h3>
            <p className="text-sm text-muted-foreground">{features[4].description}</p>
          </div>

          <div className="glass-card rounded-2xl p-6 card-lift group">
            <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 text-white w-fit mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{features[5].title}</h3>
            <p className="text-sm text-muted-foreground">{features[5].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
