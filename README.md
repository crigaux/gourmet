# RestoSaaS Landing Page

A modern, tech-luxe landing page for a restaurant management SaaS platform. Built with Next.js, TypeScript, Tailwind CSS, and cutting-edge design principles.

## Design Philosophy

This landing page showcases a **contemporary tech-luxe** aesthetic inspired by modern SaaS leaders:

- **Minimalist & Clean**: Generous whitespace, breathable layouts
- **Glassmorphism**: Subtle backdrop-blur effects with transparency
- **Gradient Mesh**: Multi-color gradients (Blue → Green → Orange)
- **Smooth Animations**: Fluid micro-interactions and transitions
- **Bento Grid**: Asymmetric grid layouts for feature showcases

## Color Palette

```css
Primary:   #1E293B (Deep Blue - Trust & Professionalism)
Secondary: #10B981 (Emerald Green - Growth & Restaurant)
Accent:    #F97316 (Vibrant Orange - Energy & CTA)
Neutral:   #64748B (Slate Gray)
Background: #FAFAFA (Off-white)
Luxury:    #D4AF37 (Subtle Gold - Premium badges)
```

## Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Modern, accessible UI components
- **Lucide React** - Beautiful icon system
- **Prisma** - Next-generation ORM

## Key Features

- **Modern Navigation**: Glassmorphic navbar with scroll effects
- **Hero Section**: Gradient mesh background with floating orbs
- **Bento Grid Features**: Asymmetric layout showcasing platform capabilities
- **Pricing Cards**: Animated cards with glow effects and gradient borders
- **Testimonials**: Customer reviews with star ratings
- **CTA Footer**: Gradient-enhanced footer with final conversion push
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Performance**: Optimized animations and smooth 60fps transitions

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
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Custom CSS utilities
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── navigation.tsx      # Glassmorphic navbar
│   ├── hero.tsx           # Hero with gradient mesh
│   ├── features.tsx       # Bento grid features
│   ├── pricing.tsx        # Pricing cards with glow
│   ├── testimonials.tsx   # Customer testimonials
│   └── footer.tsx         # CTA footer
├── lib/
│   └── utils.ts           # Utility functions
└── tailwind.config.ts     # Tailwind configuration
```

## Custom Utilities

The project includes custom CSS utilities for modern effects:

- `.glass` - Glassmorphism effect
- `.glass-card` - Enhanced glass card
- `.gradient-mesh` - Multi-color gradient
- `.gradient-text` - Gradient text fill
- `.card-lift` - Hover lift animation
- `.mesh-bg` - Radial gradient mesh background
- `.glow-*` - Glow effects (accent, secondary, luxury)

## Design Inspirations

- [Stripe](https://stripe.com) - Minimalist tech aesthetic
- [Linear](https://linear.app) - Fluid animations
- [Vercel](https://vercel.com) - Contemporary design
- [Cal.com](https://cal.com) - Bento grid layouts
- [Resend](https://resend.com) - Elegant glassmorphism

## Typography

- **Font**: Inter (all weights 400-900)
- **Display**: Inter Display Extrabold for headlines
- **Body**: Inter Regular/Medium
- **Tracking**: Tight tracking (-tracking-tight) for impact

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code with ESLint

## Performance

- Sub-second page loads
- 60fps animations
- Optimized images and fonts
- Minimal JavaScript bundle
