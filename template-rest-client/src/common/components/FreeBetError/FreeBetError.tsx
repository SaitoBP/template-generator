import { useTranslation } from 'react-i18next';
import { Dialog } from '../Dialog';
import { Group, Image, Message, Title } from './freeBetError.styes';

type FreeBetErrorProps = {
	/**
	 * Indicates if the error is open or not
	 */
	isOpen: boolean;

	/**
	 * Callback to close the error
	 */
	onClose: () => void;
};

export function FreeBetError(props: FreeBetErrorProps) {
	const { isOpen, onClose } = props;

	const { t } = useTranslation();

	return (
		<Dialog isOpen={isOpen} title={t('feedback.errorFreeBet')} onClose={onClose}>
			<Group>
				<Image src='assets/img/error.png' alt='error' />

				<Title>{t('feedback.errorFreeBet')}</Title>

				<Message>Error message goes here</Message>
			</Group>
		</Dialog>
	);
}
