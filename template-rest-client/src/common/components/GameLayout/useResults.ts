import { useResultsStore } from '~common/utils';

export function useResults() {
	const { results } = useResultsStore();

	const showResults = results.winNumber && Number(results.winAmount) > 0;
	const canShowResults = typeof showResults === 'boolean' ? showResults : false;
	const resultsValue = results.winAmount;

	return { canShowResults, resultsValue };
}
