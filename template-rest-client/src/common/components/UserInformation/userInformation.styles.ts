import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	gap: 3px;

	@media (max-width: 1024px) {
		font-size: 10px;
	}
`;

export const Balance = styled.span`
	font-weight: 700;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	text-align: center;
`;

export const Bold = styled.strong``;
