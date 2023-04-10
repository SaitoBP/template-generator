import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	min-height: 101%;
	width: 100%;
	min-width: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 5;
	background: rgba(0, 0, 0, 1);
	cursor: pointer;
`;

export const Text = styled(motion.span)`
	white-space: nowrap;
	font-size: 32px;

	@media (max-width: 768px) {
		font-size: 24px;
	}

	@media (max-width: 360px) {
		font-size: 16px;
	}
`;
