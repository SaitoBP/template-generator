import { Exit } from '../Exit';
import { Logo } from '../Logo';
import { UserInformation } from '../UserInformation';
import { Container, HeaderContainer, HeaderContent } from './header.styles';

export function Header() {
	return (
		<Container>
			<HeaderContainer>
				<HeaderContent>
					<Logo />
					<UserInformation />
					<Exit />
				</HeaderContent>
			</HeaderContainer>
		</Container>
	);
}
