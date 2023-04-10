import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	body {

	}

	html, body {
    min-height:100vh;
    outline: none;
    -webkit-tap-highlight-color: transparent;
	}
`;
