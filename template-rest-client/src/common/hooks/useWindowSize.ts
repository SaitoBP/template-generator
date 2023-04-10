/*
 * This function uses the React Hook 'useEffect' to add an event listener to the window component.
 * Whenever the window is resized, the handleResize function is called, and the dimensions of the window
 * are updated to the new dimensions. The dimensions are stored in a state variable, and are used to
 * dynamically render the page.
 *
 * The function returns an object with the dynamic width and height of the window.
 *
 * The function uses the 'useEffect' hook, which is a React Hook that runs a piece
 */
import { useEffect, useState } from 'react';

export function useWindowSize() {
	const [screenSize, setScreenSize] = useState({
		dynamicWidth: window.innerWidth,
		dynamicHeight: window.innerHeight
	});

	function handleResize() {
		setScreenSize({
			dynamicWidth: window.innerWidth,
			dynamicHeight: window.innerHeight
		});
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [screenSize]);

	return {
		width: screenSize.dynamicWidth,
		height: screenSize.dynamicHeight
	};
}
