import { createApiClient } from './api.js';
export async function setAxiosClient(config) {
    const client = createApiClient(config);
    try {
        await client.get('/health');
        return client;
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=set-axios-client.js.map