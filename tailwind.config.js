// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        yesteryear: ['"Yesteryear"', "cursive"],
        molle: ['"Molle"', "cursive"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
