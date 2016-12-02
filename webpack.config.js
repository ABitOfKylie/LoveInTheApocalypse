module.exports = {
  // the entry file for the bundle
  // entry: __dirname + '/src/index.js',
   entry: "./index.js",

  // the bundle file we will get in the result
    output: {
    filename: "public/bundle.js"
  },


  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ["react", "es2015"]
      }
    }],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  // watch: true
};