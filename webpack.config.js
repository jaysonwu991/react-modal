const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, './lib'),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          'swc-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
