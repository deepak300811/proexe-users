module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",

        ModalCustom: "minmax(100px,200px) 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
