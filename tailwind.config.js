/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        texts: ['var(--font-text)'],
        titles: ['var(--font-title)'],
      },
      colors: {
        violeta: '#C8B6FF',
        azulito: '#bbd0ff',
        light: '#f8f9fa',
        gris: '#46494c',
        dark: '#111111',
        darkPurple: '#44026c',
        darkLight: '#c5c3c6'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        degradado: 'radial-gradient(circle at 20.12% 114.09%, #f77cff 0, #bf6aff 25%, #8655d8 50%, #5040af 75%, #162d89 100%)'}
    },
  },
  plugins: [],
}

