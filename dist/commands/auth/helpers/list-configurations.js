import { ColorEnum, consoleMsg } from '../../../utils/console-msg.js';
import { loadGlobalConfig } from './config-loader.js';
import { printTable } from './table-printer.js';
/**
 * List all configured servers and plugins in table format
 */
export function listConfigurations() {
    const serverConfig = loadGlobalConfig(false);
    const pluginConfig = loadGlobalConfig(true);
    // Display Servers section
    consoleMsg('');
    const serverEntries = Object.entries(serverConfig);
    if (serverEntries.length === 0) {
        consoleMsg('No servers configured', ColorEnum.WARNING);
    }
    else {
        printTable(serverEntries, 'Server');
    }
    // Display Plugins section
    consoleMsg('');
    const pluginEntries = Object.entries(pluginConfig);
    if (pluginEntries.length === 0) {
        consoleMsg('No plugins configured', ColorEnum.WARNING);
    }
    else {
        printTable(pluginEntries, 'Plugin');
    }
    consoleMsg('');
}
//# sourceMappingURL=list-configurations.js.map