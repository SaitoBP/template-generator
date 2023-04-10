import { useLoaderData } from 'react-router-dom';
import { Icon } from './exit.styles';
import { GameLoaderResponse } from '~common/types';

export function Exit() {
	const { homeUrl } = useLoaderData() as GameLoaderResponse;

	function goHome() {
		if (window === undefined) return;
		if (window.top === undefined || window.top === null) return;

		window.top.location.href = homeUrl;
	}

	return <Icon size={25} onClick={goHome} />;
}
