import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { UserSettings } from '~common/types';

type UseUserSettingsStore = {
	userSettings: UserSettings;
	setUserSettings: (userSettings: UserSettings) => void;
};

export const useUserSettingsStore = create<UseUserSettingsStore>()(
	subscribeWithSelector((set) => ({
		userSettings: {
			audioStatus: 'unmuted',
			audioVolume: 0,
			videoStatus: 'not_reproduced'
		},

		setUserSettings: (userSettings: UserSettings) => set({ userSettings })
	}))
);
