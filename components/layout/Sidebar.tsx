'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { GlassCard } from '@/components/ui/GlassCard'
import { articles } from '@/lib/data/articles'

export function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sidebarRef.current) {
      const cards = sidebarRef.current.querySelectorAll('.article-card')
      gsap.fromTo(
        cards,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        }
      )
    }
  }, [])

  const recentArticles = articles.slice(0, 3)

  return (
    <aside ref={sidebarRef} className="hidden lg:block w-full">
      <GlassCard>
        <h3 className="text-xl font-bold mb-4">Articles Récents</h3>
        <div className="space-y-4">
          {recentArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="article-card block p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <h4 className="font-semibold text-sm mb-1">{article.title}</h4>
              <p className="text-xs opacity-80 line-clamp-2">{article.description}</p>
            </Link>
          ))}
        </div>
      </GlassCard>
    </aside>
  )
}
