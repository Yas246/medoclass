export interface YearData {
  id: number
  slug: string
  title: string
  description: string
  modules: Module[]
  resources: Resource[]
}

export interface Module {
  id: string
  name: string
  description?: string
  driveUrl?: string
  pdfUrl?: string
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'folder' | 'pdf' | 'link'
  url: string
}

export const yearsData: Record<string, YearData> = {
  '1ere-annee': {
    id: 1,
    slug: '1ere-annee',
    title: '1ère Année',
    description: 'Cours et ressources pour la première année de médecine. Découvrez les fondamentaux des sciences médicales : anatomie, biologie, chimie, et plus encore.',
    modules: [
      {
        id: 'anatomie',
        name: 'Anatomie',
        description: 'Introduction à l\'anatomie humaine',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'biologie',
        name: 'Biologie Cellulaire',
        description: 'Fondamentaux de la biologie cellulaire',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'biochimie',
        name: 'Biochimie',
        description: 'Structure et fonctions des biomolécules',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'histologie',
        name: 'Histologie',
        description: 'Étude des tissus biologiques',
        driveUrl: 'https://drive.google.com/',
      },
    ],
    resources: [
      {
        id: 'fiches-anatomie',
        title: 'Fiches de révision - Anatomie',
        description: 'Résumés complets du cours d\'anatomie',
        type: 'pdf',
        url: 'https://drive.google.com/',
      },
      {
        id: 'qcm-biologie',
        title: 'QCM - Biologie Cellulaire',
        description: 'Annales et exercices corrigés',
        type: 'link',
        url: 'https://drive.google.com/',
      },
    ],
  },
  '2eme-annee': {
    id: 2,
    slug: '2eme-annee',
    title: '2ème Année',
    description: 'Approfondissement des connaissances médicales : physiologie, microbiologie, parasitologie, et pharmacologie.',
    modules: [
      {
        id: 'physiologie',
        name: 'Physiologie',
        description: 'Fonctions normales de l\'organisme',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'microbiologie',
        name: 'Microbiologie',
        description: 'Étude des micro-organismes',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'parasitologie',
        name: 'Parasitologie',
        description: 'Parasites et maladies parasitaires',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'pharmacologie',
        name: 'Pharmacologie',
        description: 'Bases de la thérapeutique médicamenteuse',
        driveUrl: 'https://drive.google.com/',
      },
    ],
    resources: [
      {
        id: 'cours-physiologie',
        title: 'Cours complet - Physiologie',
        description: 'Support de cours détaillé',
        type: 'pdf',
        url: 'https://drive.google.com/',
      },
    ],
  },
  '3eme-annee': {
    id: 3,
    slug: '3eme-annee',
    title: '3ème Année',
    description: 'Sémiologie, pathologie et thérapeutique. Introduction à la clinique et aux maladies.',
    modules: [
      {
        id: 'semiologie',
        name: 'Sémiologie Médicale',
        description: 'Signes et symptômes des maladies',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'pathologie',
        name: 'Pathologie Générale',
        description: 'Mécanismes des maladies',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'therapeutique',
        name: 'Thérapeutique',
        description: 'Principes de traitement',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'radiologie',
        name: 'Radiologie',
        description: 'Imagerie médicale',
        driveUrl: 'https://drive.google.com/',
      },
    ],
    resources: [],
  },
  '4eme-annee': {
    id: 4,
    slug: '4eme-annee',
    title: '4ème Année',
    description: 'Médecine interne, chirurgie, pédiatrie. Rotation clinique approfondie.',
    modules: [
      {
        id: 'medecine-interne',
        name: 'Médecine Interne',
        description: 'Maladies des organes internes',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'chirurgie',
        name: 'Chirurgie',
        description: 'Principes et techniques chirurgicales',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'pediatrie',
        name: 'Pédiatrie',
        description: 'Médecine de l\'enfant',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'gynecologie',
        name: 'Gynécologie-Obstétrique',
        description: 'Santé de la femme et grossesse',
        driveUrl: 'https://drive.google.com/',
      },
    ],
    resources: [],
  },
  '5eme-annee': {
    id: 5,
    slug: '5eme-annee',
    title: '5ème Année',
    description: 'Spécialisation médicale. Orthopédie, ophtalmologie, ORL, psychiatrie et plus.',
    modules: [
      {
        id: 'orthopedie',
        name: 'Orthopédie',
        description: 'Appareil locomoteur',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'ophtalmologie',
        name: 'Ophtalmologie',
        description: 'Maladies des yeux',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'orl',
        name: 'ORL',
        description: 'Oto-rhino-laryngologie',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'psychiatrie',
        name: 'Psychiatrie',
        description: 'Santé mentale',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'dermatologie',
        name: 'Dermatologie',
        description: 'Maladies de la peau',
        driveUrl: 'https://drive.google.com/',
      },
    ],
    resources: [],
  },
  internat: {
    id: 6,
    slug: 'internat',
    title: 'Internat',
    description: 'Préparation au concours de l\'internat. Révision, annales et entraînement intensif.',
    modules: [
      {
        id: 'revision-generale',
        name: 'Révision Générale',
        description: 'Synthèse des 5 années',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'annales',
        name: 'Annales',
        description: 'Sujets des années précédentes',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'qcm-entrainement',
        name: 'QCM d\'entraînement',
        description: 'Exercices de préparation',
        driveUrl: 'https://drive.google.com/',
      },
      {
        id: 'cas-cliniques',
        name: 'Cas Cliniques',
        description: 'Études de cas pratiques',
        driveUrl: 'https://drive.google.com/',
      },
    ],
    resources: [
      {
        id: 'guide-concours',
        title: 'Guide du concours',
        description: 'Conseils et stratégie',
        type: 'pdf',
        url: 'https://drive.google.com/',
      },
    ],
  },
}
