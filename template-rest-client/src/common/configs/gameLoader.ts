import { LoaderFunctionArgs } from 'react-router-dom';
import { GameLoaderResponse, FreeBet, UserSettings } from '~common/types';
import {
	errorBoundary,
	getQueryParams,
	getStorage,
	setStorage,
	startSession,
	useAppStateStore,
	useBalanceStore,
	useFreeBetStore,
	useUserSettingsStore
} from '~common/utils';
import i18n from './i18n';
import { freeBetKey, userSettingsKey } from './storageKey';

export async function gameLoader(args: LoaderFunctionArgs) {
	const { request } = args;

	const { session } = getQueryParams(request);

	if (!session) {
		throw new Error('no-session');
	}

	const { setBalance } = useBalanceStore.getState();
	const { appState, setAppState } = useAppStateStore.getState();

	const response = await startSession(session);

	/**
	 * We create a key to store the user settings and in the local storage
	 * using the user name as a suffix
	 */
	const userSettingsByUserKey = `${userSettingsKey}_${response.userName}`;
	const storedUserSettings = getStorage<UserSettings>({ key: userSettingsByUserKey });

	/**
	 * If the user has settings stored in the local storage, we set them
	 * to the store, otherwise we use the default settings established in
	 * the store
	 */
	if (storedUserSettings) {
		useUserSettingsStore.setState({ userSettings: storedUserSettings });
	}

	/**
	 * We subscribe to the store to save the user settings in the local storage
	 * every time the store changes
	 *
	 * We don't need to unsubscribe because the store will be destroyed when
	 * the user leaves the page
	 */
	useUserSettingsStore.subscribe(() => {
		const { userSettings } = useUserSettingsStore.getState();

		setStorage({ key: userSettingsByUserKey, value: userSettings });
	});

	/**
	 * We create a key to store the user rewards and in the local storage
	 * using the user name as a suffix
	 */
	const storedFreeBetsByUserKey = `${freeBetKey}_${response.userName}`;
	const storedFreeBets = getStorage<FreeBet[]>({ key: storedFreeBetsByUserKey });

	/**
	 * If the user has rewards stored in the local storage, we set them
	 * to the store, otherwise we use the default rewards established in
	 * the store
	 */
	if (storedFreeBets) {
		useFreeBetStore.setState({ freeBet: storedFreeBets });
	}

	/**
	 * We subscribe to the store to save the rewards in the local storage
	 * every time the store changes
	 *
	 * We don't need to unsubscribe because the store will be destroyed when
	 * the user leaves the page
	 */
	useFreeBetStore.subscribe(() => {
		const { freeBet } = useFreeBetStore.getState();

		setStorage({ key: storedFreeBetsByUserKey, value: freeBet });
	});

	errorBoundary(response);
	setBalance(response.balance);
	setAppState({ ...appState, amount: response.possibleBets[0] });

	i18n.changeLanguage(response.language || 'en');

	const gameLoaderResponse: GameLoaderResponse = {
		currency: response?.currency,
		gameMode: response?.gameMode,
		hasReward: response?.hasReward,
		homeUrl: response?.homeUrl,
		language: response?.language,
		operatorConfig: response?.operatorConfig,
		sessionId: response?.sessionId,
		userName: response?.userName,
		refreshUrl: response?.refreshUrl,
		possibleBets: response?.possibleBets
	};

	return gameLoaderResponse;
}
