import { AnimatePresence, Variants } from 'framer-motion';
import { ClickToContinue } from '../ClickToContinue';
import { VideoPlayer } from '../VideoPlayer';
import { useVideoContainer } from './useVideoContainer';
import { Cover, Group, Overlay } from './videoContainer.styles';
import { SkipIntro } from '../SkipIntro';

/**
 * Variants for the overlay
 */
const opacityVariant: Variants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};

/**
 * Variants for the text
 */
const opacityTextVariant: Variants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0.6 }
};

export type VideoContainerProps = {
	/**
	 * Indicates if the video should be shown
	 */
	showVideo: boolean;

	/**
	 * Callback to be called when the user skips the video
	 */
	onSkip: () => void;
};

export function VideoContainer(props: VideoContainerProps) {
	const { showVideo, onSkip } = props;

	const {
		initVideo,
		showSkip,
		handleInitVideo,
		handleVideoEnded,
		handleVideoProgress,
		handleSkipVideo
	} = useVideoContainer({
		onSkip: onSkip
	});

	if (!showVideo) {
		return null;
	}

	return (
		<AnimatePresence>
			<Overlay
				animate='visible'
				exit='hidden'
				initial='visible'
				transition={{ duration: 0.5 }}
				variants={opacityVariant}
			>
				<Cover>
					<Group
						animate='visible'
						exit='hidden'
						initial='hidden'
						transition={{ duration: 0.3 }}
						variants={opacityVariant}
					>
						<ClickToContinue
							containerVariants={opacityVariant}
							show={!initVideo}
							textVariants={opacityTextVariant}
							onClick={handleInitVideo}
						/>

						<VideoPlayer
							isPlaying={initVideo}
							onEnded={handleVideoEnded}
							onProgress={handleVideoProgress}
						/>

						<SkipIntro show={showSkip} onSkip={handleSkipVideo} />
					</Group>
				</Cover>
			</Overlay>
		</AnimatePresence>
	);
}
