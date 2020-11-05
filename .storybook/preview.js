import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import { withA11y } from '@storybook/addon-a11y';
export const parameters = {
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
	}
};

addDecorator(withA11y);

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<Box m="4">
				<Story />
			</Box>
		</ThemeProvider>
	)
];

addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS
	}
});
