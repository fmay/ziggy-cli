export interface GlobalConfig {
    [name: string]: {
        apiUrl: string;
        port: string;
        authToken?: string;
        userName?: string;
        password?: string;
        isUsed?: boolean;
    };
}
/**
 * Load the entire global configuration file for servers or plugins
 * @param isPluginAuth - true for plugins (config.json), false for servers (zinstances.json)
 * @returns GlobalConfig object or empty object if file doesn't exist or has errors
 */
export declare function loadGlobalConfig(isPluginAuth: boolean): GlobalConfig;
