import { AxiosInstance } from 'axios';
export interface ZiggyConfig {
    apiUrl: string;
    port: string;
    authToken?: string;
    userName?: string;
    password?: string;
    isPluginAuth?: boolean;
    serverName?: string;
}
export interface RegisterPluginRequest {
    type: 'local' | 'npm';
    source: string;
    name?: string;
    version?: string;
    author?: string;
}
export interface RegisterPluginResponse {
    uuid: string;
    name: string;
    version: string;
    enabled: boolean;
}
/**
 * Create API client
 */
export declare function createApiClient(config: ZiggyConfig): AxiosInstance;
