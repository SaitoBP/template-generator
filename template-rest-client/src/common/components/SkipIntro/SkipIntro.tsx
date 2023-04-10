import { useTranslation } from 'react-i18next';
import { Container, Icon, Label } from './skipIntro.styles';

type VideoContainerProps = {
	/**
	 * Indicates if the skip intro button should be shown
	 */
	show: boolean;

	/**
	 * Callback to be called when the user skips the video
	 */
	onSkip: () => void;
};

export function SkipIntro(props: VideoContainerProps) {
	const { show, onSkip } = props;

	const { t } = useTranslation();

	if (!show) {
		return null;
	}

	return (
		<Container onClick={onSkip}>
			<Label>{t('general.skipIntro')}</Label>
			<Icon />
		</Container>
	);
}
