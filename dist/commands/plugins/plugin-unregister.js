import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../../utils/logger.js';
import { core } from '../../index.js';
export function createPluginUnregisterCommand() {
    return new Command('unregister')
        .description('Unregister a plugin from the Ziggy server')
        .action(async () => {
        logger.title('🗑️  Unregister Plugin');
        await core.validateFolder();
        await core.login();
        const inquirer = (await import('inquirer')).default;
        const api = core.getApiClient();
        // Display initial warning
        logger.log('\n⚠️  WARNING:');
        logger.log('  Are you sure you want to unregister a plugin?');
        logger.log('  All associated blocks will be removed and will break Flows that contain them.\n');
        const { proceedInitial } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'proceedInitial',
                message: 'Do you want to continue?',
                default: false,
            },
        ]);
        if (!proceedInitial) {
            logger.info('Plugin unregister cancelled');
            process.exit(0);
        }
        // Fetch all registered plugins
        const spinner = ora('Fetching registered plugins...').start();
        let plugins;
        try {
            const response = await api.plugins.pluginControllerGetAllPlugins();
            plugins = response.data;
            if (!plugins || plugins.length === 0) {
                spinner.fail('No plugins found');
                logger.warning('No plugins are currently registered');
                process.exit(0);
            }
            spinner.succeed(`Found ${plugins.length} registered plugin(s)`);
        }
        catch (error) {
            spinner.fail('Failed to fetch plugins');
            logger.error(error instanceof Error ? error.message : String(error));
            process.exit(1);
        }
        // Prompt user to select a plugin
        const { selectedPluginUuid } = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedPluginUuid',
                message: 'Select a plugin to unregister:',
                choices: plugins.map(plugin => ({
                    name: `${plugin.name} (v${plugin.version}) ${plugin.enabled ? '✓' : '✗'}`,
                    value: plugin.uuid,
                })),
            },
        ]);
        const selectedPlugin = plugins.find(p => p.uuid === selectedPluginUuid);
        if (!selectedPlugin) {
            logger.error('Selected plugin not found');
            process.exit(1);
        }
        // Final confirmation with plugin name
        logger.log(`\n📋 Selected Plugin:`);
        logger.log(`  Name: ${selectedPlugin.name}`);
        logger.log(`  Version: ${selectedPlugin.version}`);
        logger.log(`  UUID: ${selectedPlugin.uuid}\n`);
        logger.log('⚠️  FINAL WARNING:');
        logger.log(`  This will permanently unregister "${selectedPlugin.name}".`);
        logger.log('  All blocks from this plugin will be removed from Flows.\n');
        const { confirmFinal } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmFinal',
                message: `Are you absolutely sure you want to unregister "${selectedPlugin.name}"?`,
                default: false,
            },
        ]);
        if (!confirmFinal) {
            logger.info('Plugin unregister cancelled');
            process.exit(0);
        }
        // Unregister the plugin
        const unregisterSpinner = ora('Unregistering plugin...').start();
        try {
            await api.plugins.pluginControllerUninstallPlugin(selectedPlugin.uuid);
            unregisterSpinner.succeed('Plugin unregistered successfully');
            logger.success('\n✨ Plugin unregistered!\n');
            logger.info('The plugin has been removed from the Ziggy server.');
            logger.log('  Refresh your browser to see the changes.\n');
        }
        catch (error) {
            unregisterSpinner.fail('Failed to unregister plugin');
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
    });
}
//# sourceMappingURL=plugin-unregister.js.map