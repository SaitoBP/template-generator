import 'styled-components';
import { palette } from './common/styles';

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: typeof palette;
	}
}
