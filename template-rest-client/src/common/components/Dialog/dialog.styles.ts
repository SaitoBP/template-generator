import RcDialog from 'rc-dialog';
import styled from 'styled-components';

export const DialogContainer = styled(RcDialog)`
	max-width: 850px;

	& .rc-dialog-content {
		& button {
			text-shadow: none;
		}

		& button:hover {
			opacity: 0.5;
		}
	}

	& .rc-dialog-close-x {
	}

	& .rc-dialog-header {
	}

	& .rc-dialog-body {
	}
`;
