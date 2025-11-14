import { Command } from 'commander';
import inquirer from 'inquirer';
import { core } from '../../index.js';
import { ColorEnum, consoleMsg } from '../../utils/console-msg.js';
export function createAuthCommand() {
    return new Command('auth')
        .description('Authorize Ziggy and connect to an instance')
        .action(async () => {
        consoleMsg('');
        // Enter the ziggy url
        const { url } = await inquirer.prompt([
            {
                type: 'input',
                name: 'url',
                message: 'Enter the Ziggy Server URL',
                default: 'http://localhost',
            },
        ]);
        // Get the Ziggy API port
        const { port } = await inquirer.prompt([
            {
                type: 'number',
                name: 'port',
                message: 'Port',
                default: '3000',
                validate: (input) => {
                    const num = parseInt(input, 10);
                    if (isNaN(num)) {
                        return 'Please enter a valid number';
                    }
                    if (num < 1 || num > 65535) {
                        return 'Port must be between 1 and 65535';
                    }
                    return true;
                },
            },
        ]);
        // Enter the username
        const { userName } = await inquirer.prompt([
            {
                type: 'input',
                name: 'userName',
                message: 'Enter your user name',
                default: '3bfred@gmail.com',
            },
        ]);
        // Enter password
        const { password } = await inquirer.prompt([
            {
                type: 'password',
                name: 'password',
                message: 'Password',
                default: 'Qplates99#Qplates99#',
                mask: '*',
            },
        ]);
        // Update config for health check
        const newConfig = {
            apiUrl: url,
            port: port.toString(),
            authToken: '',
            userName: userName,
            password: password,
        };
        // Set configuration
        core.setConfig(newConfig);
        // Login
        if (!await core.login(newConfig))
            return;
        // Finished
        consoleMsg('\nAuthorization was successful', ColorEnum.SUCCESS);
        consoleMsg('');
    });
}
//# sourceMappingURL=auth.js.map