import path from 'path';
import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../utils/logger.js';
import { fileExists, readJSON } from '../utils/file.js';
import { registerPlugin } from '../utils/api.js';
import { core } from '../index.js';
export function createRegisterCommand() {
    return new Command('register')
        .description('Register a plugin with the Ziggy server')
        .argument('[path]', 'Plugin path (for local plugins) or npm package name', '.')
        .option('-t, --type <type>', 'Plugin type (local or npm)', 'local')
        .action(async (pluginPath, options) => {
        logger.title('📦 Register Plugin');
        const spinner = ora('Loading configuration...').start();
        try {
            // Determine plugin source and metadata
            let source;
            let pluginName;
            let pluginVersion;
            let pluginAuthor;
            if (options.type === 'local') {
                // Resolve absolute path
                source = path.resolve(pluginPath);
                // Check if path exists
                if (!(await fileExists(source))) {
                    spinner.fail('Plugin path does not exist');
                    logger.error(`Path not found: ${source}`);
                    process.exit(1);
                }
                // Read package.json to get metadata
                const packageJsonPath = path.join(source, 'package.json');
                if (await fileExists(packageJsonPath)) {
                    const packageJson = await readJSON(packageJsonPath);
                    pluginName = packageJson.name;
                    pluginVersion = packageJson.version;
                    pluginAuthor = packageJson.author;
                }
                else {
                    spinner.fail('package.json not found in plugin directory');
                    logger.error('Make sure you are in a valid plugin directory');
                    process.exit(1);
                }
                logger.info(`Plugin: ${pluginName} v${pluginVersion}`);
            }
            else {
                // npm package
                source = pluginPath;
                logger.info(`npm package: ${source}`);
            }
            // Register plugin
            const registerSpinner = ora('Registering plugin with Ziggy server...').start();
            try {
                const result = await registerPlugin(core.getConfig(), {
                    type: options.type,
                    source,
                    name: pluginName,
                    version: pluginVersion,
                    author: pluginAuthor,
                });
                registerSpinner.succeed('Plugin registered successfully');
                logger.success('\n✨ Plugin registered!\n');
                logger.info('Plugin details:');
                logger.log(`  UUID: ${result.uuid}`);
                logger.log(`  Name: ${result.name}`);
                logger.log(`  Version: ${result.version}`);
                logger.log(`  Enabled: ${result.enabled}`);
            }
            catch (error) {
                registerSpinner.fail('Failed to register plugin');
                if (error && typeof error === 'object' && 'response' in error) {
                    const axiosError = error;
                    logger.error(`Server error: ${axiosError.response.status}`);
                    logger.log(JSON.stringify(axiosError.response.data, null, 2));
                }
                else if (error && typeof error === 'object' && 'request' in error) {
                    logger.error('No response from server');
                    logger.info(`Make sure the Ziggy server is running at ${core.getConfig()?.apiUrl}`);
                }
                else {
                    logger.error(error instanceof Error ? error.message : String(error));
                }
                process.exit(1);
            }
        }
        catch (error) {
            spinner.fail('Failed to register plugin');
            logger.error(error instanceof Error ? error.message : String(error));
            process.exit(1);
        }
    });
}
//# sourceMappingURL=register.js.map