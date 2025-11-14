/**
 * Prompt for plugin initialization details
 */
import inquirer from 'inquirer';
export async function promptPluginInit(defaultName) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'pluginName',
            message: 'Plugin name (e.g., my-plugin):',
            default: defaultName,
            validate: (input) => {
                if (!input.trim()) {
                    return 'Plugin name is required';
                }
                if (!/^(?:@[a-z][a-z0-9-]*\/)?[a-z][a-z0-9-]*$/.test(input)) {
                    return 'Invalid plugin name format. Must be all lower case, no spaces.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Plugin description:',
            default: 'A Ziggy plugin',
        },
        {
            type: 'input',
            name: 'author',
            message: 'Author:',
            default: 'Your Name',
        },
        {
            type: 'input',
            name: 'blockName',
            message: 'First block name (e.g., My Block):',
            default: 'My Block',
            validate: (input) => {
                if (!input.trim()) {
                    return 'Block name is required';
                }
                if (!/^[A-Za-z][A-Za-z0-9 ]*[A-Za-z0-9]$/.test(input)) {
                    return 'Invalid plugin name format';
                }
                return true;
            },
        },
    ]);
}
//# sourceMappingURL=create-prompt.js.map