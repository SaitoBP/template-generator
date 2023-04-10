import { StartSessionResponse } from '~common/types';
import { api } from './api';

export async function startSession(session: string) {
	const { data } = await api.post<StartSessionResponse>('/start-session', {
		sessionId: session.replace('/', '')
	});

	return data;
}
