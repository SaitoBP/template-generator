import { useTranslation } from 'react-i18next';
import { Dialog } from '../Dialog';
import { Container, Group, Regulation, Text } from './freeBetRewardList.styles';
import { FreeBet } from '~common/types';
import { FreeBetRewardListItem } from '../FreeBetRewardListItem';

type FreeBetRewardListProps = {
	/**
	 * Whether the dialog is open or not
	 */
	isOpen: boolean;

	/**
	 * List of free bets
	 */
	freeBets: FreeBet[];

	/**
	 * Callback to open the regulation
	 */
	onOpenRegulation?: () => void;

	/**
	 * Callback to close the dialog
	 */
	onClose?: () => void;
};

export function FreeBetRewardList(props: FreeBetRewardListProps) {
	const { isOpen, freeBets, onOpenRegulation, onClose } = props;

	const { t } = useTranslation();

	return (
		<Dialog isOpen={isOpen} title={t('general.congratulations')} onClose={onClose}>
			<Group>
				<Regulation>
					<Text onClick={onOpenRegulation}>{t('freebets.readRegulation')}</Text>
				</Regulation>

				<Container
					initial={{ filter: 'none', opacity: 1 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					{freeBets.map((freeBet) => {
						return <FreeBetRewardListItem key={freeBet._id} freeBet={freeBet} />;
					})}
				</Container>
			</Group>
		</Dialog>
	);
}
