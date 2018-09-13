module.exports = {
  srcDir: 'src/',
  modules: [
    '~/modules/october'
  ],
  head: {
    htmlAttrs: {
      lang: 'en-US'
    }
  },
  build: {
    publicPath: '/themes/nuxtober/pages/assets/',
  },
  generate: {
    dir: 'pages'
  }
}
