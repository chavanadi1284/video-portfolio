/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#ffffff',
        brand: {
          red: '#8A0303',
          neon: '#FF003C',
          dark: '#0a0a0a',
        }
      },
      boxShadow: {
        'neon-red': '0 0 10px #FF003C, 0 0 20px #FF003C, 0 0 30px #FF003C',
        'neon-red-subtle': '0 0 5px #FF003C, 0 0 10px #FF003C',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 5px #FF003C, 0 0 10px #FF003C' },
          '50%': { opacity: .7, boxShadow: '0 0 15px #FF003C, 0 0 30px #FF003C' },
        }
      }
    },
  },
  plugins: [],
}
