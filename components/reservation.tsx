"use client"

import { useEffect } from "react"

export function Reservation() {
  useEffect(() => {
    // Auto-resize iframe based on content height
    const handleMessage = (event: MessageEvent) => {
      const iframe = document.getElementById('tablepost-widget') as HTMLIFrameElement
      if (!iframe) return

      if (event.data.type === 'resize') {
        iframe.style.height = event.data.height + 'px'
      }

      // Handle reservation success
      if (event.data.type === 'reservation_success') {
        console.log('Reservation created:', event.data.reservationId)
        // Optionally: show a confirmation message, trigger analytics, etc.
      }

      // Handle errors
      if (event.data.type === 'reservation_error') {
        console.error('Reservation error:', event.data.error)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <section id="reservation" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4 text-primary">
            Réservation
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Une expérience gastronomique vous attend
          </p>
        </div>

        {/* TablePost Widget */}
        <div id="tablepost-widget-wrapper" className="relative">
          {/* Loader */}
          <div 
            id="tablepost-loader" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <div className="border-4 border-muted border-t-primary rounded-full w-10 h-10 animate-spin mx-auto"></div>
            <p className="mt-4 text-muted-foreground font-light">Chargement du formulaire...</p>
          </div>

          {/* Widget iframe */}
          <iframe
            id="tablepost-widget"
            src="https://tablepost-khaki.vercel.app/widget/reservation/le-gourmet?theme=transparent&primary=D4AF37&shadow=none"
            width="100%"
            frameBorder="0"
            allow="clipboard-write"
            className="border-none rounded-xl min-h-[600px] opacity-0 transition-opacity duration-300"
            onLoad={(e) => {
              const iframe = e.currentTarget
              iframe.style.opacity = '1'
              const loader = document.getElementById('tablepost-loader')
              if (loader) loader.style.display = 'none'
            }}
          />
        </div>

        {/* Contact Info Below Widget */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24 text-center md:text-left">
            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-muted-foreground font-light mb-1">Téléphone</h3>
                <a href="tel:+33142657890" className="text-base text-foreground hover:text-primary transition-colors">
                  +33 1 42 65 78 90
                </a>
              </div>

              <div>
                <h3 className="text-lg text-muted-foreground font-light mb-1">Email</h3>
                <a href="mailto:contact@legourmet.fr" className="text-base text-foreground hover:text-primary transition-colors">
                  contact@legourmet.fr
                </a>
              </div>

              <div>
                <h3 className="text-lg text-muted-foreground font-light mb-1">Adresse</h3>
                <p className="text-base text-foreground">15 Rue de la Paix</p>
                <p className="text-sm text-muted-foreground">75002 Paris, France</p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-muted-foreground font-light mb-3">Horaires</h3>
                <div className="space-y-2">
                  <p className="text-base text-foreground">Mardi - Samedi</p>
                  <p className="text-sm text-muted-foreground">12h00 - 14h00</p>
                  <p className="text-sm text-muted-foreground">19h00 - 22h00</p>
                </div>
                <div className="space-y-2 mt-3">
                  <p className="text-base text-foreground">Dimanche</p>
                  <p className="text-sm text-muted-foreground">12h00 - 14h00</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-primary">Fermé le lundi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
