import { Command } from 'commander';
import { createPluginsListCommand } from './plugins-list.js';
export function createPluginCommand() {
    const plugin = new Command('plugin')
        .description('Manage Ziggy plugins');
    // Add subcommands
    plugin.addCommand(createPluginsListCommand());
    return plugin;
}
//# sourceMappingURL=plugin.js.map