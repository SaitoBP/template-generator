import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { theme } from './theme';

type GameThemeProps = {
	children: ReactNode;
};

export function GameTheme(props: GameThemeProps) {
	const { children } = props;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			{children}
		</ThemeProvider>
	);
}
