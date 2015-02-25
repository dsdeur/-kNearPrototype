var path = require("path");

module.exports = {
    entry: {
        app: ["./src/js/index.js"]
    },
    output: {
        path: './build',
        filename: 'bundle.js',
        sourceMapFilename: 'build/[file].map'
    },
    module: {
        loaders: [
            { test: /\.(jsx|js)$/, loader: 'jsx-loader?harmony' }, // loaders can take parameters as a querystring
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            {
              "test":   /\.scss$/,
              "loader": "style!css!sass!autoprefixer-loader"
            }
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, './node_modules')
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: [
            "",
            ".js",
            ".jsx",
            ".scss"
        ]
    }
};
