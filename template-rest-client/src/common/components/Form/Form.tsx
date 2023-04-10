import { Footer } from '../Footer';
import { Container, Version } from './form.styles';
import { version } from 'package.json';

export function Form() {
	return (
		<Container>
			<>Form</>

			<button>Bet</button>

			<Footer />

			<Version>{version}</Version>
		</Container>
	);
}
