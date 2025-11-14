import { Api } from 'openapi/Api.js';
/**
 * Creates a configured OpenAPI client instance
 * @param config - Ziggy configuration (apiUrl, port, authToken, etc.)
 * @returns Configured Api instance with authentication
 */
export function getApiClient(config) {
    const baseUrl = `${config.apiUrl}:${config.port}/api`;
    const api = new Api({
        baseUrl,
        customFetch: async (url, init) => {
            // Add authentication headers
            const modifiedInit = {
                ...init,
                headers: {
                    ...init?.headers,
                    'Content-Type': 'application/json',
                    'Authorization': config.authToken ? `Bearer ${config.authToken}` : '',
                    'Cookie': `tenantId=##solo##; provider=email; accessToken=${config.authToken || ''}; userId=${config.userName || ''}; password=${config.password || ''};`,
                },
            };
            const response = await fetch(url, modifiedInit);
            // Handle errors
            if (!response.ok) {
                const errorText = await response.text().catch(() => 'Unknown error');
                throw new Error(`API Error (${response.status}): ${errorText}`);
            }
            return response;
        },
    });
    return api;
}
//# sourceMappingURL=openapi-client.js.map