import type { Metadata } from "next";
import { Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["200", "600"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Le Gourmet - Restaurant Gastronomique Étoilé Michelin à Paris",
  description: "Restaurant gastronomique étoilé Michelin à Paris. Cuisine française contemporaine par le Chef Laurent Dubois. Réservez votre table pour une expérience culinaire inoubliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${poppins.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
