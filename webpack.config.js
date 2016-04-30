module.exports = {
  entry: './lib/index.js',
  output: {
    filename: './dist/index.js',
    library: 'css-grid-layout-react',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
