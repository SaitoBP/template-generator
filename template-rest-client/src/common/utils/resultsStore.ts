import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

type Results = {
	winAmount: string | number;
	winNumber?: string | null;
	matchResult: number | null;
};

type UseResultsStore = {
	results: Results;
	setResults: (results: Results) => void;
};

/**
 * This is a store that holds the results of the game
 */
export const useResultsStore = create<UseResultsStore>()(
	subscribeWithSelector((set) => ({
		results: {
			winAmount: '0',
			winNumber: null,
			matchResult: null
		},

		setResults: (results: Results) => set({ results })
	}))
);
