import { ErrorMessage } from '~common/components';
import { maintenance } from '~presentation/assets';

export function Maintenance() {
	return (
		<ErrorMessage
			animation={maintenance}
			animationAutoPlay
			animationLoop
			message='feedback.maintenance'
		/>
	);
}
