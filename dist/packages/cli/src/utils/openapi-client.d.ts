import { Api } from 'openapi/Api.js';
import { ZiggyConfig } from './api.js';
/**
 * Creates a configured OpenAPI client instance
 * @param config - Ziggy configuration (apiUrl, port, authToken, etc.)
 * @returns Configured Api instance with authentication
 */
export declare function getApiClient(config: ZiggyConfig): Api<unknown>;
