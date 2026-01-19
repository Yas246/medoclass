'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        rotate: theme === 'dark' ? 360 : -360,
        scale: 1.1,
        duration: 0.5,
        ease: 'back.out(1.7)',
      })
    }
  }

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        rotate: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  if (!mounted) {
    return (
      <div className="w-12 h-12 glass rounded-full animate-pulse" />
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-12 h-12 glass rounded-full flex items-center justify-center overflow-hidden group hover:shadow-glow-coral transition-all duration-300"
      aria-label="Toggle theme"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-coral-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {theme === 'dark' ? (
        <svg
          className="w-6 h-6 relative z-10 text-yellow"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 relative z-10 text-deep-teal"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}
