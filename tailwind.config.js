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
        claroBlue: '#bbd0ff',
        light: '#f8f9fa',
        dark: '#343a40',
        rosita: '#ffd6ff',
        gris: '#46494c',
      }
    },
  },
  plugins: [],
}

