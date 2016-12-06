module.exports = {
    // the entry file for the bundle
    // entry: __dirname + '/src/index.js',
    entry: __dirname + "/src/App.js",

    // the bundle file we will get in the result
    output: {
        filename: "public/bundle.js"
    },

    // resolve: {
    //     extensions: [
    //         ".js",
    //         ".json"
    //     ]
    // },

    module: {

        // apply loaders to files that meet given conditions
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ["react", "es2015"]
                }
            },
            { test: /\.json$/, loader: 'json-loader' }
        ],
    },

    // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
    watch: false
};
