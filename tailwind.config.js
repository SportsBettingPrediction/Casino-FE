/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color":"#15161C",
        "profile-nav-bg":"#1D2027",
        "side-nav-bg":"#17191F",
        "top-nav-bg-left":"#1D2028",
        "text-color":"#516382"
      }
    },
  },
  plugins: [],
}