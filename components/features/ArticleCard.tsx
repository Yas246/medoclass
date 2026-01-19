'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { Badge } from '@/components/ui/Badge'

interface ArticleCardProps {
  title: string
  slug: string
  description: string
  date: string
  category: string
  image?: string
}

export function ArticleCard({ title, slug, description, date, category, image }: ArticleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  return (
    <Link href={`/articles/${slug}`}>
      <div
        ref={cardRef}
        className="glass rounded-2xl overflow-hidden h-full cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {image && (
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge>{category}</Badge>
            <span className="text-xs opacity-60">{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm opacity-80 line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  )
}
