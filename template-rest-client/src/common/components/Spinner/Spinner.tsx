import { Icon, IconContainer } from './spinner.styles';

type SpinnerProps = {
	/**
	 * The size of the spinner icon.
	 */
	size?: number;
};

export function Spinner(props: SpinnerProps) {
	const { size } = props;

	return (
		<IconContainer>
			<Icon size={size} />
		</IconContainer>
	);
}
