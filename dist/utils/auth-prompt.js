import inquirer from 'inquirer';
/**
 * Prompts the user for authentication credentials
 * @returns ZiggyConfig object with user-provided credentials
 */
export async function promptAuthCredentials() {
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
            validate: (input) => input.length > 0 ? true : 'Username cannot be empty',
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
            validate: (input) => input.length > 0 ? true : 'Password cannot be empty',
        },
    ]);
    return {
        apiUrl: url,
        port: port,
        authToken: '',
        userName: userName,
        password: password,
    };
}
//# sourceMappingURL=auth-prompt.js.map