import { AudioPlayer, Form, GameLayout } from '~common/components';
import { useUserSettingsStore } from '~common/utils';
import { backgroundSound } from '~presentation/assets';
import { Container } from './game.styles';

export function Game() {
	const userSettings = useUserSettingsStore((state) => state.userSettings);

	return (
		<GameLayout>
			<div>The $$GAME_NAME$$ game goes here!</div>

			<AudioPlayer
				src={backgroundSound}
				isPlaying={userSettings.videoStatus === 'reproduced'}
				muted={userSettings.audioStatus === 'muted'}
				volume={userSettings.audioVolume ?? 0.5}
				loop
			/>

			<Container>
				<Form />
			</Container>
		</GameLayout>
	);
}
