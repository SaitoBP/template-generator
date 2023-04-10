import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 8px;

	@media (max-width: 1024px) {
		margin-bottom: 0px;
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 60px;
	width: 100%;
	transition: all 200ms ease-in-out;

	@media (max-width: 1024px) {
		height: 40px;
	}
`;

export const HeaderContent = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1024px;
	padding: 0 32px;
	margin: 0 auto;
	padding: 0 8px;
	flex: 1;
`;
