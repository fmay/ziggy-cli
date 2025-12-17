import { ZiggyConfig } from './api.js';
/**
 * Get the path to the global Ziggy config directory
 */
export declare function getGlobalConfigDir(): string;
/**
 * Get the path to the global Ziggy config file
 */
export declare function getGlobalConfigPath(isPluginAuth: boolean): string;
/**
 * Ensure the global config directory exists
 */
export declare function ensureGlobalConfigDir(): void;
/**
 * Load configuration for a specific plugin from global config
 */
export declare function loadPluginConfig(pluginName?: string): Promise<ZiggyConfig | null>;
/**
 * Save configuration for a specific plugin to global config
 */
export declare function savePluginConfig(config: ZiggyConfig, pluginName?: string): Promise<void>;
