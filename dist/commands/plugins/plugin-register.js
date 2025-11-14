import path from 'path';
import { Command } from 'commander';
import ora from 'ora';
import { RegisterPluginDtoType } from 'openapi';
import { logger } from '../../utils/logger.js';
import { core } from '../../index.js';
import { fileExists, readJSON } from '../../utils/file.js';
import { ColorEnum, consoleMsg } from '../../utils/console-msg.js';
export function createPluginRegisterCommand() {
    return new Command('register')
        .description('Register the current plugin folder with the Ziggy server or update if it is already registered.')
        .option('-t, --type <type>', 'Plugin type (local or npm)', 'local')
        .action(async () => {
        logger.title('📦 Register Plugin');
        await core.validateFolder();
        const api = core.getApiClient();
        const spinner = ora('Loading configuration...').start();
        let syncPluginUuid = '';
        try {
            // Determine plugin source and metadata
            let pluginName;
            let pluginVersion;
            // Resolve absolute path
            const source = process.cwd();
            // Check if path exists
            if (!(await fileExists(source))) {
                spinner.fail('Plugin path does not exist');
                consoleMsg(`Path not found: ${source}`, ColorEnum.ERROR);
                process.exit(1);
            }
            // Read package.json to get metadata
            const packageJsonPath = path.join(source, 'package.json');
            if (await fileExists(packageJsonPath)) {
                const packageJson = await readJSON(packageJsonPath);
                pluginName = packageJson.name;
                pluginVersion = packageJson.version;
            }
            else {
                spinner.fail('package.json not found in plugin directory');
                consoleMsg('Make sure you are in a valid plugin directory', ColorEnum.ERROR);
                process.exit(1);
            }
            spinner.succeed();
            consoleMsg(`\nPlugin: ${pluginName} v${pluginVersion}`);
            // Check if plugin is already registered
            const response = await api.plugins.pluginControllerGetAllPlugins();
            const found = response.data.find(p => p.name === pluginName);
            if (found) {
                consoleMsg('A plugin with this name is already registered. It will be updated instead', ColorEnum.WARNING);
                syncPluginUuid = found.uuid;
            }
            // Register plugin
            let registerSpinner;
            if (syncPluginUuid)
                registerSpinner = ora('Updating plugin ...').start();
            else
                registerSpinner = ora('Registering plugin...').start();
            try {
                // Call api
                if (syncPluginUuid) {
                    await api.plugins.pluginControllerSyncPlugin(syncPluginUuid);
                    registerSpinner.succeed('Successfully synced plugin');
                }
                else {
                    const response = await api.plugins.pluginControllerRegisterPlugin({
                        type: RegisterPluginDtoType.Local,
                        source: source,
                    });
                    registerSpinner.succeed('Plugin registered successfully. Refresh your browser to load the newly registered plugins.');
                    logger.success('\n✨ Plugin registered!\n');
                    logger.info('Plugin details:');
                    logger.log(`  UUID: ${response.data.uuid}`);
                    logger.log(`  Name: ${response.data.name}`);
                    logger.log(`  Version: ${response.data.version}`);
                    logger.log(`  Enabled: ${response.data.enabled}`);
                }
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
//# sourceMappingURL=plugin-register.js.map