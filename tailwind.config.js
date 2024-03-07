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
        accent: '#89C149',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  daisyui: {
    themes: ["emerald"],
  },
  plugins: [require("daisyui")],

}

