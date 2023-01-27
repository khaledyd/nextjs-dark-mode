const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],

  theme: {
    extend: {
      colors: {
        "light-primary": "#fff",
        "light-secondary": "#FAFAFA",
        "dark-primary": "#0F172A",
        "dark-secondary" :"#252B3A",
      
    
  
      },
      fontFamily: {
        openSans: ['var(--openSans-font)', ...fontFamily.sans],
        roboto: ['var(--roboto-font)', ...fontFamily.sans],
        poppins: ['var(--poppins-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
