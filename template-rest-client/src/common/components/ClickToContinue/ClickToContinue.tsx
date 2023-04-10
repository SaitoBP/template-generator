import { Variants } from 'framer-motion';
import { Container, Text } from './clickToContinue.styles';
import { useTranslation } from 'react-i18next';

type ClickToContinueProps = {
	/**
	 * Variants for the animation of the container
	 */
	containerVariants?: Variants;

	/**
	 * Indicates if the component should be shown
	 */
	show: boolean;

	/**
	 * Variants for the animation of the text
	 */
	textVariants?: Variants;

	/**
	 * Callback to be called when the user clicks on the component
	 */
	onClick: () => void;
};

export function ClickToContinue(props: ClickToContinueProps) {
	const { containerVariants, show, textVariants, onClick } = props;

	const { t } = useTranslation();

	if (!show) {
		return null;
	}

	return (
		<Container
			animate='visible'
			exit='hidden'
			initial='hidden'
			transition={{ duration: 0.3 }}
			variants={containerVariants}
			onClick={onClick}
		>
			<Text
				animate='hidden'
				initial='visible'
				transition={{ duration: 0.6, yoyo: Infinity, ease: 'linear' }}
				variants={textVariants}
			>
				{t('general.clickToContinue')}
			</Text>
		</Container>
	);
}
