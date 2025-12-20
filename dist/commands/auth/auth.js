import { Command } from 'commander';
import inquirer from 'inquirer';
import { core } from '../../index.js';
import { ColorEnum, consoleMsg } from '../../utils/console-msg.js';
import { promptAuthCredentials } from '../../utils/auth-prompt.js';
import { listConfigurations } from './helpers/list-configurations.js';
import { createAuthUseCommand } from './auth-use.js';
import { createAuthRemoveCommand } from './auth-remove.js';
/**
 * Create the auth command for authenticating with Ziggy servers or plugins
 */
export function createAuthCommand() {
    const auth = new Command('auth')
        .description('Authorize Ziggy and connect to an instance.')
        .option('-l, --list', 'List all configured servers and plugins')
        .action(async (options) => {
        // Handle list option: display all configurations and exit
        if (options.list) {
            listConfigurations();
            return;
        }
        // Determine authentication type (server or plugin)
        const { authType } = await inquirer.prompt([
            {
                type: 'input',
                name: 'authType',
                message: 'Are you authenticating for a Plugin (P) or Server (S)?',
                validate: (input) => {
                    const normalized = input.toLowerCase().trim();
                    return normalized === 'p' || normalized === 's'
                        ? true
                        : 'Please enter either P for Plugin or S for Server';
                },
            },
        ]);
        const isPluginAuth = authType.toLowerCase().trim() === 'p';
        // Get server name for non-plugin authentication
        let serverName;
        if (!isPluginAuth) {
            const response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'serverName',
                    message: 'Provide a friendly name for this server. Alphanumeric characters only. Do not use spaces.',
                    validate: (input) => {
                        if (input.length < 4) {
                            return 'Server name must be at least 4 characters';
                        }
                        if (/\s/.test(input)) {
                            return 'Server name cannot contain spaces';
                        }
                        if (!/^[a-zA-Z0-9]+$/.test(input)) {
                            return 'Server name must be alphanumeric only';
                        }
                        if (/^\d/.test(input)) {
                            return 'Server name cannot start with a number';
                        }
                        return true;
                    },
                },
            ]);
            serverName = response.serverName;
        }
        // Validate plugin folder structure if authenticating for a plugin
        if (isPluginAuth) {
            await core.validateFolder(true);
        }
        consoleMsg('');
        // Collect authentication credentials
        const newConfig = await promptAuthCredentials();
        // Configure authentication type and server name
        newConfig.isPluginAuth = isPluginAuth;
        if (!isPluginAuth && serverName) {
            newConfig.serverName = serverName;
        }
        // Save configuration
        core.setConfig(newConfig);
        // Attempt login
        const loginSuccessful = await core.login(newConfig);
        if (!loginSuccessful) {
            return;
        }
        // Display success message
        consoleMsg('\nAuthorization was successful', ColorEnum.SUCCESS);
        consoleMsg('');
    });
    // Add subcommands
    auth.addCommand(createAuthUseCommand());
    auth.addCommand(createAuthRemoveCommand());
    return auth;
}
//# sourceMappingURL=auth.js.map