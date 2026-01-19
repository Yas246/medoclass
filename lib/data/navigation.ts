export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const navigationData: NavItem[] = [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'Articles',
    href: '/articles',
  },
  {
    label: 'À propos',
    href: '/about',
  },
  {
    label: 'Medoclass-Oujda',
    href: '/medoclass-oujda',
    children: [
      { label: '1ère Année', href: '/medoclass-oujda/1ere-annee' },
      { label: '2ème Année', href: '/medoclass-oujda/2eme-annee' },
      { label: '3ème Année', href: '/medoclass-oujda/3eme-annee' },
      { label: '4ème Année', href: '/medoclass-oujda/4eme-annee' },
      { label: '5ème Année', href: '/medoclass-oujda/5eme-annee' },
      { label: 'Internat', href: '/medoclass-oujda/internat' },
    ],
  },
]
