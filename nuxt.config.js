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
    publicPath: 'themes/myTheme/assets/',
  },
  generate: {
    dir: 'pages'
  }
}
