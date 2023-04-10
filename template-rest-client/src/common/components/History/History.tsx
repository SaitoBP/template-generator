import Table from 'rc-table';
import 'rc-table/assets/index.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';
import { Dialog } from '../Dialog';
import { Icon, TableContainer } from './history.styles';
import { HistoryColumns } from '../HistoryColumns';
import { useFormatNumber } from '~common/hooks';
import { useLoaderData } from 'react-router-dom';
import { GameLoaderResponse, RoundHistoryResponse } from '~common/types';
import useAxios from 'axios-hooks';

export function History() {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();
	const { currency, sessionId } = useLoaderData() as GameLoaderResponse;
	const { money } = useFormatNumber({ currency });
	const [data, getRoundHistories] = useAxios<RoundHistoryResponse>(
		{ url: '/round-history', method: 'post', data: { sessionId } },
		{ manual: true }
	);

	const tooltip = t('general.history');

	function handleOpen() {
		setIsOpen(true);
		getRoundHistories();
	}

	return (
		<>
			<Icon data-tooltip-id='max-profit' onClick={handleOpen} />

			<Dialog
				isOpen={isOpen}
				title={t('general.history')}
				height={500}
				isLoading={data.loading}
				onClose={() => setIsOpen(false)}
			>
				<TableContainer>
					<Table
						columns={HistoryColumns(t, money)}
						data={data.data?.rounds}
						scroll={{ x: 780, y: 450 }}
					/>
				</TableContainer>
			</Dialog>

			<Tooltip id='max-profit' place='right' content={tooltip} />
		</>
	);
}
