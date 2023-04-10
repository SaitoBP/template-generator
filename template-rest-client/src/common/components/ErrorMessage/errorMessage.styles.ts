import lottie from 'lottie-react';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
`;

export const AnimateLottie = styled(lottie)`
	width: 250px;
	height: ${({ height }) => String(height)};
`;

export const Text = styled.div`
	margin-top: 10px;
	text-align: center;
	font-size: 18px;
`;
