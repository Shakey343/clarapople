/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('/src/assets/homepage.jpeg')",
        "music-page": "url('/src/assets/silhoutte_claz.jpeg')",
        "about-page": "url('/src/assets/b&w_sing.jpeg')",
      },
      backgroundSize: {
        "150": "150%",
        16: "4rem",
      },
      colors: {
        claraOldRed: "#be0a0a",
        claraBlue: "#659998",
        claraGrey: "#626564",
        claraOrange: "#FC702B",
        claraDarkBlue: "#08183B",
        claraRed: "#FF3720",
        claraUKTour: "#FFBD59",
        claraUKTourBg: "#00111D"
      }
    },
    fontFamily: {
      'mono': ['Courier Prime', 'monospace'],
      'voluta': ['Voluta Script Pro', 'serif'],
      'druk': ['Druk Wide', 'sans-serif'],
      'youtube': ['Youtube-noto', 'Roboto', 'sans-serif']
    }
  },
  plugins: [],
};
