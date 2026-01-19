'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { YearCard } from '@/components/features/YearCard'

export default function MedoclassPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.year-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        }
      )
    }
  }, [])

  const years = [
    { year: 1, title: '1ère Année', description: 'Fondamentaux des sciences médicales', href: '/medoclass-oujda/1ere-annee' },
    { year: 2, title: '2ème Année', description: 'Physiologie et pathologie', href: '/medoclass-oujda/2eme-annee' },
    { year: 3, title: '3ème Année', description: 'Sémiologie et clinique', href: '/medoclass-oujda/3eme-annee' },
    { year: 4, title: '4ème Année', description: 'Médecine interne et chirurgie', href: '/medoclass-oujda/4eme-annee' },
    { year: 5, title: '5ème Année', description: 'Spécialités médicales', href: '/medoclass-oujda/5eme-annee' },
    { year: 6, title: 'Internat', description: 'Préparation au concours', href: '/medoclass-oujda/internat' },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-teal">
          Ressources Médicales
        </h1>
        <p className="text-lg text-teal/80 max-w-2xl mx-auto">
          Accédez à une collection complète de cours, articles et supports pédagogiques pour toutes les années d&apos;étude.
        </p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {years.map((yearData) => (
          <div key={yearData.year} className="year-card">
            <YearCard {...yearData} />
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold mb-3">Accès aux Ressources</h3>
        <p className="opacity-80 mb-4">
          Tous les cours sont disponibles sur Google Drive. Cliquez sur une année pour accéder aux modules et ressources correspondants.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center glass px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.773 6.62l3.76 6.574h3.76c3.384 0 3.76-.01 3.76-.087 0-.09-7.425-13.082-7.565-13.226-.05-.05-1.838-.09-3.745-.09zm-4.605 1.91L1.747 14.645l-.03.09H3.68c1.093 0 1.953-.02 1.953-.047 0-.068 5.318-9.437 5.376-9.499.03-.03-1.065 1.728-2.656 4.18zm.562 8.222l-2.42 4.282c-1.333 2.355-2.42 4.294-2.42 4.31 0 .02 2.4.03 5.333.03h5.333l2.42-4.282c1.333-2.355 2.42-4.294 2.42-4.31 0-.02-2.4-.03-5.333-.03H7.967z" />
            </svg>
            Google Drive
          </a>
        </div>
      </div>
    </div>
  )
}
