/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        NETFLIX_BG: "url('./src/assets/Netflix_Bg.jpg')",
      },
    },
  },
  plugins: [],
};
