import { replaceColor } from 'lottie-colorify';
import { ErrorMessage } from '~common/components';
import { palette } from '~common/styles';
import { noConnection } from '~presentation/assets';

export function NoConnection() {
	const animation = replaceColor('#cbf96a', palette.textAccent, noConnection);

	return (
		<ErrorMessage animation={animation} message='feedback.noConnection' animationLoop />
	);
}
