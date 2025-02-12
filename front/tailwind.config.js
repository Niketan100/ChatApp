/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}