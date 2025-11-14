import { AxiosInstance } from 'axios';
import { Api } from 'openapi/Api.js';
import { ZiggyConfig } from './api.js';
export declare class CliCore {
    private client;
    private config;
    validateFolder(noLoadConfig?: boolean): Promise<void>;
    loadConfig(config?: ZiggyConfig | null): Promise<any>;
    setConfig(config: ZiggyConfig): void;
    getConfig(): ZiggyConfig;
    getClient(): AxiosInstance;
    health(): Promise<boolean>;
    login(useConfig?: ZiggyConfig): Promise<boolean>;
    /**
     * Get a configured OpenAPI client instance
     * @returns Api instance with full type safety for all endpoints
     */
    getApiClient(): Api<unknown>;
}
