var webpack = require('webpack');
var path = require('path');
var config = {
   devtool: "cheap-module-source-map",
  entry: {
    'index':'./resouse/index.js'
  },
  output: {
    'path':path.join(__dirname,'public'),
    'publicPath':'/',
    'filename':'script/[name].js'
  },
  module: {
    loaders: [
    {test: /\.js$/, loader: 'babel-loader?presets[]=es2015,presets[]=react'},
     {test: /\.(css|less)$/, loader: 'style-loader!css-loader!less-loader'},
     {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/i,loader: "url-loader?limit=8192&name=images/[name]_[hash].[ext]"},
    ]
  }
}

module.exports = config;
