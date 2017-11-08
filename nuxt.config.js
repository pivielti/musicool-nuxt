/*
 * The nuxt.config.js file contains your Nuxt.js custom configuration.
 * This file can not be renamed.
 * https://nuxtjs.org/guide/configuration
 */
module.exports = {
  // This option lets you add modules inside the vendor.bundle.js file to reduce the size of the application bundle. This is especially helpful when using external modules.
  // https://nuxtjs.org/api/configuration-build
  build: {
    // vendor: ["vue-smooth-scroll"]
  },
  // This option lets you define the CSS files/modules/libraries you want to set as globals (included in every page).
  // https://nuxtjs.org/api/configuration-css
  css: ["assets/main.css"],
  // This option lets you define the development or production mode of Nuxt.js
  // https://nuxtjs.org/api/configuration-dev
  // dev: {},
  // This option lets you define environment variables available both the client and the server.
  // https://nuxtjs.org/api/configuration-env
  // env: {},
  // This option lets you to define parameters values for every dynamic route in your application that will be transformed into HTML files by Nuxt.js.
  // https://nuxtjs.org/api/configuration-generate
  // generate: {},
  // This option lets you to define all default meta tags for your application.
  // https://nuxtjs.org/api/configuration-head
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Inconsolata"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  // This option lets you to customize the loading component Nuxt.js loads by default.
  // https://nuxtjs.org/api/configuration-loading
  loading: {
    color: "#fef7e7"
  },
  // This option lets you add Nuxt modules to your project.
  // https://nuxtjs.org/api/configuration-modules
  // modules: {},
  // This option lets you to define JavaScript plugins to be run before instantiating the root Vue.js Application.
  // https://nuxtjs.org/api/configuration-plugins
  plugins: [{ src: "~plugins/vue-smooth-scroll", ssr: false }]
  // This option lets you define the workspace of your Nuxt.js Application.
  // https://nuxtjs.org/api/configuration-rootdir
  // rootDir: {},
  // This option lets you overwrite the default Nuxt.js configuration of Vue Router.
  // https://nuxtjs.org/api/configuration-router
  // router: { }
  // This option lets you define the source directory of your Nuxt.js Application.
  // https://nuxtjs.org/api/configuration-srcdir
  // srcDir: {},
  // This option lets you define the default properties of the page transitions.
  // https://nuxtjs.org/api/configuration-transition
  // transition: {}
};
