"use client"

import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Owner, The Golden Spoon",
      content: "RestoSaaS transformed how we manage our restaurant. Reservations are seamless, and our staff loves the intuitive interface. Revenue is up 40% since we started.",
      rating: 5,
      image: "👩‍🍳",
    },
    {
      name: "Marcus Rodriguez",
      role: "Manager, Bella Italia",
      content: "The analytics dashboard gives us insights we never had before. We can predict busy hours, optimize staffing, and reduce waste. It's a game-changer.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Emily Thompson",
      role: "CEO, Thompson Restaurant Group",
      content: "Managing 12 locations was a nightmare until we found RestoSaaS. Now everything is centralized, efficient, and our teams are happier than ever.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "David Kim",
      role: "Chef & Owner, Seoul Kitchen",
      content: "Simple, powerful, and beautiful. The platform just works. Our order accuracy improved dramatically and customer satisfaction is at an all-time high.",
      rating: 5,
      image: "👨‍🍳",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <span className="gradient-text">Loved by restaurant owners</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            What Our Customers
            <br />
            <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of successful restaurants already using RestoSaaS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 card-lift relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-secondary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury text-luxury" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed relative z-10">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-mesh flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          {[
            { value: "500+", label: "Restaurants" },
            { value: "1M+", label: "Reservations" },
            { value: "99.9%", label: "Uptime" },
            { value: "4.9/5", label: "Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
