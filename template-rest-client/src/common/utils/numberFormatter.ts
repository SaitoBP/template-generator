/**
 * This function formats the number to be displayed in the format 1.000,00
 * it receives a number and returns a string
 */
export function thousandSeparator(number: number | string) {
	try {
		const value = number as number;

		if (isNaN(value)) {
			return parseFloat(value.toString());
		}

		return Number(number)
			.toFixed(0)
			.replace('.', ',')
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
	} catch (error) {
		console.warn('thousandSeparator', error);

		return number;
	}
}
