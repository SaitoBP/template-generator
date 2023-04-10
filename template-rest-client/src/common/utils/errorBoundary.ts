import { StartSessionResponse } from '~common/types';

export function errorBoundary(response: StartSessionResponse) {
	const { operatorConfig } = response;

	if (operatorConfig.maintenance) {
		throw new Error('maintenance', { cause: 'maintenance' });
	}
}
