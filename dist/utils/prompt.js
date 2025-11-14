import inquirer from 'inquirer';
/**
 * Prompt for block generation details
 */
export async function promptBlockGenerate() {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'blockName',
            message: 'Block name (e.g., MyBlock):',
            validate: (input) => {
                if (!input.trim()) {
                    return 'Block name is required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Block description:',
            default: 'A custom block',
        },
        {
            type: 'input',
            name: 'headerColor',
            message: 'Header color (hex):',
            default: '#3b82f6',
            validate: (input) => {
                if (!/^#[0-9A-Fa-f]{6}$/.test(input)) {
                    return 'Invalid hex color (e.g., #3b82f6)';
                }
                return true;
            },
        },
    ]);
}
/**
 * Confirm action
 */
export async function confirmAction(message) {
    const { confirmed } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmed',
            message,
            default: true,
        },
    ]);
    return confirmed;
}
//# sourceMappingURL=prompt.js.map