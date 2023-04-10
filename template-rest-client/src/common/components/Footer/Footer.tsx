import { GameRules } from '../GameRules';
import { History } from '../History';
import { MaxProfitInformation } from '../MaxProfitInformation';
import { SoundControl } from '../SoundControl';
import { Container } from './footer.styles';

export function Footer() {
	return (
		<Container>
			<SoundControl />
			<GameRules />
			<MaxProfitInformation />
			<History />
		</Container>
	);
}
