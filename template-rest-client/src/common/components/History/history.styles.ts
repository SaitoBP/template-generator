import { RiHistoryLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Icon = styled(RiHistoryLine)`
	width: 32px;
	height: 32px;
	outline: none;
	cursor: pointer;
`;

export const TableContainer = styled.div`
	& .rc-table-header {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	& .rc-table-body {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	& .rc-table th,
	& .rc-table td {
		padding: 6px 6px;
	}

	& .rc-table-expanded-row-fixed {
		margin: -6px -8px;
	}

	& .rc-table-expanded-row-fixed::after {
		border-right: 0;
	}
`;
