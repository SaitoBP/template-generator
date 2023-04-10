import { ErrorMessage } from '~common/components';
import { notFound } from '~presentation/assets';

export function NotFound() {
	return <ErrorMessage animation={notFound} message='feedback.pageNotFound' />;
}
