# WICEN - Plateforme Éducative Médicale

Plateforme éducative moderne pour les étudiants en médecine au Maroc, construite avec Next.js, TypeScript, Tailwind CSS et GSAP.

## 🎨 Design System

Ce projet utilise un design **Glassmorphism** moderne avec :
- Thème clair/sombre avec persistance
- Effets de verre flouté (backdrop-filter)
- Arrière-plan animé avec gradient
- Animations fluides avec GSAP
- Design responsive (mobile-first)

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Thèmes**: next-themes
- **Déploiement**: Vercel

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Démarrer la production
npm start
```

## 📁 Structure du Projet

```
wicen-nextjs/
├── app/                    # App Router
│   ├── (main)/            # Routes principales
│   │   ├── page.tsx       # Page d'accueil
│   │   ├── about/         # À propos
│   │   ├── articles/      # Articles
│   │   └── medoclass-oujda/ # Cours par année
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Styles globaux
├── components/
│   ├── ui/                # Composants UI réutilisables
│   ├── layout/            # Header, Footer, etc.
│   └── features/          # Composants métier
├── lib/
│   ├── data/              # Données statiques
│   └── utils/             # Utilitaires
└── public/                # Assets statiques
```

## 🎯 Fonctionnalités

- ✅ Page d'accueil avec navigation vers les années d'étude
- ✅ Section articles avec contenu éducatif
- ✅ Cours organisés par année (1ère à 5ème année + internat)
- ✅ Thème clair/sombre avec toggle
- ✅ Animations GSAP fluides
- ✅ Design responsive
- ✅ Navigation mobile
- ✅ Glassmorphism moderne

## 📝 Pages

### Page d'accueil (`/`)
- Hero section avec présentation WICEN
- Grille des années d'étude
- Articles récents

### Articles (`/articles`)
- Liste de tous les articles
- Pages individuelles avec contenu complet
- Catégories : Éthique, Bien-être, Neuroscience, Méthodologie

### Medoclass-Oujda (`/medoclass-oujda`)
- Présentation des cours
- Navigation vers chaque année
- Liens vers Google Drive

### Années (`/medoclass-oujda/[year]`)
- Modules par année
- Liens vers les ressources
- Informations pratiques

### À Propos (`/about`)
- Mission et valeurs
- Description des services

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `app/globals.css` et `tailwind.config.ts`.

### Glassmorphism
L'effet glass est défini dans la classe `.glass` dans `globals.css` :
- Background semi-transparent
- Backdrop blur
- Border subtile
- Ombre portée

### Animations
Les animations GSAP sont configurées dans chaque composant client. Pour ajuster :
- Modifier la durée (`duration`)
- Changer l'easing function
- Ajuster le stagger pour les animations en cascade

## 🚢 Déploiement

Ce projet est optimisé pour Vercel :

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## 📊 Performance

- Optimisé pour Next.js 14 avec App Router
- Images optimisées avec next/image
- Code splitting automatique
- GSAP optimisé avec tree-shaking

## 🤝 Contribution

Ce projet est maintenu pour les étudiants en médecine. Pour contribuer :
1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Push et créer un Pull Request

## 📄 Licence

© 2024 WICEN - Tous droits réservés

## 🎓 Remerciements

- Construit avec Next.js et TypeScript
- Design inspiré par le glassmorphism moderne
- Animations fluides avec GSAP
