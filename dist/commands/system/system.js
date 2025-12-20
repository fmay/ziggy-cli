import { Command } from 'commander';
import { createSystemBackupCommand } from './system-backup.js';
import { createSystemReorgCommand } from './system-reorg.js';
/**
 * Create the system command for system-level operations
 */
export function createSystemCommand() {
    const system = new Command('system')
        .description('System-level operations for Ziggy');
    // Add subcommands
    system.addCommand(createSystemBackupCommand());
    system.addCommand(createSystemReorgCommand());
    return system;
}
//# sourceMappingURL=system.js.map