import useAxios from 'axios-hooks';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { updateBalanceInterval } from '~common/configs';
import { useFormatNumber } from '~common/hooks';
import { BalanceResponse, GameLoaderResponse } from '~common/types';
import { useBalanceStore } from '~common/utils';

let interval: number;

export function useBalance() {
	const { currency, sessionId } = useLoaderData() as GameLoaderResponse;
	const { money } = useFormatNumber({ currency });

	const [balance, setBalance] = useBalanceStore(
		(state) => [state.balance, state.setBalance],
		shallow
	);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, getBalance] = useAxios(
		{
			url: 'balance',
			method: 'post',
			data: { sessionId }
		},
		{ manual: true }
	);

	const balanceValue = money(balance) || 0;

	useEffect(() => {
		interval = setInterval(() => {
			getBalance().then(({ data }: { data: BalanceResponse }) => {
				setBalance(data.balance);
			});
		}, updateBalanceInterval);

		return () => clearInterval(interval);
	}, []);

	return { balanceValue };
}
