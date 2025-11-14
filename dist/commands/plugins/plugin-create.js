import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../../utils/logger.js';
import { ensureDir, fileExists, isDirectoryEmpty } from '../../utils/file.js';
import { promptPluginInit } from './helpers/create-prompt.js';
import { createPluginScaffold } from './helpers/create-plugin-scaffold.js';
import { createBlockFromTemplate } from './helpers/create-block-from-template.js';
import { core } from '../../index.js';
import { promptAuthCredentials } from '../../utils/auth-prompt.js';
const execAsync = promisify(exec);
export function createPluginCreateCommand() {
    return new Command('create')
        .description('Initialize a new Ziggy plugin')
        .argument('[name]', 'Plugin name (e.g., my-plugin)')
        .action(async (name) => {
        logger.title('🚀 Create new Ziggy Plugin');
        // Prompt for plugin details
        const answers = await promptPluginInit(name || 'my-plugin');
        const pluginDir = path.join(process.cwd(), path.basename(answers.pluginName));
        // Confirm
        logger.log('\n📋 Summary:');
        logger.log(`  Plugin Name: ${answers.pluginName}`);
        logger.log(`  Description: ${answers.description}`);
        logger.log(`  Author: ${answers.author}`);
        logger.log(`  First Block: ${answers.blockName}`);
        logger.log(`  Installation Directory: ${pluginDir}\n`);
        const inquirer = (await import('inquirer')).default;
        const { confirm } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: `Please confirm you want to install to ${pluginDir}`,
                default: true,
            },
        ]);
        if (!confirm) {
            logger.info('Plugin creation cancelled');
            process.exit(0);
        }
        // Check if directory exists and is not empty
        if (await fileExists(pluginDir)) {
            const isEmpty = await isDirectoryEmpty(pluginDir);
            if (!isEmpty) {
                logger.error(`Directory ${pluginDir} already exists and is not empty`);
                process.exit(1);
            }
        }
        const spinner = ora('Creating plugin structure...').start();
        try {
            // Create directory structure
            await ensureDir(pluginDir);
            await ensureDir(path.join(pluginDir, 'src', 'blocks'));
            await ensureDir(path.join(pluginDir, 'src', 'assets'));
            // Create the main scaffold for the new plugin
            await createPluginScaffold(pluginDir, answers);
            // Create a simple block
            await createBlockFromTemplate(pluginDir, false, answers);
            spinner.succeed('Plugin structure created');
            // Install dependencies
            const installSpinner = ora('Installing dependencies...').start();
            try {
                await execAsync('npm install', { cwd: pluginDir });
                installSpinner.succeed('Dependencies installed');
            }
            catch (_error) {
                installSpinner.fail('Failed to install dependencies.');
                logger.warning('npm install and yarn install were tried');
            }
            // Authenticate
            const { shouldAuth } = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'shouldAuth',
                    message: 'Would you like to authenticate this new project now (recommended)?',
                    default: true,
                },
            ]);
            if (shouldAuth) {
                try {
                    // Change to the newly created plugin folder
                    process.chdir(pluginDir);
                    // Prompt for authentication credentials
                    const newConfig = await promptAuthCredentials();
                    // Set config and login
                    core.setConfig(newConfig);
                    const loginSuccess = await core.login(newConfig);
                    if (loginSuccess) {
                        logger.success('✓ Authentication successful!');
                    }
                }
                catch (authError) {
                    logger.warning('Authentication failed. You can authenticate later by running `ziggy auth`');
                    logger.error(authError instanceof Error ? authError.message : String(authError));
                }
            }
            else {
                logger.info('You can authenticate later by running `ziggy auth`');
            }
            logger.success('\n✨ Plugin initialized successfully!\n');
            logger.info('Next steps:');
            logger.log(`  1. cd ${path.basename(pluginDir)}`);
            logger.log('  2. Edit your plugin blocks');
            logger.log("  3. Build your plugin ('build' in package.json)");
            logger.log("  4. 'ziggy plugin register' to register your package and blocks with the Ziggy server\n");
            logger.log("  5. Reload the browser to ensure plugin and its blocks are loaded\n");
        }
        catch (error) {
            spinner.fail('Failed to create plugin');
            logger.error(error instanceof Error ? error.message : String(error));
            process.exit(1);
        }
    });
}
//# sourceMappingURL=plugin-create.js.map