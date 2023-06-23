/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        ocuro: '##2F3240',
        gris: '#46494c',
        naranja: '#F28157',
        menta: '#BAD9BF',
        lila: '#ABA9D9',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}

