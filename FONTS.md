# Guide des Polices - Le Gourmet

## Polices Utilisées

### 1. **Dancing Script** (Titres et éléments d'affichage)
- Police cursive élégante avec un véritable effet d'écriture manuscrite
- Style chaleureux et personnel, parfait pour les titres
- Usage: Titres (h1-h6), typographie d'affichage
- Poids: 600 (Semi Bold)

**Utilisation:**
```tsx
<h1>Mon titre</h1>  // Automatiquement en Dancing Script
<span className="font-display">Texte en display</span>
<span className="font-script">Texte manuscrit</span>
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
| `.font-display` | Dancing Script | 600 | Titres d'affichage |
| `.font-script` | Dancing Script | 600 | Écriture manuscrite |
| `.font-poppins-light` | Poppins | 200 | Texte léger |
| `.font-poppins-semibold` | Poppins | 600 | Emphase |
| `.gradient-text` | - | - | Effet gradient sur texte |

## Hiérarchie Typographique

```
Titres (h1-h6)     → Dancing Script (Cursive manuscrite)
Corps de texte     → Poppins Extra Light (200)
Emphase/Important  → Poppins Semi Bold (600)
```

## Équilibre Visuel

La combinaison de ces polices crée un équilibre parfait:
- **Dancing Script**: Écriture manuscrite élégante et personnelle, apportant chaleur et authenticité
- **Poppins Extra Light**: Légèreté géométrique et modernité pour une lisibilité optimale
- **Poppins Semi Bold**: Structure et lisibilité pour l'emphase

Cette association marie l'élégance personnelle d'une écriture manuscrite avec la modernité épurée d'une police géométrique.
