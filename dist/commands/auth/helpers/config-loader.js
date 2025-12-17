import { readFileSync, existsSync } from 'fs';
import { getGlobalConfigPath } from '../../../utils/global-config.js';
/**
 * Load the entire global configuration file for servers or plugins
 * @param isPluginAuth - true for plugins (config.json), false for servers (zinstances.json)
 * @returns GlobalConfig object or empty object if file doesn't exist or has errors
 */
export function loadGlobalConfig(isPluginAuth) {
    const filePath = getGlobalConfigPath(isPluginAuth);
    try {
        if (!existsSync(filePath)) {
            return {};
        }
        const configRaw = readFileSync(filePath, 'utf8');
        return JSON.parse(configRaw);
    }
    catch (_error) {
        return {};
    }
}
//# sourceMappingURL=config-loader.js.map