const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  performance: {
    maxAssetSize: 1000000,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css/loader'],
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
};
