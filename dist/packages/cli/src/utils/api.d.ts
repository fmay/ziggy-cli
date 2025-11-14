import { AxiosInstance } from 'axios';
export interface ZiggyConfig {
    apiUrl: string;
    port: string;
    authToken?: string;
    userName?: string;
    password?: string;
}
export declare const EmptyZiggyConfig: ZiggyConfig;
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
/**
 * Register a plugin with the Ziggy server
 */
export declare function registerPlugin(config: ZiggyConfig, request: RegisterPluginRequest): Promise<RegisterPluginResponse>;
