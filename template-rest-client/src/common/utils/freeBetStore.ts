import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { FreeBet } from '~common/types';

type UseFreeBetStore = {
	freeBet: FreeBet[];
	setFreeBet: (freeBet: FreeBet[]) => void;
};

export const useFreeBetStore = create<UseFreeBetStore>()(
	subscribeWithSelector((set) => ({
		// freeBet: [],
		freeBet: [
			{
				__typename: 'reward',
				_id: '5f9b5b9b0b9b9b0b9b0b9b0b',
				betAmount: 100,
				betCount: 1,
				currency: 'EUR',
				endDate: '2020-10-31T22:00:00.000Z',
				operatorId: '5f9b5b9b0b9b9b0b9b0b9b0b',
				presetBetAmountId: '5f9b5b9b0b9b9b0b9b0b9b0b',
				startDate: '2020-10-01T22:00:00.000Z',
				status: 'active',
				userId: '5f9b5b9b0b9b9b0b9b0b9b0b'
			}
		],
		setFreeBet: (freeBet: FreeBet[]) => set({ freeBet })
	}))
);
