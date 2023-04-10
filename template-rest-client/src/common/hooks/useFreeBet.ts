import useAxios from 'axios-hooks';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GameLoaderResponse } from '~common/types';
import { useFreeBetStore } from '~common/utils';

export function useRewards() {
	const { sessionId, gameMode } = useLoaderData() as GameLoaderResponse;
	const { freeBet, setFreeBet } = useFreeBetStore();

	const [data] = useAxios({
		url: '/freebets/rewards',
		method: 'post',
		data: { sessionId }
	});

	useEffect(() => {
		if (gameMode !== 'for_real') return;

		setFreeBet(data?.data?.rewards ?? []);
	}, [gameMode]);

	return {
		freeBet: freeBet,
		isLoading: data.loading,
		error: data.error
	};
}
