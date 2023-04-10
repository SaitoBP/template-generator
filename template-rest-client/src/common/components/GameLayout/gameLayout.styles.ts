import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	min-height: 100vh;
	width: 100%;
	overflow: hidden;
`;

export const Cover = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1024px;
	max-height: 100vh;
	width: 100%;
	padding: 0 32px;
	margin: 0 auto;
	padding: 0 1px;
	position: relative;
`;

export const Spacing = styled.div`
	min-height: 10px;
	display: flex;
`;
