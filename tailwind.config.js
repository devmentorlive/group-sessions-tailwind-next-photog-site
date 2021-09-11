module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      fontFamily: {
        serif: ["ff-more-web-pro"],
      },
      colors: {
        gray: {
          50: "#f8f9f8",
          100: "#f1f2f2",
          200: "#dddfde",
          300: "#c9cbca",
          400: "#a0a4a3",
          500: "#777d7b",
          600: "#6b716f",
          700: "#595e5c",
          800: "#474b4a",
          900: "#3a3d3c",
        },
        brown: {
          50: "#fbf9f8",
          100: "#f8f3f1",
          200: "#ece1db",
          300: "#e1cfc6",
          400: "#cbab9b",
          500: "#b48770",
          600: "#a27a65",
          700: "#876554",
          800: "#6c5143",
          900: "#584237",
        },
        black: {
          50: "#f4f4f4",
          100: "#e8e9ea",
          200: "#c6c8c9",
          300: "#a4a6a9",
          400: "#606469",
          500: "#1c2128",
          600: "#191e24",
          700: "#15191e",
          800: "#111418",
          900: "#0e1014",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-hamburgers")],
};
