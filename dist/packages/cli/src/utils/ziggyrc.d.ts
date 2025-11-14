import { ZiggyConfig } from './api.js';
/**
 * Load Ziggy configuration from .ziggyrc.json
 */
export declare function loadPackageConfig(): Promise<ZiggyConfig | null>;
/**
 * Save Ziggy configuration to .ziggyrc.json
 */
export declare function savePackageConfig(config: ZiggyConfig): Promise<void>;
