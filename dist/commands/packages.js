import { Command } from 'commander';
import chalk from 'chalk';
import Table from 'cli-table3';
import { core } from '../index.js';
export function createPackagesCommand() {
    return new Command('packages')
        .description('List all packages current registered on the Ziggy server')
        .action(async () => {
        await core.login();
        // Get the typed API client
        const api = core.getApiClient();
        // Call the typed endpoint
        const response = await api.plugins.pluginControllerGetAllPlugins();
        if (!response.data || response.data.length === 0) {
            console.log(chalk.yellow('No packages found'));
            return;
        }
        // Display header
        // console.log(chalk.bold('\nRegistered Packages:\n'))
        // Display each plugin with its blocks
        for (const plugin of response.data) {
            // Create table for plugin registry
            const pluginTable = new Table({
                head: [
                    chalk.cyan('Package'),
                    chalk.cyan('Version'),
                    chalk.cyan('Type'),
                    chalk.cyan('Enabled'),
                    chalk.cyan('Installed'),
                ],
                style: {
                    head: [],
                    border: ['gray'],
                },
            });
            pluginTable.push([
                plugin.name,
                plugin.version,
                plugin.type,
                plugin.enabled ? chalk.green('✓') : chalk.red('✗'),
                new Date(plugin.installedAt).toLocaleDateString(),
            ]);
            console.log(pluginTable.toString());
            // Get and display blocks for this plugin
            const blocksResponse = await api.plugins.pluginControllerGetPluginBlocks(plugin.uuid);
            const blocks = blocksResponse.data;
            if (blocks && blocks.length > 0) {
                // console.log(chalk.bold(`\n  Blocks (${blocks.length}):\n`))
                const blocksTable = new Table({
                    head: [
                        chalk.cyan('Block Name'),
                        chalk.cyan('TS'),
                        chalk.cyan('Block Group'),
                    ],
                    style: {
                        head: [],
                        border: [],
                    },
                    chars: {
                        'top': '',
                        'top-mid': '',
                        'top-left': '',
                        'top-right': '',
                        'bottom': '',
                        'bottom-mid': '',
                        'bottom-left': '',
                        'bottom-right': '',
                        'left': '',
                        'left-mid': '',
                        'mid': '',
                        'mid-mid': '',
                        'right': '',
                        'right-mid': '',
                        'middle': ' ',
                    },
                });
                blocks.forEach(block => {
                    blocksTable.push([
                        `  ${block.blockName}`,
                        block.blockType,
                        block.blockGroup || '-',
                    ]);
                });
                console.log(blocksTable.toString());
            }
            else {
                console.log(chalk.gray('  No blocks found for this plugin\n'));
            }
            console.log(); // Empty line between plugins
        }
        // Display summary
        const enabled = response.data.filter(p => p.enabled).length;
        const total = response.data.length;
        const totalBlocks = (await Promise.all(response.data.map(async (p) => {
            const blocksResponse = await api.plugins.pluginControllerGetPluginBlocks(p.uuid);
            return blocksResponse.data?.length || 0;
        }))).reduce((sum, count) => sum + count, 0);
        console.log(chalk.gray(`Total: ${total} packages (${enabled} enabled, ${total - enabled} disabled)`));
        console.log(chalk.gray(`Total Blocks: ${totalBlocks}\n`));
    });
}
//# sourceMappingURL=packages.js.map