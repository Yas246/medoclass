'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { navigationData } from '@/lib/data/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (menuRef.current && overlayRef.current) {
      if (isOpen) {
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
        })
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.4,
          ease: 'power3.out',
        })
      } else {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
        })
        gsap.to(menuRef.current, {
          x: '100%',
          duration: 0.3,
          ease: 'power3.in',
        })
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40"
        style={{ opacity: 0 }}
        onClick={onClose}
      />
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm glass z-50 p-6"
        style={{ x: '100%' }}
      >
        <div className="flex justify-end mb-6">
          <button
            onClick={onClose}
            className="p-2"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="space-y-4">
          {navigationData.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <div className="space-y-2">
                  <div className="font-semibold text-lg">{item.label}</div>
                  <div className="pl-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block py-2 text-sm ${
                          pathname === child.href ? 'text-blue-600 font-medium' : ''
                        }`}
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-2 text-lg font-medium ${
                    pathname === item.href ? 'text-blue-600' : ''
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}
