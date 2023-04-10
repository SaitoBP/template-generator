import { encode, decode } from 'js-base64';
import { shouldEncode } from '~common/configs';

export type StorageType = 'local' | 'session';

export type StorageOptions<T = unknown> = {
	/**
	 * Indicates whether to use local or session storage
	 */
	type?: StorageType;

	/**
	 * Key to use for storage
	 */
	key: string;

	/**
	 * Default value to use if no value is found in storage
	 */
	defaultValue?: T;
};

type SetStorageOptions<T> = Exclude<StorageOptions<T>, 'defaultValue' | 'teste'> & {
	/**
	 * Value to save to storage
	 */
	value: T;
};

/**
 * Save to local or session storage using a key
 */
export function setStorage<T = unknown>(options: SetStorageOptions<T>) {
	const { type = 'local', key, value } = options;

	/**
	 * Encode the key and value if the config is set to true
	 */
	const encodedKey = shouldEncode ? encode(key) : key;
	const stringifiedValue = JSON.stringify(value);
	const encodedValue = shouldEncode ? encode(stringifiedValue) : stringifiedValue;

	if (type === 'local') {
		localStorage.setItem(encodedKey, encodedValue);
		return;
	}

	if (type === 'session') {
		sessionStorage.setItem(encodedKey, encodedValue);
		return;
	}
}

/**
 * Get from local or session storage using a key
 */
export function getStorage<T = unknown>(options: StorageOptions<T>): T | null {
	const { type = 'local', key, defaultValue } = options;

	let value;

	/**
	 * Encode the key if the config is set to true
	 */
	const encodedKey = shouldEncode ? encode(key) : key;

	if (type === 'local') {
		value = localStorage.getItem(encodedKey);
	}

	if (type === 'session') {
		value = sessionStorage.getItem(encodedKey);
	}

	/**
	 * If no value is found in storage, return the default value
	 */
	if ((value === null || value === undefined) && defaultValue !== undefined) {
		return defaultValue;
	}

	if (!value) {
		return null;
	}

	/**
	 * Decode the value if the config is set to true
	 */
	const decodedValue = shouldEncode ? decode(value) : value;

	return JSON.parse(decodedValue);
}
