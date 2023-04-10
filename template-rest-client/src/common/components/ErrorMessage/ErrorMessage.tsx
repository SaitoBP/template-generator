import { useTranslation } from 'react-i18next';
import { useRemovePreloader } from '~common/hooks';
import { AnimateLottie, Container, Text } from './errorMessage.styles';

type ErrorMessageProps = {
	/**
	 * The animation to be displayed.
	 */
	animation: unknown;

	/**
	 * Indicates if the animation should play automatically.
	 *
	 * @default true
	 */
	animationAutoPlay?: boolean;

	/**
	 * The height of the animation.
	 *
	 * @default 'auto'
	 */
	animationHeight?: number | string;

	/**
	 * Indicates if the animation should loop.
	 *
	 * @default false
	 */
	animationLoop?: boolean;

	/**
	 * The i18n message to be displayed.
	 */
	message: string;
};

export function ErrorMessage(props: ErrorMessageProps) {
	const {
		animation,
		animationAutoPlay = true,
		animationHeight = 'auto',
		animationLoop = false,
		message
	} = props;

	useRemovePreloader();
	const { t } = useTranslation();

	const animationData = animation;

	return (
		<Container>
			<AnimateLottie
				animationData={animationData}
				autoplay={animationAutoPlay}
				height={animationHeight}
				loop={animationLoop}
			/>

			<Text>{t(message)}</Text>
		</Container>
	);
}
