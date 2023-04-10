import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router-dom';
import { FreeBet, GameLoaderResponse } from '~common/types';
import { formatDate, formatTime, thousandSeparator } from '~common/utils';
import { FreeBetButton } from '../FreeBetButton';
import {
	CancelRewardItem,
	Coin,
	ColumnGroup,
	RewardItem,
	RewardLabel,
	RewardSpan,
	RewardTitle,
	TextGroup
} from './freeBetRewardListItem.styles';

type FreeBetRewardListItemProps = {
	/**
	 * Free bet to display
	 */
	freeBet: FreeBet;
};

export function FreeBetRewardListItem(props: FreeBetRewardListItemProps) {
	const { freeBet } = props;

	const { t } = useTranslation();
	const { currency } = useLoaderData() as GameLoaderResponse;

	const betAmount = freeBet.betAmount || 0;
	const betCount = freeBet.betCount || 0;
	const betCountUsed = freeBet.betCountUsed || 0;

	const rewardTitle = t('freebets.betCountOfBetAmount', {
		betCount: betCount,
		betAmount: thousandSeparator(betAmount),
		currency: currency
	});

	const rewardLabel = t('freebets.validUntilThisDate', {
		startDate: formatDate(freeBet.endDate),
		startTime: formatTime(freeBet.endDate)
	});

	const notUsedBetsText = t('freebets.didNotUseReward');

	const haveBetsText = t('freebets.youHaveBets', {
		betCountUsed: betCount - betCountUsed,
		betCount: betCount
	});

	const rewardSpan = freeBet.betCountUsed === 0 ? notUsedBetsText : haveBetsText;

	function playFreeBet() {
		console.log('Play free bet');
	}

	function cancelReward() {
		console.log('Cancel reward');
	}

	return (
		<ColumnGroup>
			<RewardItem>
				<Coin src='assets/img/coin.png' alt='coin' />

				<TextGroup>
					<RewardTitle>{rewardTitle}</RewardTitle>

					<RewardLabel>{rewardLabel}</RewardLabel>

					<RewardSpan>{rewardSpan}</RewardSpan>

					<FreeBetButton
						isResponsive
						breakpoint={1024}
						mode='success'
						onClick={playFreeBet}
					>
						{t('freebets.playNow')}
					</FreeBetButton>
				</TextGroup>
			</RewardItem>

			<CancelRewardItem isDisabled={false} onClick={cancelReward}>
				{t('freebets.cancelReward')}
			</CancelRewardItem>
		</ColumnGroup>
	);
}
