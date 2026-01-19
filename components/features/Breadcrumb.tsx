import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbProps {
  items?: Array<{
    label: string
    href: string
  }>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname()

  const defaultItems = [
    { label: 'Accueil', href: '/' },
  ]

  const breadcrumbItems = items || defaultItems

  return (
    <nav className="glass rounded-lg px-4 py-2 mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 mx-2 opacity-60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
            <Link
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
