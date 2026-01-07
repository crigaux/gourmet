# Le Gourmet - Restaurant Website

A sophisticated, elegant website for Le Gourmet, a fine French restaurant. Built with Next.js, TypeScript, Tailwind CSS, and modern design principles.

## Design Philosophy

This website showcases a **refined, elegant** aesthetic appropriate for a high-end French restaurant:

- **Minimalist & Elegant**: Clean layouts with generous whitespace
- **Typography-First**: Beautiful font pairings (Great Vibes + Poppins)
- **Image-Focused**: Gallery showcasing culinary artistry
- **Warm & Inviting**: Sophisticated color palette with golden accents
- **Mobile-First**: Responsive design across all devices

## Color Palette

```css
Primary:   Golden/Amber tones - Warmth & Luxury
Background: Dark charcoal - Elegance & Sophistication
Foreground: Off-white - Readability
Accents:   Subtle gold highlights - Premium feel
```

## Typography

- **Display Font**: Great Vibes - Elegant script for the restaurant name
- **Body Font**: Poppins - Clean, modern, highly readable
- **Weights**: Light (300) and Regular (400) for refined appearance

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Modern, accessible UI components
- **Lucide React** - Beautiful icon system

## Key Sections

- **Navigation**: Clean header with smooth scroll navigation
- **Hero Section**: Full-screen welcome with restaurant name in Great Vibes
- **Menu Section**: Elegant presentation of culinary offerings
- **Gallery**: Visual showcase of dishes and ambiance
- **Reservation**: Contact information and booking details
- **Footer**: Restaurant branding with Great Vibes font

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
resto-site/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main restaurant page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── navigation.tsx      # Site navigation
│   ├── hero.tsx            # Hero section
│   ├── menu.tsx            # Menu display
│   ├── gallery.tsx         # Photo gallery
│   ├── reservation.tsx     # Reservation/contact info
│   └── footer.tsx          # Site footer
├── lib/
│   └── utils.ts            # Utility functions
└── tailwind.config.ts      # Tailwind configuration
```

## Restaurant Information

**Le Gourmet**
- Address: 15 Rue de la Paix, 75002 Paris, France
- Phone: +33 1 42 65 78 90
- Email: contact@legourmet.fr

**Hours:**
- Tuesday - Saturday: 12:00 - 14:00, 19:00 - 22:00
- Sunday: 12:00 - 14:00
- Closed Monday

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code with ESLint

## Performance

- Optimized images and fonts
- Mobile-first responsive design
- Fast page loads
- Smooth scrolling navigation
