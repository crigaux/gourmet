import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["200", "600"],
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
      <head>
        <link href="https://fonts.cdnfonts.com/css/marcovaldo" rel="stylesheet" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
