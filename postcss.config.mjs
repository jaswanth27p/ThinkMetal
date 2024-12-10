/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ["> 0%", "last 5 versions", "not dead"],
    },
  },
};

export default config;
