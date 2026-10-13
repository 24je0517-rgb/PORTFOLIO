/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F7F4EF',
          alt: '#F1ECE4',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#FBF8F3',
        },
        border: {
          DEFAULT: '#E6DFD3',
          strong: '#D8CEBF',
        },
        themeText: {
          DEFAULT: '#2B2118',
          muted: '#6B5B4B',
          subtle: '#8C7B6A',
        },
        accent: {
          DEFAULT: '#A97F50',
          strong: '#8A6035',
          soft: '#F0E4D4',
        },
        secondary: {
          DEFAULT: '#2F2A8F',
          soft: '#EBEAFD',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      letterSpacing: {
        widestPlus: '0.2em'
      }
    },
  },
  safelist: [
    'text-violet-700', 'bg-violet-50', 'border-violet-200', 'bg-violet-700',
    'text-cyan-800', 'bg-cyan-50', 'border-cyan-200', 'bg-cyan-800',
    'text-emerald-800', 'bg-emerald-50', 'border-emerald-200', 'bg-emerald-800',
    'text-indigo-800', 'bg-indigo-50', 'border-indigo-200', 'bg-indigo-800',
  ],
  plugins: [],
}
