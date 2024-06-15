/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('/images/poison-bg.jpg')",
        "music-page": "url('/images/b&w_stairs.jpg')",
        "about-page": "url('/images/pink_umbrella.jpg')",
      },
      backgroundSize: {
        "150": "150%",
        16: "4rem",
      },
      colors: {
        claraRed: "#be0a0a",
        claraBlue: "#659998",
        claraGrey: "#626564",
        claraOrange: "#FC702B",
        claraDarkBlue: "#08183B"
      }
    },
    fontFamily: {
      'mono': ['Courier Prime', 'monospace'],
      'voluta': ['Voluta Script Pro', 'serif'],
      'youtube': ['Youtube-noto', 'Roboto', 'sans-serif']
    }
  },
  plugins: [],
};
