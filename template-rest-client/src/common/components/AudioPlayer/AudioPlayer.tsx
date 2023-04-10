import { useEffect, useRef } from 'react';

type AudioPlayerProps = {
	/**
	 * Indicates if the audio is playing
	 */
	isPlaying: boolean;

	/**
	 * Indicates if the audio should loop
	 *
	 * @default false
	 */
	loop?: boolean;

	/**
	 * Indicates if the audio is muted
	 *
	 * @default false
	 */
	muted?: boolean;

	/**
	 * Indicates the volume of the audio
	 */
	volume: number;

	/**
	 * The audio source
	 */
	src: string;
};

export function AudioPlayer(props: AudioPlayerProps) {
	const { isPlaying, loop = false, muted = false, volume, src } = props;

	const audioRef = useRef<HTMLAudioElement>(null);

	/**
	 * The browser cannot play audio without a user interaction.
	 * so we need to add some listeners to play the audio.
	 * We also need to remove the listeners when the component is unmounted.
	 */
	useEffect(() => {
		const audio = audioRef.current;

		function handlePlay() {
			if (!isPlaying) return;
			if (!audio) return;

			audio.loop = loop;
			audio.muted = muted;
			audio.volume = volume;

			audio.play();
		}

		document.addEventListener('click', handlePlay);
		document.addEventListener('touchstart', handlePlay);
		document.addEventListener('keydown', handlePlay);

		return () => {
			document.removeEventListener('click', handlePlay);
			document.removeEventListener('touchstart', handlePlay);
			document.removeEventListener('keydown', handlePlay);
		};
	}, [isPlaying, loop, muted, volume]);

	return <audio ref={audioRef} src={src} />;
}
