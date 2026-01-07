# Guide des Polices - Le Gourmet

## Polices Utilisées

### 1. **Great Vibes** (Titres et éléments d'affichage)
- Police calligraphique élégante, parfaite pour un accent raffiné
- Style sophistiqué idéal pour les établissements chics
- Usage: Titres (h1-h6), noms de plats, sections de menu
- Poids: 400 (Regular)
- **Important**: À utiliser uniquement pour les titres courts, pas pour les paragraphes

**Utilisation:**
```tsx
<h1>Mon titre</h1>  // Automatiquement en Great Vibes
<span className="font-display">Texte en display</span>
<span className="font-script">Nom de plat élégant</span>
```

### 2. **Poppins Extra Light** (Texte de corps)
- Police géométrique, moderne et épurée
- Poids: 200 (Extra Light)
- Usage: Texte principal, paragraphes

**Utilisation:**
```tsx
<p>Texte normal</p>  // Automatiquement en Poppins Extra Light
<span className="font-poppins-light">Texte léger</span>
```

### 3. **Poppins Semi Bold** (Éléments d'emphase)
- Même famille que Extra Light pour cohérence
- Poids: 600 (Semi Bold)
- Usage: Boutons, labels, textes importants

**Utilisation:**
```tsx
<strong>Texte important</strong>  // Automatiquement en Poppins Semi Bold
<span className="font-semibold">Texte semi-bold</span>
<span className="font-poppins-semibold">Texte semi-bold</span>
```

## Classes CSS Disponibles

| Classe | Police | Poids | Usage |
|--------|--------|-------|-------|
| `.font-display` | Great Vibes | 400 | Titres d'affichage |
| `.font-script` | Great Vibes | 400 | Calligraphie élégante |
| `.font-poppins-light` | Poppins | 200 | Texte léger |
| `.font-poppins-semibold` | Poppins | 600 | Emphase |
| `.gradient-text` | - | - | Effet gradient sur texte |

## Hiérarchie Typographique

```
Titres (h1-h6)     → Great Vibes (Calligraphique)
Corps de texte     → Poppins Extra Light (200)
Emphase/Important  → Poppins Semi Bold (600)
```

## Équilibre Visuel

La combinaison de ces polices crée un équilibre parfait:
- **Great Vibes**: Calligraphie élégante et raffinée, parfaite pour les établissements chics et les cartes des vins
- **Poppins Extra Light**: Légèreté géométrique et modernité pour une lisibilité optimale
- **Poppins Semi Bold**: Structure et emphase pour les éléments importants

Cette association marie l'élégance calligraphique d'un établissement raffiné avec la modernité épurée d'une typographie contemporaine.

## Recommandations d'Usage

- **Great Vibes**: Réservée aux titres courts, noms de sections, et noms de plats. Ne jamais l'utiliser pour de longs paragraphes.
- **Poppins Extra Light**: Pour tout le contenu textuel et les descriptions.
- **Poppins Semi Bold**: Pour mettre en valeur prix, labels, et éléments clés.
