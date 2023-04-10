import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 1024px) {
		padding-top: 4px;
	}
`;

export const Information = styled.div`
	font-style: normal;
	text-align: justify;
	font-size: 16px;
	line-height: 23px;
	font-weight: 400;

	@media (max-width: 1024px) {
		font-size: 12px;
		line-height: 15px;
		font-weight: 600;
	}
`;

export const Highlight = styled.span`
	font-weight: 700;
	font-size: 20px;
`;

export const RulesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Subtitle = styled.h5`
	text-align: justify;
	font-style: normal;
	font-weight: 400;
	font-weight: 700;
	font-size: 14px;
	margin-top: 8px;

	@media (max-width: 1024px) {
		font-size: 12px;
		line-height: 13px;

		font-weight: 700;
	}
`;

export const Rules = styled.label`
	height: 230px;
	overflow: auto;
	font-size: 12px;
	padding: 10px;

	@media (max-width: 1024px) {
		height: 130px;
		padding: 8px 2px;
		line-height: 12px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 10px 0;

	@media (max-width: 1024px) {
		margin: 6px 0;
	}
`;
