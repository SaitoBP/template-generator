import { IoIosSkipForward } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.h1`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 4;
	padding: 8px;
	background: rgba(0, 0, 0, 0.4);
	border: 1px solid rgba(255, 255, 255, 0.2);
	bottom: 5%;
	right: 0%;
`;

export const Label = styled.label`
	white-space: nowrap;
	color: rgba(255, 255, 255, 0.5);
	font-size: 18px;
	padding-left: 4px;
	font-weight: 400;
	margin-right: 6px;
	cursor: pointer;

	@media (max-width: 768px) {
		font-size: 14px;
		padding-left: 2px;
	}

	@media (max-width: 360px) {
		font-size: 12px;
		padding-left: 2px;
	}
`;

export const Icon = styled(IoIosSkipForward).attrs(() => ({
	color: 'rgba(255, 255, 255, 0.5)'
}))`
	width: 22px;
	height: 22px;
	cursor: pointer;

	@media (max-width: 768px) {
		width: 18px;
		height: 18px;
	}

	@media (max-width: 360px) {
		width: 16px;
		height: 16px;
	}
`;
