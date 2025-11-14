import { homedir } from 'os';
import path from 'path';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { decrypt, encrypt } from './crypto.js';
import { consoleMsg } from './console-msg.js';
/**
 * Get the path to the global Ziggy config directory
 */
export function getGlobalConfigDir() {
    return path.join(homedir(), '.ziggy');
}
/**
 * Get the path to the global Ziggy config file
 */
export function getGlobalConfigPath() {
    return path.join(getGlobalConfigDir(), 'config.json');
}
/**
 * Ensure the global config directory exists
 */
export function ensureGlobalConfigDir() {
    const configDir = getGlobalConfigDir();
    if (!existsSync(configDir)) {
        mkdirSync(configDir, { recursive: true });
    }
}
/**
 * Load the entire global configuration file
 */
function loadGlobalConfig() {
    const filePath = getGlobalConfigPath();
    try {
        if (!existsSync(filePath)) {
            return {};
        }
        const configRaw = readFileSync(filePath, 'utf8');
        return JSON.parse(configRaw);
    }
    catch (error) {
        console.error('Error loading global config:', error.message);
        return {};
    }
}
/**
 * Save the entire global configuration file
 */
function saveGlobalConfig(config) {
    ensureGlobalConfigDir();
    const filePath = getGlobalConfigPath();
    writeFileSync(filePath, JSON.stringify(config, null, 2));
}
/**
 * Get the plugin name from package.json in current directory
 */
function getPluginName() {
    try {
        const packageRaw = readFileSync('./package.json', 'utf8');
        const packageObj = JSON.parse(packageRaw);
        return packageObj.name;
    }
    catch {
        throw new Error('Unable to read plugin name from package.json');
    }
}
/**
 * Load configuration for a specific plugin from global config
 */
export async function loadPluginConfig(pluginName) {
    try {
        // If no plugin name provided, get it from package.json
        const name = pluginName || getPluginName();
        const globalConfig = loadGlobalConfig();
        const pluginConfig = globalConfig[name];
        if (!pluginConfig) {
            return null;
        }
        // Decrypt sensitive fields
        return {
            apiUrl: pluginConfig.apiUrl,
            port: pluginConfig.port,
            authToken: pluginConfig.authToken ? await decrypt(pluginConfig.authToken) : '',
            userName: pluginConfig.userName ? await decrypt(pluginConfig.userName) : '',
            password: pluginConfig.password ? await decrypt(pluginConfig.password) : '',
        };
    }
    catch {
        return null;
    }
}
/**
 * Save configuration for a specific plugin to global config
 */
export async function savePluginConfig(config, pluginName) {
    try {
        // If no plugin name provided, get it from package.json
        const name = pluginName || getPluginName();
        if (!config.userName || !config.password) {
            consoleMsg('User name and password must both be present to save configuration');
            throw new Error('User name and password must both be present to save configuration');
        }
        // Load existing global config
        const globalConfig = loadGlobalConfig();
        // Encrypt sensitive fields
        const encryptedConfig = {
            apiUrl: config.apiUrl,
            port: config.port,
            authToken: config.authToken ? await encrypt(config.authToken) : '',
            userName: await encrypt(config.userName),
            password: await encrypt(config.password),
        };
        // Update config for this plugin
        globalConfig[name] = encryptedConfig;
        // Save back to file
        saveGlobalConfig(globalConfig);
    }
    catch (error) {
        console.error('Error saving plugin config:', error.message);
        throw error;
    }
}
//# sourceMappingURL=global-config.js.map