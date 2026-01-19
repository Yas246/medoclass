'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

interface ResourceLinkProps {
  title: string
  description: string
  driveUrl: string
  icon?: string
}

export function ResourceLink({ title, description, driveUrl, icon }: ResourceLinkProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  return (
    <a
      ref={cardRef}
      href={driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass rounded-xl p-4 cursor-pointer">
        <div className="flex items-start space-x-4">
          {icon ? (
            <img src={icon} alt={title} className="w-10 h-10" />
          ) : (
            <div className="flex-shrink-0 w-10 h-10 glass rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold mb-1 truncate">{title}</h4>
            <p className="text-sm opacity-80 line-clamp-2">{description}</p>
          </div>
          <svg
            className="w-5 h-5 flex-shrink-0 opacity-60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
