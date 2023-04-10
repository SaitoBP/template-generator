import { TFunction } from 'i18next';
import { ColumnsType } from 'rc-table/lib/interface';
import { MoneyFn } from '~common/hooks';
import { RoundHistory } from '~common/types';
import { Profit } from './historyColumns.styles';

export function HistoryColumns(t: TFunction<'translation', undefined>, money: MoneyFn) {
	const columns: ColumnsType<RoundHistory> = [
		{
			title: t('general.dateHour'),
			dataIndex: 'createdAt',
			key: 'createdAt',
			align: 'center',
			width: 150,
			render: (createdAt: Date) =>
				new Intl.DateTimeFormat('pt-BR', {
					day: '2-digit',
					month: '2-digit',
					hour: '2-digit',
					minute: '2-digit'
				})
					.format(new Date(createdAt))
					.replace(/,/g, '')
		},
		{
			title: t('general.roundId'),
			dataIndex: 'id',
			key: 'id',
			align: 'center',
			width: 220
		},
		{
			title: t('general.betValue'),
			dataIndex: 'betValue',
			key: 'betValue',
			align: 'center',
			width: 120,
			render: (betValue: number) => money(betValue)
		},
		{
			title: t('general.winValue'),
			dataIndex: 'profit',
			key: 'profit',
			align: 'center',
			width: 130,
			render: (profit: number) => <Profit isProfit={profit > 0}>{money(profit)}</Profit>
		}
	];

	return columns;
}
