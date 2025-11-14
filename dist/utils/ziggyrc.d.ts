import { ZiggyConfig } from './api.js';
/**
 * Load Ziggy configuration from global config (~/.ziggy/config.json)
 */
export declare function loadPackageConfig(): Promise<ZiggyConfig | null>;
/**
 * Save Ziggy configuration to global config (~/.ziggy/config.json)
 */
export declare function savePackageConfig(config: ZiggyConfig): Promise<void>;
