import * as process from 'node:process';
import { core } from '../index.js';
import { createApiClient } from './api.js';
import { getApiClient } from './openapi-client.js';
import { ColorEnum, consoleMsg } from './console-msg.js';
import { loadPackageConfig, savePackageConfig } from './ziggyrc.js';
import { validateFolder } from './validate-folder.js';
export class CliCore {
    client = null;
    config = {
        apiUrl: '',
        authToken: '',
        port: '3000',
    };
    async init() {
        if (!validateFolder())
            process.exit(1);
        await this.loadConfig();
    }
    async loadConfig(config) {
        // If no config, validate current path and load from .ziggyrc.json
        if (!config)
            config = await loadPackageConfig();
        this.config = config;
        if (!config)
            return;
        // Create axios client
        this.client = createApiClient(config);
    }
    setConfig(config) {
        this.config = config;
    }
    getConfig() {
        return this.config;
    }
    getClient() {
        return this.client;
    }
    async health() {
        if (!this.client)
            throw new Error('No client found');
        try {
            await this.client.get('/health');
            return true;
        }
        catch (error) {
            consoleMsg('Unable to get response from the Ziggy server');
            throw error;
        }
    }
    async login(useConfig) {
        if (useConfig) {
            this.client = createApiClient(useConfig);
        }
        const config = useConfig || this.config;
        if (!config?.userName)
            throw new Error('No user name available');
        // Login
        const api = core.getApiClient();
        const response = await api.auth.authLogin({
            username: config.userName,
            password: config.password,
        });
        // const response = await core.apiPost('auth/login', {
        //   username: config.userName,
        //   password: config.password,
        // })
        if (!response.data.token) {
            const msg = `Authorization failed for ${config?.apiUrl}:${config?.port} ${config?.userName}`;
            consoleMsg(msg, ColorEnum.ERROR);
            await savePackageConfig(config);
            return false;
        }
        // Save the token to .zigggyrc.json
        config.authToken = response.data.token;
        await savePackageConfig(config);
        this.client = createApiClient(config);
        return true;
    }
    /**
     * Get a configured OpenAPI client instance
     * @returns Api instance with full type safety for all endpoints
     */
    getApiClient() {
        if (!this.config)
            throw new Error('No config available. Call init() or loadConfig() first.');
        return getApiClient(this.config);
    }
}
//# sourceMappingURL=cli-core.class.js.map