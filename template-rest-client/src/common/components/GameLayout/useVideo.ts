import { useState } from 'react';
import { useUserSettingsStore } from '~common/utils';

export function useVideo() {
	const [skipVideo, setSkipVideo] = useState(false);
	const { videoStatus } = useUserSettingsStore((state) => state.userSettings);

	const canShowVideo = !skipVideo && videoStatus !== 'reproduced';

	function handleSkipVideo() {
		setSkipVideo(true);
	}

	return { canShowVideo, handleSkipVideo };
}
