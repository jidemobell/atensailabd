/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'cyber-blue': '#00D2FF',
        'cyber-purple': '#8A2BE2',
        'dark-bg': '#0A0A0A',
        'dark-card': '#1A1A1A',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
