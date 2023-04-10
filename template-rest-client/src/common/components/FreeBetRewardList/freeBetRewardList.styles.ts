import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Group = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const Regulation = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 10px 0px;

	@media (max-width: 1024px) {
		padding: 4px 0px;
	}
`;

export const Text = styled.span`
	text-decoration: underline;
	text-align: right;
	font-style: normal;
	line-height: 20px;
	padding-top: 10px;
	font-size: 14px;
	font-weight: 400;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	&:active {
		opacity: 0.6;
	}

	@media (max-width: 1024px) {
		font-size: 12px;
		padding-top: 6px;
		padding-bottom: 4px;
		line-height: 14px;
	}
`;

export const Container = styled(motion.div)`
	display: flex;
	overflow: auto;
	flex-direction: column;
	align-items: center;
	min-height: 205px;
	max-height: 305px;
	width: 100%;
	user-select: none;

	@media (max-width: 1024px) {
		height: 60px;
		max-height: 210px;
	}
`;
