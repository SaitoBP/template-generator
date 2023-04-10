import { Tooltip } from 'react-tooltip';
import { Icon } from './maxProfitInformation.styles';
import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router-dom';
import { GameLoaderResponse } from '~common/types';
import { useFormatNumber } from '~common/hooks';

export function MaxProfitInformation() {
	const { t } = useTranslation();
	const { currency, operatorConfig } = useLoaderData() as GameLoaderResponse;
	const { money } = useFormatNumber({ currency });

	const tooltip = `${t('general.maxProfit')}: ${money(operatorConfig.maxProfit)}`;

	return (
		<>
			<Icon data-tooltip-id='information' />

			<Tooltip id='information' place='right' content={tooltip} />
		</>
	);
}
