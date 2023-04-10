import { ReactNode } from 'react';
import { Button, Container, Text } from './freeBetButton.styles';
import { FreeBetButtonMode } from './freeBetButton.types';

type FreeBetButtonProps = {
	/**
	 * Marin top
	 */
	mt?: number;

	/**
	 * Button mode to change the background color
	 */
	mode: FreeBetButtonMode;

	/**
	 * Indicates if button is disabled
	 */
	isDisabled?: boolean;

	/**
	 * Indicates if button is responsive
	 */
	isResponsive?: boolean;

	/**
	 * Breakpoint for the media query
	 *
	 * @default 400
	 */
	breakpoint?: number;

	/**
	 * Text to display
	 */
	children: ReactNode;

	/**
	 * Callback when button is clicked
	 */
	onClick?: () => void;
};

export function FreeBetButton(props: FreeBetButtonProps) {
	const {
		mt,
		mode,
		isDisabled,
		isResponsive,
		breakpoint = 400,
		children,
		onClick
	} = props;

	return (
		<Container mt={mt}>
			<Button mode={mode} isDisabled={isDisabled} onClick={onClick}>
				<Text
					isDisabled={isDisabled}
					isResponsive={isResponsive}
					breakpoint={breakpoint}
					mode={mode}
				>
					{children}
				</Text>
			</Button>
		</Container>
	);
}
