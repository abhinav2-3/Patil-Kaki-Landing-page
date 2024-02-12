/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D9276",
        secondary: "#FFD93D",
        tertiary: "#747264",
      },
    },
  },
  plugins: [],
};
