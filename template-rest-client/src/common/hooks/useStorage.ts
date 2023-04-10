import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GameLoaderResponse } from '~common/types';
import { getStorage, setStorage, StorageOptions } from '~common/utils/storageHelper';

type UseStorageOptions<T> = StorageOptions & {
	/**
	 * Default value to use if no value is found in storage
	 */
	defaultValue?: T;
};

/**
 * Hook to save to local or session storage using a key that is combined with the user name
 */
export function useStorage<T = unknown>(options: UseStorageOptions<T>) {
	const { type = 'local', key, defaultValue } = options;

	const { userName } = useLoaderData() as GameLoaderResponse;
	const userKey = `${key}_${userName}`;

	const [state, setState] = useState<T | null>(() => {
		const value = getStorage<T>({
			defaultValue: defaultValue,
			key: userKey,
			type: type
		});

		return value;
	});

	function updateStorage(value: T) {
		setState(value);
		setStorage({ type, key: userKey, value });
	}

	useEffect(() => {
		const observers = new Set<(val: unknown) => void>();

		function handleChange(event: StorageEvent) {
			if (
				event.storageArea === localStorage &&
				type === 'local' &&
				event.key === userKey
			) {
				const newValue: T =
					event.newValue !== null ? JSON.parse(event.newValue) : defaultValue;

				if (newValue !== state) {
					setState(newValue);

					observers.forEach((observer) => {
						observer(newValue);
					});
				}
			}
		}

		setStorage({ type, key: userKey, value: state });

		window.addEventListener('storage', handleChange);

		return () => {
			window.removeEventListener('storage', handleChange);
			observers.clear();
		};
	}, [key, state, defaultValue]);

	return { state, updateStorage };
}
