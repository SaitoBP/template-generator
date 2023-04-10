import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';
import { useUserSettingsStore } from '~common/utils';
import { Container, Muted, Unmuted } from './soundControl.styles';

export function SoundControl() {
	const { t } = useTranslation();

	const { userSettings, setUserSettings } = useUserSettingsStore();

	const tooltip =
		userSettings.audioStatus === 'muted' ? t('general.soundOff') : t('general.soundOn');

	function mute() {
		setUserSettings({ ...userSettings, audioStatus: 'muted' });
	}

	function unmute() {
		setUserSettings({ ...userSettings, audioStatus: 'unmuted' });
	}

	return (
		<Container data-tooltip-id='sound-control'>
			{userSettings.audioStatus === 'muted' && <Muted onClick={unmute} />}

			{userSettings.audioStatus === 'unmuted' && <Unmuted onClick={mute} />}

			<Tooltip id='sound-control' place='right' content={tooltip} />
		</Container>
	);
}
