/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Roboto"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      colors: {
        primary: '#2B303A',
        secondary: '#D59D6D',
        productBorder: '#E8E8E8',
        productTitle: '#1A1A1A',
        productPrice: '#FF4B37',
      },
    },
  },
  plugins: [],
};
