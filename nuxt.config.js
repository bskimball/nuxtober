module.exports = {
  srcDir: 'src/',
  modules: [
    '~/modules/october'
  ],
  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    title: 'BDK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BDK' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    dir: 'pages'
  }
}