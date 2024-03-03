/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6C22',
        secondary: '#2e355a',
      }
    },
  },
  daisyui: {
    themes: ["emerald"],
  },
  plugins: [require("daisyui")],
}

