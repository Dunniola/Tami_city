/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/pages/Privacy/PrivacyComponent.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1871ff',
        'secondary': '#121212',
        'tetiary': '#FCFF53',
        'sorta-green': '#000F19',
        'sorta-blue': '#113C59'
        
      },
    },
  },
  plugins: [],
}