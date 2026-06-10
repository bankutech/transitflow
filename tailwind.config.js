/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#0b0f1a',
        surface: '#111827',
        panel: '#1a2235',
        border: '#1f2d45',
        muted: '#64748b',
        faint: '#334155',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease both',
        'pulse-dot': 'pulseDot 1.5s infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(14px)' }, to: { opacity: 1, transform: 'none' } },
        pulseDot: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } },
      },
    },
  },
  plugins: [],
}

