import { useEffect } from 'react';

type UseRemovePreloaderOptions = {
	selector?: string;
};

export function useRemovePreloader(options?: UseRemovePreloaderOptions) {
	const selector = options?.selector ?? '#preloading-app';

	useEffect(() => {
		document.querySelector(selector)?.remove();
	}, []);
}
