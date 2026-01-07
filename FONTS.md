# Guide des Polices - Le Gourmet

## Polices Utilisées

### 1. **Reklame Script** (Titres et éléments décoratifs)
- Style manuscrit influencé par la publicité print des années 40-50
- Apporte chaleur, convivialité et personnalité
- Usage: Titres (h1-h6), éléments de marque

**Utilisation:**
```tsx
<h1>Mon titre</h1>  // Automatiquement en Reklame Script
<span className="font-script">Texte en script</span>
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
| `.font-script` | Reklame Script | 400 | Titres décoratifs |
| `.font-poppins-light` | Poppins | 200 | Texte léger |
| `.font-poppins-semibold` | Poppins | 600 | Emphase |
| `.gradient-text` | - | - | Effet gradient sur texte |

## Hiérarchie Typographique

```
Titres (h1-h6)     → Reklame Script
Corps de texte     → Poppins Extra Light (200)
Emphase/Important  → Poppins Semi Bold (600)
```

## Équilibre Visuel

La combinaison de ces trois polices crée un équilibre parfait:
- **Reklame Script**: Chaleur et personnalité (années 40-50)
- **Poppins Extra Light**: Légèreté et modernité
- **Poppins Semi Bold**: Structure et lisibilité

Cette association évoque l'élégance intemporelle tout en restant contemporaine.
