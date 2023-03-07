/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'malangsatu': "url('/malangsatu.jpg')",
        'malangdua': "url('/malangdua.jpg')",
        'malangtiga': "url('/malangtiga.jpg')",
        'malangempat': "url('/malangempat.jpg')",
        'malanglima': "url('/malanglima.jpg')",
        'malangenam': "url('/malangenam.jpg')",
        'baksobakar': "url('/baksobakar.jpg')",
        'kripiktempe': "url('/kripiktempe.jpg')",
      }
    },
  },
  plugins: [],
}
