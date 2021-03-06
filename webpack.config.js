const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/js/main'),
  output: {
    path: path.resolve(__dirname, 'build/js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  devServer: {
    outputPath: path.join(__dirname, 'build'),
    disableHostCheck: true,
    compress: true,
    host: '0.0.0.0'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, 'src/static'),
        from: '**/*',
        to: path.resolve(__dirname, 'build')
      }
    ])
  ],
  debug: true,
  devtool: '#eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      }
    ]
  }
}
