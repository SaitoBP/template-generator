import { Trans, useTranslation } from 'react-i18next';
import { Dialog } from '../Dialog';
import {
	ButtonsContainer,
	Container,
	Group,
	Highlight,
	Information,
	Rules,
	RulesContainer,
	Subtitle
} from './freeBetReward.styles';
import { useFormatNumber } from '~common/hooks';
import { useLoaderData } from 'react-router-dom';
import { FreeBet, GameLoaderResponse } from '~common/types';
import { formatDate, formatTime } from '~common/utils';
import { FreeBetButton } from '../FreeBetButton';

type FreeBetRewardProps = {
	/**
	 * Indicates whether the dialog is open or not.
	 */
	isOpen: boolean;

	/**
	 * Free bet reward.
	 */
	freeBet: FreeBet;

	/**
	 * Callback function that is called when the dialog is closed.
	 */
	onClose?: () => void;
};

export function FreeBetReward(props: FreeBetRewardProps) {
	const { isOpen, freeBet, onClose } = props;

	const { t } = useTranslation();
	const { currency } = useLoaderData() as GameLoaderResponse;
	const { money } = useFormatNumber({ currency });

	return (
		<Dialog isOpen={isOpen} title={t('freebets.gotReward')} onClose={onClose}>
			<Container>
				<Group>
					<Information>
						<Trans
							i18nKey='freebets.info'
							components={{ Highlight: <Highlight /> }}
							values={{
								betCount: money(freeBet.betCount || 0),
								betAmount: money(freeBet.betAmount || 0),
								date: formatDate(freeBet.endDate),
								time: formatTime(freeBet.endDate)
							}}
						/>
					</Information>

					<RulesContainer>
						<Subtitle>{t('general.rules')}</Subtitle>
						<Rules>{t('freebets.regulation')}</Rules>
					</RulesContainer>

					<ButtonsContainer>
						<FreeBetButton isResponsive breakpoint={1024} mode='success'>
							{t('freebets.playNow')}
						</FreeBetButton>

						<FreeBetButton isResponsive breakpoint={1024} mode='info'>
							{t('freebets.playLater')}
						</FreeBetButton>
					</ButtonsContainer>
				</Group>
			</Container>
		</Dialog>
	);
}
