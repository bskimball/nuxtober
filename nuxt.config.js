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
    publicPath: '../assets/',
  },
  generate: {
    dir: 'pages'
  }
}
