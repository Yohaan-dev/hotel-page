/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "478px",
        md: "768px",
        lg: "1080px",
        xl: "1440px"
      }
    },
  },
  plugins: [],
}