/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        800: "800px",
        "3xl": "1600px",
        xxs: "400px",
      },
    },
  },
  plugins: [],
};
