import styled, { css } from 'styled-components';

export const ColumnGroup = styled.div`
	flex-direction: column;
	display: flex;
	padding-bottom: 10px;

	&:last-of-type {
		padding-bottom: 0px;
	}

	@media (max-width: 1024px) {
		padding-bottom: 6px;
	}
`;

export const RewardItem = styled.div`
	display: flex;
	align-items: center;
	min-height: 71px;
	padding: 5px 10px;
	border-radius: 50px;
	animation: animatedOpacity 0.4s;

	& + & {
		margin-top: 10px;
	}

	@keyframes animatedOpacity {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@media (max-width: 1024px) {
		min-height: 54px;
	}
`;

export const Coin = styled.img`
	@media (max-width: 1024px) {
		width: 26px;
		height: 26px;
	}
`;

export const TextGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	flex: 1;
	padding: 0px 10px;

	@media (max-width: 1024px) {
		padding: 0px 6px;
	}
`;

export const RewardTitle = styled.h1`
	font-style: normal;
	font-size: 16px;
	line-height: 15px;
	margin-bottom: 2px;
	font-weight: 700;

	@media (max-width: 1024px) {
		font-size: 12px;
		line-height: 12px;
	}
`;

export const RewardLabel = styled.h5`
	font-style: normal;
	font-size: 11px;
	line-height: 15px;
	margin-bottom: 2px;
	font-weight: 400;

	@media (max-width: 1024px) {
		font-size: 9px;
	}
`;

export const RewardSpan = styled.span`
	font-style: normal;
	font-size: 10px;
	line-height: 14px;
	font-weight: 400;

	@media (max-width: 1024px) {
		font-size: 7px;
		line-height: 8px;
	}
`;

type CancelRewardItemProps = {
	/**
	 * If true, the component will be disabled
	 */
	isDisabled: boolean;
};

export const CancelRewardItem = styled.span<CancelRewardItemProps>`
	text-decoration: underline;
	text-align: right;
	font-style: normal;
	font-size: 12px;
	line-height: 20px;
	padding-right: 10px;
	font-weight: 400;
	text-decoration: underline;
	text-align: right;
	font-style: normal;
	font-size: 12px;
	line-height: 20px;
	padding-right: 10px;
	font-weight: 400;

	${({ isDisabled }) =>
		!isDisabled &&
		css`
			cursor: no-drop;
			&:hover {
				opacity: 0.8;
				cursor: pointer;
			}

			&:active {
				opacity: 0.6;
			}
		`}

	@media (max-width: 1024px) {
		font-size: 10px;
		line-height: 16px;
	}
`;
