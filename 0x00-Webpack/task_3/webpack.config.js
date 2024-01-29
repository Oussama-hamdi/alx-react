const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
	  'file-loader',
	  {
	    loader: 'image-webpack-loader',
	    options: {
	      bypassOnDebug: true,
	      disable: true,
	    },
	  },
	],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
  },
  devtool: 'inline-source-map',
};
