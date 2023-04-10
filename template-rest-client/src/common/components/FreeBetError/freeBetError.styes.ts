import styled from 'styled-components';

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100%;
	flex: 1;
`;

export const Image = styled.img`
	background-color: 'red';
	width: 100px;
	height: 100px;

	@media (max-width: 1024px) {
		width: 75px;
		height: 75px;
	}
`;

export const Title = styled.h3`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 15px;
	margin: 15px 0px;
`;

export const Message = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
`;
