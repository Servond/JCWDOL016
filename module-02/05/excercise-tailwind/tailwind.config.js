/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-color": "rgb(30, 30, 30)",
      },
    },
  },
  plugins: [],
};
