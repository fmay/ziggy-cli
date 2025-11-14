import { Command } from 'commander';
import { createPluginListCommand } from './plugin-list.js';
import { createPluginCreateCommand } from './plugin-create.js';
import { createPluginRegisterCommand } from './plugin-register.js';
import { createPluginUnregisterCommand } from './plugin-unregister.js';
import { createPluginBuildCommand } from './plugin-build.js';
import { createPluginBlockCommand } from './plugin-block.js';
export function createPluginCommand() {
    const plugin = new Command('plugin')
        .description('Manage Ziggy plugins');
    // Add subcommands
    plugin.addCommand(createPluginListCommand());
    plugin.addCommand(createPluginCreateCommand());
    plugin.addCommand(createPluginRegisterCommand());
    plugin.addCommand(createPluginUnregisterCommand());
    plugin.addCommand(createPluginBuildCommand());
    plugin.addCommand(createPluginBlockCommand());
    return plugin;
}
//# sourceMappingURL=_plugin.js.map