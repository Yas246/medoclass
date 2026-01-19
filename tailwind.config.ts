import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        coral: {
          50: '#fff5f5',
          100: '#fee3e3',
          200: '#fcb8b8',
          300: '#f98d8d',
          400: '#ff6b6b',
          500: '#ff5252',
          600: '#e63946',
          DEFAULT: '#ff6b6b',
        },
        teal: {
          50: '#e6fffa',
          100: '#b2f5ea',
          200: '#81e6d9',
          300: '#4ecdc4',
          400: '#38b2ac',
          500: '#319795',
          DEFAULT: '#4ecdc4',
        },
        yellow: {
          DEFAULT: '#ffd93d',
        },
        deep: {
          teal: '#0d1b2a',
          blue: '#1b263b',
          darker: '#0a0f1c',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.7)',
          dark: 'rgba(15, 23, 42, 0.7)',
          border: 'rgba(78, 205, 196, 0.2)',
          shadow: 'rgba(255, 107, 107, 0.15)',
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'organic-gradient':
          'radial-gradient(circle at 20% 80%, rgba(78, 205, 196, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.15) 0%, transparent 50%)',
        'coral-gradient': 'linear-gradient(135deg, #ff6b6b, #ff8787)',
        'teal-gradient': 'linear-gradient(135deg, #4ecdc4, #38b2ac)',
        'duo-gradient': 'linear-gradient(135deg, #4ecdc4, #ff6b6b)',
      },
      animation: {
        'float': 'organicFloat 20s ease-in-out infinite',
        'particles': 'particles 30s linear infinite',
        'morph': 'borderMorph 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        organicFloat: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(2%, 2%) rotate(1deg)' },
          '50%': { transform: 'translate(-1%, 3%) rotate(-1deg)' },
          '75%': { transform: 'translate(3%, -2%) rotate(2deg)' },
        },
        particles: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100px)' },
        },
        borderMorph: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '50%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      boxShadow: {
        'glow-coral': '0 0 20px rgba(255, 107, 107, 0.5)',
        'glow-teal': '0 0 20px rgba(78, 205, 196, 0.5)',
        'glass': '0 8px 32px 0 rgba(255, 107, 107, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'dropdown': '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
