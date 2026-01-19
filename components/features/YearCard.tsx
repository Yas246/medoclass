'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

interface YearCardProps {
  year: number
  title: string
  description: string
  href: string
}

export function YearCard({ year, title, description, href }: YearCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (cardRef.current && glowRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.03,
        y: -8,
        rotationX: 5,
        rotationY: -5,
        duration: 0.4,
        ease: 'power2.out',
      })

      gsap.to(glowRef.current, {
        opacity: 1,
        scale: 1.2,
        duration: 0.4,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseLeave = () => {
    if (cardRef.current && glowRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.4,
        ease: 'power2.out',
      })

      gsap.to(glowRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      })
    }
  }

  const yearColors = {
    1: 'from-teal-400 to-cyan-500',
    2: 'from-coral-400 to-rose-500',
    3: 'from-yellow-400 to-orange-500',
    4: 'from-purple-400 to-pink-500',
    5: 'from-blue-400 to-indigo-500',
    6: 'from-green-400 to-emerald-500',
  }

  const gradientClass = yearColors[year as keyof typeof yearColors] || 'from-teal to-coral'

  return (
    <Link href={href} className="block">
      <div
        ref={cardRef}
        className="glass rounded-3xl p-6 h-full cursor-pointer relative overflow-hidden group"
        style={{ perspective: '1000px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-teal-500/20 to-coral-500/20" />

        {/* Glow effect */}
        <div
          ref={glowRef}
          className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-coral-500/20 rounded-3xl blur-2xl opacity-0 transition-opacity duration-500"
        />

        <div className="relative z-10">
          <div className="flex items-start space-x-4">
            {/* Animated year badge */}
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <span className="font-display font-bold text-2xl text-white">{year}</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-teal transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-teal/70 line-clamp-2">{description}</p>
            </div>
          </div>

          {/* Hover indicator */}
          <div className="mt-4 flex items-center text-teal opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
            <span className="text-sm font-semibold mr-2">Explorer</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
