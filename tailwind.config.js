/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./**/*.{html,js,ts,jsx,tsx}",
    "index.html"
  ],
  theme: {
    extend: {
      spacing: {
        'some_key': '1.5rem',
      },
    },
  },
  plugins: [],
}

