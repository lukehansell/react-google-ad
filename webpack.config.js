module.exports = {
	entry: './src/GoogleAd',
	output: {
		filename: 'GoogleAd.js',
		path: __dirname,
		libraryTarget: 'umd'
	},
	module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
	  ]
	}
}