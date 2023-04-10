import { Trans } from 'react-i18next';
import { Balance, Bold, Container } from './userInformation.styles';
import { useBalance } from './useBalance';

export function UserInformation() {
	const { balanceValue } = useBalance();

	return (
		<Container>
			<Balance>
				<Trans
					i18nKey='general.balance'
					values={{ var: balanceValue }}
					components={{ bold: <Bold /> }}
				/>
			</Balance>
		</Container>
	);
}
