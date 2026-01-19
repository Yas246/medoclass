"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { navigationData } from "@/lib/data/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );
    }
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (href: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpenDropdown(href);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-40 w-full">
        <div className="glass mx-4 mt-6 rounded-3xl px-8 py-5 border border-teal-500/20">
          <div className="flex items-center justify-between">
            {/* Logo with organic shape */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-coral rounded-organic animate-morph flex items-center justify-center shadow-glow-coral group-hover:shadow-glow-teal transition-all duration-500">
                  <span className="font-display font-bold text-xl text-white">
                    W
                  </span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-2xl gradient-text">
                  WICEN
                </span>
                <p className="text-xs text-secondary opacity-70 font-body">
                  Medical Education
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationData.map((item) => (
                <div key={item.href} className="relative">
                  {item.children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.href)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`font-body text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 ${
                          pathname?.startsWith(item.href)
                            ? "bg-gradient-to-r from-teal-500/20 to-coral-500/20 text-teal"
                            : "text-teal hover:bg-teal-500/10"
                        }`}
                      >
                        {item.label}
                        <svg
                          className="inline-block w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === item.href && (
                        <div
                          className="absolute top-full left-0 mt-2 w-56 dropdown-glass rounded-2xl py-2 z-50"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-3 text-sm font-body text-teal hover:bg-teal-500/20 transition-all duration-300"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-body text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                        pathname === item.href
                          ? "bg-gradient-to-r from-teal-500/20 to-coral-500/20 text-teal"
                          : "text-teal hover:bg-teal-500/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                className="lg:hidden p-3 glass rounded-xl hover:bg-teal-500/20 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
