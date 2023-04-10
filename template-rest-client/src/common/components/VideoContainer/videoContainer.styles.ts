import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Overlay = styled(motion.div)`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	outline: 0;
	margin: 0;
	z-index: 999;
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
	-webkit-overflow-scrolling: touch;
`;

export const Cover = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	user-select: none;
`;

export const Group = styled(motion.div)`
	position: relative;
	width: 100%;

	video {
		display: flex;
		flex: 1;
		width: 10%;
	}
`;
