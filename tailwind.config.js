/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page': "url('https://static.wixstatic.com/media/a89751_80b8ced7eb9248cfb5c2ed3c4abe9f07~mv2.jpg/v1/fill/w_1600,h_1510,al_c,q_90,enc_auto/a89751_80b8ced7eb9248cfb5c2ed3c4abe9f07~mv2.jpg')",
      }
    },
  },
  plugins: [],
}
