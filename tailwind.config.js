/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          "desaturated-cyan": "hsl(167, 40%, 24%)",
          blue: "hsl(198, 62%, 26%)",
          "moderate-cyan": "hsl(167, 44%, 70%)",
          "sky-blue": "#3ebfff",
        },
        neutral: {
          "dark-blue": "hsl(212, 27%, 19%)",
          "grayish-blue": {
            100: "hsl(210, 4%, 67%)",
            200: "hsl(232, 10%, 55%)",
            300: "hsl(213, 9%, 39%)",
          },
        },
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
