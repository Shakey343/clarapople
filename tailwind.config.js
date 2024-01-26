/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('/images/homepage.jpg')",
        "music-page": "url('/images/b&w_stairs.jpg')",
        "about-page": "url('/images/pink_umbrella.jpg')",
      },
      backgroundSize: {
        "150": "150%",
        16: "4rem",
      },
      colors: {
        claraRed: "#be0a0acc",
        claraBlue: "#659998"
      }
    },
    fontFamily: {
      'mono': ['Courier Prime', 'monospace']
    }
  },
  plugins: [],
};
