/**
 * Generate an array of random numbers with a given length
 */
export function randomNumbersArray(length: number) {
	return Array.from({ length: length }, () => Math.floor(Math.random() * 9));
}
