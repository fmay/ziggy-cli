import { createApiClient } from './api.js';
export async function serverHealth(config) {
    const client = createApiClient(config);
    try {
        await client.get('/health');
        return client;
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=server-health.js.map