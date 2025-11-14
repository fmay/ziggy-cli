import { Command } from 'commander';
import { createPluginBlockAddCommand } from './plugin-block-add.js';
import { createPluginBlockRemoveCommand } from './plugin-block-remove.js';
import { createPluginBlockRenameCommand } from './plugin-block-rename.js';
export function createPluginBlockCommand() {
    const block = new Command('block')
        .description('Manage blocks within a Ziggy plugin');
    // Add subcommands
    block.addCommand(createPluginBlockAddCommand());
    block.addCommand(createPluginBlockRemoveCommand());
    block.addCommand(createPluginBlockRenameCommand());
    return block;
}
//# sourceMappingURL=plugin-block.js.map