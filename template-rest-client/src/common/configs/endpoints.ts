export type ApiConfig = {
	apiURL: string;
};

const configDev: ApiConfig = {
	apiURL: '$$API_URL$$'
	// apiURL: 'https://dev-api-bet-secret.sysgaming.dev'
};

/**
 * Handle the endpoints based on the hostname
 * and return the correct config
 */
export function handleEndpoints(hostname: string): ApiConfig {
	if (hostname === 'dev-$$GAME_NAME$$.sysgaming.dev') {
		return configDev;
	}

	return configDev;
}
