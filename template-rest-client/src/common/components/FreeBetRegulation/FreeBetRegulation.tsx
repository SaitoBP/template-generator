import { useTranslation } from 'react-i18next';
import { Dialog } from '../Dialog';
import { Content, Group } from './freeBetRegulation.styles';
import { FreeBetButton } from '../FreeBetButton';

type FreeBetRegulationProps = {
	/**
	 * Indicates if the regulation is open or not
	 */
	isOpen: boolean;

	/**
	 * Callback to close the regulation
	 */
	onClose: () => void;
};

export function FreeBetRegulation(props: FreeBetRegulationProps) {
	const { isOpen, onClose } = props;

	const { t } = useTranslation();

	return (
		<Dialog isOpen={isOpen} title={t('general.rules')} onClose={onClose}>
			<Group>
				<Content>{t('freebets.regulation')}</Content>

				<FreeBetButton isResponsive breakpoint={1024} mode='info' onClick={onClose}>
					{t('freebets.comeBackRewards')}
				</FreeBetButton>
			</Group>
		</Dialog>
	);
}
