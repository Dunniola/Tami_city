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
        'primary': 'hsl(45, 100%, 70%)',
        'secondary': 'hsl(120, 50%, 20%) ',
        'tertiary' : "hsl(0, 0%, 255%)",
          "gold" : "hsl(45, 100%, 80%)"

        
      },
    
    },
  },
  plugins: [],
}