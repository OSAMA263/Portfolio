/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "xs":"350px"
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            opacity: '0.2',
            transform: 'scale(0.95)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)'
          }
        }
      },
      animation: {
        'glow-slow': 'glow 3s ease-in-out infinite',
        'glow-slower': 'glow 4s ease-in-out infinite',
        'glow-fast': 'glow 2.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}