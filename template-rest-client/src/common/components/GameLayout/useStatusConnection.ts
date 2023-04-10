import { useEffect, useState } from 'react';

export function useStatusConnection() {
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		if (!window) return;

		function offlineHandler() {
			setIsOnline(false);
		}

		function onlineHandler() {
			setIsOnline(true);
		}

		window && window.addEventListener('offline', offlineHandler);
		window && window.addEventListener('online', onlineHandler);

		return () => {
			window && window.removeEventListener('offline', offlineHandler);
			window && window.removeEventListener('online', onlineHandler);
		};
	}, []);

	return { isOnline };
}
