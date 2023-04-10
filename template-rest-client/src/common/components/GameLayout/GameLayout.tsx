import { ReactNode } from 'react';
import { NoConnection } from '~presentation/screens';
import { FreeBetModal } from '../FreeBetModal';
import { Header } from '../Header';
import { Results } from '../Results';
import { VideoContainer } from '../VideoContainer';
import { Container, Cover, Spacing } from './gameLayout.styles';
import { useResults } from './useResults';
import { useStatusConnection } from './useStatusConnection';
import { useVideo } from './useVideo';

type GameLayoutProps = {
	children: ReactNode;
};

export function GameLayout(props: GameLayoutProps) {
	const { children } = props;

	const { isOnline } = useStatusConnection();
	const { canShowVideo, handleSkipVideo } = useVideo();
	const { canShowResults, resultsValue } = useResults();

	if (!isOnline) {
		return <NoConnection />;
	}

	return (
		<Container>
			<Cover>
				<VideoContainer showVideo={canShowVideo} onSkip={handleSkipVideo} />

				<Header />

				<Results show={canShowResults} value={resultsValue} />

				<Spacing />

				{children}

				<FreeBetModal />
			</Cover>
		</Container>
	);
}
