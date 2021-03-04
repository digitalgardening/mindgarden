/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {},
  plugins: [],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8080,
    hostname: "localhost",
    // open: "Chrome", // assumes you have chrome installed!
    hmrErrorOverlay: false,
  },
  buildOptions: {
    htmlFragments: true,
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2015",
  },
};
