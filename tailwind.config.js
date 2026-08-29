/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#f8fafc',
          light: '#ffffff',
          subtle: '#f1f5f9',
          muted: '#eef2f6',
          card: '#ffffff'
        },
        brand: {
          navy: '#0f172a',
          slate: '#1e293b',
          muted: '#475569',
          light: '#64748b',
          faint: '#94a3b8',
          border: '#e2e8f0',
          borderSubtle: '#cbd5e1',
          accent: '#2563eb',
          accentPurple: '#6366f1',
          accentLight: '#eff6ff'
        }
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
  plugins: [],
}
