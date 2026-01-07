"use client"

import { Instagram, Facebook, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const footerLinks = {
    Navigation: [
      { label: "Menu", href: "/menu" },
      { label: "Réservation", href: "/reservation" },
      { label: "Notre Histoire", href: "/about" },
      { label: "Galerie", href: "/gallery" },
    ],
    Contact: [
      { label: "15 Rue de la Paix, Paris", href: "#" },
      { label: "+33 1 42 65 78 90", href: "tel:+33142657890" },
      { label: "contact@legourmet.fr", href: "mailto:contact@legourmet.fr" },
    ],
    Horaires: [
      { label: "Mar-Sam: 12h-14h, 19h-22h", href: "#" },
      { label: "Dimanche: 12h-14h", href: "#" },
      { label: "Fermé le lundi", href: "#" },
    ],
  }

  return (
    <footer className="border-t border-[#4A6B5A] bg-[#395144]">
      <div className="container px-6 py-16 mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-4xl font-script text-primary">Le Gourmet</span>
            </Link>
            <p className="text-base text-[#F8F6F3]/80 leading-relaxed mb-6 font-light">
              Restaurant gastronomique étoilé Michelin. Cuisine française contemporaine au cœur de Paris.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                className="text-[#F8F6F3]/80 hover:text-primary transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                className="text-[#F8F6F3]/80 hover:text-primary transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@legourmet.fr"
                className="text-[#F8F6F3]/80 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xl font-light tracking-wide mb-4 text-[#F8F6F3]">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-[#F8F6F3]/80 hover:text-primary transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A6B5A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-[#F8F6F3]/70 font-light">
            <p>&copy; 2026 Le Gourmet. Tous droits réservés.</p>
            <p>Créé avec passion à Paris</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
