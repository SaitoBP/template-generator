import ReactPlayer from 'react-player';

type VideoPlayerProps = {
	/**
	 * Indicates if the video is playing
	 */
	isPlaying: boolean;

	/**
	 * Callback to be called when the video is ended
	 */
	onEnded: () => void;

	/**
	 * Callback to be called every time the video progress
	 */
	onProgress: () => void;
};

export function VideoPlayer(props: VideoPlayerProps) {
	const { isPlaying, onEnded, onProgress } = props;

	return (
		<ReactPlayer
			url='assets/video/intro.mp4'
			width='100%'
			height='100%'
			playing={isPlaying}
			volume={0.1}
			progressInterval={100}
			onEnded={onEnded}
			onProgress={onProgress}
		/>
	);
}
