module.exports = {
	stories: ['../src/**/**/*.stories.js'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-docs',
		'@storybook/addon-viewport',
		'@storybook/addon-a11y'
	],
	webpackFinal: async (config) => {
		// do mutation to the config

		return config;
	}
};
