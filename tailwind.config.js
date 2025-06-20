/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/kriditum_bg.jpg')",
        'eventsbg': "url('/images/event_bg.png')",
      },
    },
  },
  darkMode: 'className', // Enable dark mode using a class
  plugins: [nextui(), ]
}

