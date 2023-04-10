import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-tooltip/dist/react-tooltip.css';
import { GameTheme } from '~common/styles';
import { Router } from '~router';

if (typeof window !== 'undefined' && window.top) {
	window.top.postMessage({ content: { name: 'clientHeight', value: 700 } }, '*');
}

const element = document.getElementById('root') as HTMLElement;
const root = createRoot(element);

root.render(
	<StrictMode>
		<GameTheme>
			<Router />
		</GameTheme>
	</StrictMode>
);
