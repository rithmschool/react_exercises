module.exports = {
  context: __dirname + "/",
  entry: './app.jsx',
  output: {
    path: __dirname + "/",
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    }]
  }
};