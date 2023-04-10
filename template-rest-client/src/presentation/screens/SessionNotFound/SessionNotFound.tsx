import { ErrorMessage } from '~common/components';
import { sessionExpired } from '~presentation/assets';

export function SessionNotFound() {
	return <ErrorMessage animation={sessionExpired} message='session.expired' />;
}
