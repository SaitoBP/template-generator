import { useState } from 'react';
import { useUserSettingsStore } from '~common/utils';

export type UseVideoContainerOptions = {
	onSkip: () => void;
};

export function useVideoContainer(options: UseVideoContainerOptions) {
	const { onSkip } = options;

	const [initVideo, setInitVideo] = useState(false);
	const [progress, setProgress] = useState(0);
	const [showSkip, setShowSkip] = useState(false);
	const setUserSettings = useUserSettingsStore((state) => state.setUserSettings);

	function handleSkipVideo() {
		console.log('updated storage');
		commonAudioAndVideoSetup();
	}

	function handleVideoEnded() {
		commonAudioAndVideoSetup();
	}

	function handleVideoProgress() {
		if (progress === 2) return;

		if (progress === 1) {
			setShowSkip(true);
		}

		setProgress((prev) => prev + 1);
	}

	/**
	 * Actions to be performed when the video is skipped or ended
	 */
	function commonAudioAndVideoSetup() {
		setUserSettings({
			audioStatus: 'unmuted',
			audioVolume: 0.08,
			videoStatus: 'reproduced'
		});
		onSkip();
	}

	function handleInitVideo() {
		setInitVideo(true);
	}

	return {
		initVideo,
		showSkip,
		handleInitVideo,
		handleVideoEnded,
		handleVideoProgress,
		handleSkipVideo
	};
}
