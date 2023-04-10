import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled from 'styled-components';

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const Icon = styled(AiOutlineLoading3Quarters)`
	animation: spin 1.5s infinite linear;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(-359deg);
		}
	}
`;
