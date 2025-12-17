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
export function createAuthRemoveCommand() {
    return new Command('remove')
        .description('Remove a server configuration')
        .argument('[serverName]', 'Name of the server to remove')
        .action(async (serverName) => {
        // Load server configurations
        const serverConfig = loadServerConfig();
        const serverNames = Object.keys(serverConfig);
        // Check if any servers are configured
        if (serverNames.length === 0) {
            consoleMsg('No servers configured.', ColorEnum.ERROR);
            process.exit(1);
        }
        let selectedServer;
        // If server name was provided as argument
        if (serverName) {
            // Check if the server exists
            if (!serverConfig[serverName]) {
                consoleMsg(`Server "${serverName}" not found.`, ColorEnum.ERROR);
                consoleMsg('\nAvailable servers:');
                serverNames.forEach(name => consoleMsg(`  - ${name}`));
                consoleMsg('');
                process.exit(1);
            }
            selectedServer = serverName;
        }
        else {
            // Prompt user to select a server
            const { server } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'server',
                    message: 'Select a server to remove:',
                    choices: serverNames.map(name => ({
                        name: `${name} (${serverConfig[name].apiUrl}:${serverConfig[name].port})`,
                        value: name,
                    })),
                },
            ]);
            selectedServer = server;
        }
        // Ask for confirmation
        const { confirmed } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmed',
                message: `Are you sure you want to remove server "${selectedServer}"?`,
                default: false,
            },
        ]);
        if (!confirmed) {
            consoleMsg('\nRemoval cancelled.', ColorEnum.WARNING);
            consoleMsg('');
            process.exit(0);
        }
        // Remove the server from the configuration
        delete serverConfig[selectedServer];
        // Save the updated configuration
        saveServerConfig(serverConfig);
        consoleMsg(`\n✓ Server "${selectedServer}" has been removed`, ColorEnum.SUCCESS);
        consoleMsg('');
    });
}
//# sourceMappingURL=auth-remove.js.map