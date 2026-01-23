import { yearsCompleteData } from './years-content-complete'

export interface YearData {
  description: string
  modules: Module[]
  resources: Resource[]
}

export interface ExamLink {
  year: string
  title: string
  url: string
}

export interface Module {
  id: string
  name: string
  description?: string
  semester?: number
  driveUrl?: string
  courses?: { title: string; url: string; year?: string }[]
  exams?: ExamLink[]
  corrections?: ExamLink[]
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'folder' | 'pdf' | 'link'
  url: string
}

// Merge the extracted data with existing resources
const yearsData: Record<string, YearData> = {
  '1ere-annee': {
    description: 'Cours et ressources pour la première année de médecine. Découvrez les fondamentaux des sciences médicales : anatomie, biologie, chimie, et plus encore.',
    modules: yearsCompleteData['1ereannee'].modules,
    resources: yearsCompleteData['1ereannee'].resources || [],
  },
  '2eme-annee': {
    description: 'Approfondissement des connaissances médicales : physiologie, microbiologie, parasitologie, et pharmacologie.',
    modules: yearsCompleteData['2emeannee'].modules,
    resources: yearsCompleteData['2emeannee'].resources || [],
  },
  '3eme-annee': {
    description: 'Sémiologie, pathologie et thérapeutique. Introduction à la clinique et aux maladies.',
    modules: yearsCompleteData['3emeannee'].modules,
    resources: yearsCompleteData['3emeannee'].resources || [],
  },
  '4eme-annee': {
    description: 'Médecine interne, chirurgie, pédiatrie. Rotation clinique approfondie.',
    modules: yearsCompleteData['4emeannee'].modules,
    resources: yearsCompleteData['4emeannee'].resources || [],
  },
  '5eme-annee': {
    description: 'Spécialisation médicale. Orthopédie, ophtalmologie, ORL, psychiatrie et plus.',
    modules: yearsCompleteData['5emeannee'].modules,
    resources: yearsCompleteData['5emeannee'].resources || [],
  },
  internat: {
    description: 'Préparation au concours de l\'internat. Révision, annales et entraînement intensif.',
    modules: yearsCompleteData['internat'].modules,
    resources: yearsCompleteData['internat'].resources || [],
  },
}

export { yearsData }
