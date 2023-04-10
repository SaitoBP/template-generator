import { AxiosError } from 'axios';
import { useRouteError } from 'react-router-dom';
import { useRemovePreloader } from '~common/hooks';
import { Maintenance } from '../Maintenance';
import { SessionNotFound } from '../SessionNotFound';

type ErrorCode = { code: 'session_expired' | 'session_not_found' };

export function ErrorHandler() {
	useRemovePreloader();

	const error = useRouteError() as AxiosError<ErrorCode>;
	const code = error?.response?.data?.code;

	const noSessionFound =
		code === 'session_expired' ||
		code === 'session_not_found' ||
		error.message === 'no-session';

	if (noSessionFound) {
		return <SessionNotFound />;
	}

	if (error.message === 'maintenance') {
		return <Maintenance />;
	}

	console.error('Error', error);

	return <>Unhandled error</>;
}
