/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        surface: {
          light: '#fafbfc',
          card: 'rgba(255,255,255,0.72)'
        }
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(at 40% 20%, rgba(14,165,233,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99,102,241,0.1) 0px, transparent 45%), radial-gradient(at 0% 50%, rgba(14,165,233,0.08) 0px, transparent 50%)',
        'mesh-dark':
          'radial-gradient(at 40% 20%, rgba(14,165,233,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99,102,241,0.12) 0px, transparent 45%), radial-gradient(at 0% 80%, rgba(56,189,248,0.08) 0px, transparent 50%)'
      },
      boxShadow: {
        glass: '0 8px 32px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.35' },
          '50%': { transform: 'translateY(-24px) translateX(8px)', opacity: '0.85' }
        }
      },
      animation: {
        float: 'float 14s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
