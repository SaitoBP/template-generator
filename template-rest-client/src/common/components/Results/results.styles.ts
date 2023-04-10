import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	width: 135px;
	height: 50px;
	position: absolute;
	z-index: 10;
	border-radius: 0px 0px 20px 20px;
	padding: 4px;
	top: 59px;

	@media (max-width: 1024px) {
		top: 32px;
		width: 110px;
		height: 45px;
	}
`;

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 100%;
	border-radius: 20px;
`;

export const Value = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 15px;
	color: #0aa71a;

	@media (max-width: 1024px) {
		font-size: 12px;
	}
`;

export const Information = styled.div`
	display: flex;
	font-style: normal;
	font-weight: 400;
	font-size: 9px;
	line-height: 15px;
	color: #0aa71a;

	@media (max-width: 1024px) {
		font-size: 8px;
	}
`;

export const Image = styled.img`
	width: 15px;
	height: 15px;
	margin-right: 2px;
`;
