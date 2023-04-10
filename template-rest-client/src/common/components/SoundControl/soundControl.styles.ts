import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;

	& svg {
		transition: all ease-in-out 200ms;
		transform: scale(1);
	}
`;

export const Muted = styled(BsVolumeMuteFill)`
	width: 32px;
	height: 32px;
	outline: none;
	cursor: pointer;
`;

export const Unmuted = styled(BsVolumeUpFill)`
	width: 32px;
	height: 32px;
	outline: none;
	cursor: pointer;
`;
