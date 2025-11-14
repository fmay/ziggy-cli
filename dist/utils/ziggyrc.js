import { loadPluginConfig, savePluginConfig } from './global-config.js';
/**
 * Load Ziggy configuration from global config (~/.ziggy/config.json)
 */
export async function loadPackageConfig() {
    return await loadPluginConfig();
}
/**
 * Save Ziggy configuration to global config (~/.ziggy/config.json)
 */
export async function savePackageConfig(config) {
    await savePluginConfig(config);
}
//# sourceMappingURL=ziggyrc.js.map