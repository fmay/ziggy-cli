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
/**
 * Set a server as the active/used server
 */
function setServerAsUsed(serverName, config) {
    // Remove isUsed from all servers
    Object.keys(config).forEach(name => {
        delete config[name].isUsed;
    });
    // Set isUsed: true for the selected server
    config[serverName].isUsed = true;
}
export function createAuthUseCommand() {
    return new Command('use')
        .description('Set the active server for Ziggy CLI operations')
        .argument('[serverName]', 'Name of the server to use')
        .action(async (serverName) => {
        // Load server configurations
        const serverConfig = loadServerConfig();
        const serverNames = Object.keys(serverConfig);
        // Check if any servers are configured
        if (serverNames.length === 0) {
            consoleMsg('No servers configured. Run "ziggy auth" to add a server first.', ColorEnum.ERROR);
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
                    message: 'Select a server to use:',
                    choices: serverNames.map(name => ({
                        name: `${name} (${serverConfig[name].apiUrl}:${serverConfig[name].port})`,
                        value: name,
                    })),
                },
            ]);
            selectedServer = server;
        }
        // Set the selected server as used
        setServerAsUsed(selectedServer, serverConfig);
        // Save the updated configuration
        saveServerConfig(serverConfig);
        consoleMsg(`\n✓ Server "${selectedServer}" is now active`, ColorEnum.SUCCESS);
        consoleMsg('');
    });
}
//# sourceMappingURL=auth-use.js.map