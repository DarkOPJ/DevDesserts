/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        creme: '#C73B0F',
        cremeDark: '#882304'
      }
    },
    fontFamily: {
      redhat: ['RedHatText', 'sans-serif']
    },
    screens: {
      sm: '375px', // Custom value for small screens
      md: '768px', // Default medium value
      lg: '1024px', // Default large value
      xl: '1280px', // Default extra-large value
      '2xl': '1440px', // Default 2x-large value
      '3xl': '1536px', // Default 3x-large value
    },
  },
  plugins: [],
}