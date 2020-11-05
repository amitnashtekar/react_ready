const { merge } = require('webpack-merge');
const common = require('./webpack.shared');
const webpack = require('webpack');

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			// this is the url of our local sourcemap server
			//filename: `${randomSourceMapKey}/[name].js.map`,
			publicPath: 'http://localhost:5000/',
			filename: '[name].js.map',
			exclude: ['node_modules.js'],
			append: false,
			module: true,
			columns: true
		})
	]
});
