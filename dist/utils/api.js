import axios from 'axios';
export const EmptyZiggyConfig = {
    apiUrl: '',
    port: '',
};
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
/**
 * Register a plugin with the Ziggy server
 */
export async function registerPlugin(config, request) {
    const client = createApiClient(config);
    const response = await client.post('/api/plugins/register', request);
    return response.data;
}
//# sourceMappingURL=api.js.map