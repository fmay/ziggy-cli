import axios from 'axios';
/**
 * Create API client
 */
export function createApiClient(config) {
    const client = axios.create({
        baseURL: `${config.apiUrl}:${config.port}/api`,
        headers: {
            'Content-Type': 'application/json',
            Cookie: `tenantId=##solo##; provider=email; accessToken=${config.authToken || ''}; userId=${config.userName || ''}; password=${config.password || ''};}`,
        },
    });
    if (config.authToken) {
        client.defaults.headers.common['Authorization'] = `Bearer ${config.authToken}`;
    }
    return client;
}
//# sourceMappingURL=api.js.map