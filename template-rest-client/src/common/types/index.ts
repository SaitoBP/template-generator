export const gameModes = ['for_real', 'for_fun'] as const;

export type GameMode = (typeof gameModes)[number];

export const currencies = ['USD', 'BRL', 'PYG', 'TZS', 'FUN', 'ARS'] as const;

export type Currency = (typeof currencies)[number];

export type OperatorConfig = {
	operatorId: number;
	maintenance: boolean;
	operatorCode: string;
	theme: string;
	showHeader: boolean;
	maxBet: number;
	minBet: number;
	maxProfit: number;
	hasReward: boolean;
	gameMode: string;
	example: GameMode;
};

export type StartSessionResponse = {
	sessionId: string;
	userName: string;
	balance: number;
	language: string;
	currency: Currency;
	homeUrl: string;
	refreshUrl: string;
	operatorConfig: OperatorConfig;
	hasReward: boolean;
	gameMode: GameMode;
	possibleBets: number[];
};

export type GameLoaderResponse = Omit<StartSessionResponse, 'balance'>;

/**
 * Video status for the game
 */
export type VideoStatus = 'reproduced' | 'not_reproduced';

/**
 * Audio status for the game
 */
export type AudioStatus = 'muted' | 'unmuted';

/**
 * User settings for the game
 */
export type UserSettings = {
	/**
	 * Whether the video has been reproduced or not
	 */
	videoStatus: VideoStatus;

	/**
	 * Whether the audio is muted or not
	 */
	audioStatus: AudioStatus;

	/**
	 * The volume of the audio
	 */
	audioVolume: number;
};

/**
 * Type for the response of the balance endpoint ('/balance')
 */
export type BalanceResponse = {
	balance: number;
};

/**
 * The round history for a bet
 */
export type RoundHistory = {
	createdAt: string;
	id: string;
	sessionId: string;
	profit: number;
};

/**
 * Type for the response of the bet endpoint ('/bet')
 */
export type RoundHistoryResponse = {
	rounds: RoundHistory[];
};

/**
 * The reward that the user can get from the free bets ('/freebets/rewards')
 */
export type FreeBet = {
	__typename: 'reward';
	_id?: string | null;
	betAmount?: number;
	betCount?: number;
	betCountUsed?: number;
	currency?: string;
	endDate?: string;
	operatorId?: string;
	presetBetAmountId?: string;
	startDate?: string;
	status?: string;
	userId?: string;
};
