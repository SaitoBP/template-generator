import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { randomNumbersArray } from './randomNumbersArray';

type AppState = {
	digits: number[];
	level: number;
	animation: number;
	amount: number;
};

type UseAppStateStore = {
	appState: AppState;
	setAppState: (appState: AppState) => void;
};

/**
 * This is a store that holds the state of the game
 */
export const useAppStateStore = create<UseAppStateStore>()(
	subscribeWithSelector((set) => ({
		appState: {
			amount: 0,
			animation: 0,
			digits: randomNumbersArray(5),
			level: 0
		},

		setAppState: (appState: AppState) => set({ appState })
	}))
);
