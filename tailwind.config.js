/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bluex: "#23A6F0",
    },
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    extend: {
      screens: {
        lg: "640px",
      },
    },
  },
  plugins: [],
};
