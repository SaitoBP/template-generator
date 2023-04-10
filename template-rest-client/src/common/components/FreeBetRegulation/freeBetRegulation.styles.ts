import styled from 'styled-components';

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.h1`
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 17px;
	padding: 10px 0px;

	@media (max-width: 1024px) {
		font-size: 10px;
		line-height: 12px;
		padding: 6px 0px;
	}
`;
