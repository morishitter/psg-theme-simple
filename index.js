// dependencies
var fs = require('fs')
var postcss = require('postcss')
var styleGuide = require('postcss-style-guide')

// css to be processed
var css = fs.readFileSync('./src/simple.css', 'utf8')
// options for styleguide
var options = {
    name: "Project name"
};

// process css
var output = postcss([
    require('cssnext')(),
    require('cssnano')(),
    require('postcss-nested')
  ])
  .use(styleGuide(options))
  .process(css, {
    // `from` option is required so relative import can work from input dirname
    from: "src/simple.css"
  })
  .css
fs.writeFileSync("./simple.css", output)
