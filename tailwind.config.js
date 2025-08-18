
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/pages/Privacy/PrivacyComponent.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(40, 60%, 70%)",
        dimGold: "hsl(40, 60%, 50%)",
        secondary: "hsl(120, 60%, 25%)",
        dimGreen: "hsl(120, 60%, 14%)",
        darkGray : "hsl(0, 0%, 20%)"
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "serif"],
      },
    },
  },
  plugins: [],
};

