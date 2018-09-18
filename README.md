# Nuxtober

First change to your theme directory

```
# clone the repository
$ git clone https://github.com/bskimball/nuxtober.git myTheme

# cd into theme
$ cd myTheme

# install depencies
npm install

# generate static pages
npm generate
```

You can just add pages in myTheme/src/pages then run npm run generate and it will output files into myTheme/pages. The assets will be output into myTheme/assets.

You can change the nuxt directory by editing the nuxt config file but for this to work, you must have a directory like the src directory. You also must adjust the publicPath in nuxt config to match the assets directory within your theme. 

The trick is the october module in myTheme/src/modules that converts the generated html to htm files.

Documentation for Nuxt is here https://nuxtjs.org
