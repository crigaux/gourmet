"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 px-6 py-32 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-wide leading-tight text-white">
            Le Gourmet
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 max-w-xl mx-auto font-light tracking-wide">
            Cuisine Gastronomique Française
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Link href="/reservation">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-normal px-10 py-7 text-lg rounded transition-all"
              >
                Réserver une table
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
