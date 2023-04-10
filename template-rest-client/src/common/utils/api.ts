import axios from 'axios';
import { configure } from 'axios-hooks';
import { handleEndpoints } from '~common/configs';

export const api = axios.create({
	baseURL: handleEndpoints(window.location.hostname).apiURL
});

configure({ axios: api });
