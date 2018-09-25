# Nuxtober

First change to your theme directory

```
# clone the repository
$ git clone https://github.com/bskimball/nuxtober.git <your-theme-name>

# cd into theme
$ cd <your-theme-name>

# install depencies
npm install
```

You also need to change the publicPath in your nuxt.config.js file, and insert your theme name instead of myTheme
```
# nuxt.config.js
...
build: {
  publicPath: '/themes/<your-theme-name>/assets/'
}
...
```

Then you can generate static pages in your october theme
```
# generate static pages
npm generate
```

You can just add pages in myTheme/src/pages then run npm run generate and it will output files into myTheme/pages. The assets will be output into myTheme/assets.

You can change the nuxt directory by editing the nuxt config file but for this to work, you must have a directory like the src directory. You also must adjust the publicPath in nuxt config to match the assets directory within your theme. 

The trick is the october module in myTheme/src/modules that converts the generated html to htm files.

You can use twig variables in your pages, but if a page uses twig, you can not use nuxt-link to link to that page, just use a regular href <a href="/page">Page</a>

Documentation for Nuxt is here https://nuxtjs.org
