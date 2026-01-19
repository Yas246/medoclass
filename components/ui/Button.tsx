'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils/cn'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export function Button({
  variant = 'glass',
  size = 'md',
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleMouseEnter = () => {
    const ref = href ? linkRef.current : buttonRef.current
    if (ref) {
      gsap.to(ref, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseLeave = () => {
    const ref = href ? linkRef.current : buttonRef.current
    if (ref) {
      gsap.to(ref, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      })
    }
  }

  const baseStyles = 'font-semibold rounded-lg transition-all duration-300'
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    glass: 'glass hover:bg-opacity-80',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if (href) {
    return (
      <a
        ref={linkRef}
        href={href}
        className={styles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
