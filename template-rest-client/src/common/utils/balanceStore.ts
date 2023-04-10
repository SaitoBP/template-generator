import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

type UseBalanceStore = {
	balance: number;
	setBalance: (balance: number) => void;
};

/**
 * This is a store that holds the balance of the user
 */
export const useBalanceStore = create<UseBalanceStore>()(
	subscribeWithSelector((set) => ({
		balance: 0,
		setBalance: (balance: number) => set({ balance })
	}))
);
