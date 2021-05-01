const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // webpack 5.x default output ES6
  target: [ 'web', 'es5' ],
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, './lib'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ]
  }
}
