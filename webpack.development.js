const { merge } = require('webpack-merge');
const common = require('./webpack.shared');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',

	devServer: {
		port: 8000
	}
});
