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
      fontFamily : {
        custom : ["Ubuntu, sans-serif"]
      },
      

      colors:{
        Primary : {
          veryDarkGray: "hsl(213, 96%, 18%)",
          blue: "hsl(243, 100%, 62%)",
          purplishBlue: "hsl(228, 100%, 84%)",
          lightBlue: "hsl(206, 94%, 87%)",
          red: "hsl(354, 84%, 57%)",
          darkBlue : "hsl(220, 100%, 15%)",
        },

      Neutral : {
        darkGray:"hsl(231, 11%, 63%)",
        veryLightGray: "hsl(229, 24%, 87%)",
        veryVeryLightGray: "hsl(217, 100%, 97%)",
        grayishWhite: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },


      }

    },
  },
  plugins: [],
}