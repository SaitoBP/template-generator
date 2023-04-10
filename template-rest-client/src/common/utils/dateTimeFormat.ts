/**
 * Format date to dd/mm/yyyy
 *
 * @param date - date to format
 * @returns formatted date
 */
export function formatDate(date?: Date | number | string) {
	if (!date) {
		throw new Error('date is required');
	}

	let dateToFormat: Date | string = new Date(date);
	let day: string | number = dateToFormat.getDate();
	let month: string | number = dateToFormat.getMonth() + 1;
	const year: string | number = dateToFormat.getFullYear();

	/**
	 * Add 0 to day if they are less than 10
	 */
	if (day < 10) {
		day = '0' + day;
	}

	/**
	 * Add 0 to month if they are less than 10
	 */
	if (month < 10) {
		month = '0' + month;
	}

	dateToFormat = `${day}/${month}/${year}`;

	return dateToFormat as string;
}

/**
 * Format time to hh:mm:ss
 *
 * @param time - time to format
 * @returns formatted time
 */
export function formatTime(time?: Date | number | string) {
	if (!time) {
		throw new Error('time is required');
	}

	let timeToFormat: Date | string = new Date(time);
	let hours: string | number = timeToFormat.getHours();
	let minutes: string | number = timeToFormat.getMinutes();
	let seconds: string | number = timeToFormat.getSeconds();

	/**
	 * Add 0 to hours if they are less than 10
	 */
	if (hours < 10) {
		hours = '0' + hours;
	}

	/**
	 * Add 0 to minutes if they are less than 10
	 */
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	/**
	 * Add 0 to seconds if they are less than 10
	 */
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	timeToFormat = `${hours}:${minutes}:${seconds}`;

	return timeToFormat as string;
}
