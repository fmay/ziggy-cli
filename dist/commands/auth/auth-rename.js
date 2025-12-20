import { Command } from 'commander';
import inquirer from 'inquirer';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { ColorEnum, consoleMsg } from '../../utils/console-msg.js';
import { getGlobalConfigPath, ensureGlobalConfigDir } from '../../utils/global-config.js';
/**
 * Load the server configuration file
 */
function loadServerConfig() {
    const filePath = getGlobalConfigPath(false); // false = server config (zinstances.json)
    try {
        if (!existsSync(filePath)) {
            return {};
        }
        const configRaw = readFileSync(filePath, 'utf8');
        return JSON.parse(configRaw);
    }
    catch (error) {
        console.error('Error loading server config:', error.message);
        return {};
    }
}
/**
 * Save the server configuration file
 */
function saveServerConfig(config) {
    ensureGlobalConfigDir();
    const filePath = getGlobalConfigPath(false); // false = server config (zinstances.json)
    writeFileSync(filePath, JSON.stringify(config, null, 2));
}
export function createAuthRenameCommand() {
    return new Command('rename')
        .description('Rename a server configuration')
        .argument('[from]', 'Current name')
        .argument('[to]', 'New name')
        .action(async (from, to) => {
        // Load server configurations
        const serverConfig = loadServerConfig();
        const serverNames = Object.keys(serverConfig);
        // Check if any servers are configured
        if (serverNames.length === 0) {
            consoleMsg('No servers configured.', ColorEnum.ERROR);
            process.exit(1);
        }
        let fromServer;
        let toServer;
        // If 'from' server name was provided as argument
        if (from) {
            // Check if the source server exists
            if (!serverConfig[from]) {
                consoleMsg(`Server "${from}" not found.`, ColorEnum.ERROR);
                consoleMsg('\nAvailable servers:');
                serverNames.forEach(name => consoleMsg(`  - ${name}`));
                consoleMsg('');
                process.exit(1);
            }
            fromServer = from;
        }
        else {
            // Prompt user to select a server to rename
            const { server } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'server',
                    message: 'Select a server to rename:',
                    choices: serverNames.map(name => ({
                        name: `${name} (${serverConfig[name].apiUrl}:${serverConfig[name].port})`,
                        value: name,
                    })),
                },
            ]);
            fromServer = server;
        }
        // If 'to' name was provided as argument
        if (to) {
            toServer = to;
        }
        else {
            // Prompt user for the new name
            const { newName } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'newName',
                    message: 'Enter the new name for the server:',
                    validate: (input) => {
                        if (!input || input.trim() === '') {
                            return 'Server name cannot be empty';
                        }
                        return true;
                    },
                },
            ]);
            toServer = newName.trim();
        }
        // Check if the target server name already exists
        if (serverConfig[toServer]) {
            consoleMsg(`Server "${toServer}" already exists. Cannot rename.`, ColorEnum.ERROR);
            consoleMsg('');
            process.exit(1);
        }
        // Ask for confirmation
        const { confirmed } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmed',
                message: `Are you sure you want to rename server "${fromServer}" to "${toServer}"?`,
                default: true,
            },
        ]);
        if (!confirmed) {
            consoleMsg('\nRename cancelled.', ColorEnum.WARNING);
            consoleMsg('');
            process.exit(0);
        }
        // Rename the server by copying to new name and deleting old
        serverConfig[toServer] = { ...serverConfig[fromServer] };
        delete serverConfig[fromServer];
        // Save the updated configuration
        saveServerConfig(serverConfig);
        consoleMsg(`\n✓ Server "${fromServer}" has been renamed to "${toServer}"`, ColorEnum.SUCCESS);
        consoleMsg('');
    });
}
//# sourceMappingURL=auth-rename.js.map