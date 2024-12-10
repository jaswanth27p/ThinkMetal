module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "> 0%",
        "last 5 versions",
        "not dead", 
      ],
    },
  },
};
