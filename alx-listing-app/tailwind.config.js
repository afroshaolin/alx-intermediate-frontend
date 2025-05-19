/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
      fontFamily: {
        // Add your custom fonts here
      },
      spacing: {
        // Add your custom spacing here
      },
      screens: {
        // Add your custom breakpoints here
      },
    },
  },
  plugins: [],
}

