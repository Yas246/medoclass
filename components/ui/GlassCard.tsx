'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils/cn'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'compact'
}

export function GlassCard({ children, className, hover = true, variant = 'default' }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (hover && cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.02,
        y: -5,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseLeave = () => {
    if (hover && cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        'glass',
        variant === 'default' ? 'p-6' : 'p-4',
        hover && 'cursor-pointer',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
