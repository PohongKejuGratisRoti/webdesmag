/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '20rem',
        '70': '30rem',
        '85' : '35rem',
        '169' : '52rem',
        '170' : '872px'
      }
    },
  },
  plugins: [],
}

