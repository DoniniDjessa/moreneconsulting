🎨 1. Identité Visuelle (UI Analysis)
Palette de Couleurs
Fond Principal : #000000 (Sombre) / #FFFFFF (Clair) - Alternance par section.

Couleur d'Accent : #BFFF07 (Vert Fluorescent / Lime) — À ajuster selon la marque.

Texte : #FFFFFF sur fond sombre, #1A1A1A pour le corps de texte sur fond clair.

Bordures/Lignes : #262626 (Gris très foncé) pour les séparateurs subtils.

Typographie
Headings (H1-H4) : Style "Bold & Grotesque". Recommandation : Syne ou Archivo Black. Majuscules systématiques pour les titres de section.

Body : Inter ou Plus Jakarta Sans pour une lisibilité optimale.

Décorations : Utilisation de textes verticaux et de "Marquee" (textes défilants) pour dynamiser le layout.

Éléments Clés du Design
Boutons : Angles droits (Border-radius: 0) ou très légèrement arrondis. Effet de remplissage (fill) au survol.

Cartes (Cards) : Design minimaliste sans ombres portées, séparées par des bordures fines.

Images : Utilisation de masques ou de coins arrondis asymétriques.

🛠 2. Stack Technique Recommandée
Pour rester sur du Vanilla CSS tout en profitant de la puissance de Next.js, voici les outils à coupler :

Core Stack
Framework : Next.js 14+ (App Router).

Styling : CSS Modules (natif dans Next.js). Cela permet d'écrire du Vanilla CSS pur tout en évitant les conflits de noms de classes.

Icônes : lucide-react pour la légèreté et la flexibilité.

Animation & Interactivité
GSAP (GreenSock) : Indispensable pour les révélations au scroll (ScrollTrigger) et les animations de texte complexes du template.

Lenis Scroll : Pour le "Smooth Scrolling" fluide caractéristique des agences de design.

Framer Motion : Optionnel, mais excellent pour les micro-interactions simples (hover, toggle de menu).

🏗 3. Architecture des Composants (Next.js)
Plaintext
src/
├── app/
│   ├── layout.tsx       # Configuration Lenis & Polices
│   └── page.tsx         # Assemblage des sections
├── components/
│   ├── ui/              # Composants atomiques (Button, Badge, Input)
│   │   ├── Button.module.css
│   │   └── Button.tsx
│   ├── sections/        # Sections de la landing page
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   └── Portfolio.tsx
│   └── layout/          # Header, Footer, Navigation
└── styles/
    ├── globals.css      # Variables CSS (:root) et Reset
    └── tokens.css       # Définition des utilitaires (typography, spacing)
💡 4. Guide d'Implémentation CSS
Variables Globales (globals.css)
CSS
:root {
  --primary: #bfff07;
  --bg-dark: #000000;
  --bg-light: #ffffff;
  --text-main: #1a1a1a;
  --font-heading: 'Syne', sans-serif;
  --font-body: 'Inter', sans-serif;
  --transition-smooth: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
Optimisation des Performances
Images : Utiliser le composant <Image /> de Next.js avec le format WebP.

Fonts : Charger les polices via next/font/google pour éviter le Layout Shift.

Animations : Utiliser will-change sur les éléments animés par GSAP pour forcer l'accélération matérielle.

📌 5. Checklist de Développement
[ ] Configurer les variables de couleurs et typo dans globals.css.

[ ] Créer un hook useSmoothScroll avec Lenis.

[ ] Implémenter le Navbar avec effet de flou (Glassmorphism).

[ ] Créer le composant Marquee pour les logos partenaires.

[ ] Développer la section Pricing avec le switch Monthly/Yearly.

[ ] Ajouter les animations d'entrée avec GSAP ScrollTrigger.