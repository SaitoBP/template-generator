import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router-dom';
import { useFormatNumber } from '~common/hooks';
import { GameLoaderResponse } from '~common/types';
import { Background, Container, Image, Information, Value } from './results.styles';

type ResultsProps = {
	/**
	 * Indicates if the results should be shown
	 */
	show: boolean;

	/**
	 * The value of the results
	 */
	value: string | number;
};

export function Results(props: ResultsProps) {
	const { show, value } = props;

	const { currency } = useLoaderData() as GameLoaderResponse;
	const { money } = useFormatNumber({ currency });
	const { t } = useTranslation();

	if (!show) {
		return null;
	}

	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 8 }}
		>
			<Background>
				<Value>{money(value)}</Value>

				<Information>
					<Image src='/assets/svg/check.svg' alt='check' />

					{t('general.taskCompleted').toUpperCase()}
				</Information>
			</Background>
		</Container>
	);
}
