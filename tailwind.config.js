/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poleno: ['Poleno', 'sans-serif'],
        Levnam: ['Levnam', 'serif'],
        Nirvana: ['Nirvana', 'serif'],
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
}
