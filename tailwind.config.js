/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page': "url('/images/homepage.jpg')",
        'music-page': "url('/images/b&w_stairs.jpg')",
        'about-page': "url('/images/pink_umbrella.jpg')",
      }
    },
  },
  plugins: [],
}
