var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: {
    rsvp: './client/rsvp.js',
    app: './web/static/js/app.js'
  },
  output: {
    filename: 'js/[name].js',
    path: __dirname + '/priv/static',
    sourceMapFilename: 'js/[name].map'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
      {
        test: /(\.css|\.scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader"},
            {
              loader: "sass-loader",
              options: {
                includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets', './web/static/css']
              }
            }
          ]
        }),
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=../static/fonts/[name].[ext]' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=../static/fonts/[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=../static/fonts/[name].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=../static/fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=../static/fonts/[name].[ext]' }

    ]
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
  ],
  devtool: 'cheap-module-eval-source-map',
};
