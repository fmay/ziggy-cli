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
        console.log(chalk.bold('\nRegistered Packages:\n'));
        // Create table
        const table = new Table({
            head: [
                chalk.cyan('Name'),
                chalk.cyan('Version'),
                chalk.cyan('Type'),
                chalk.cyan('Enabled'),
                chalk.cyan('Blocks'),
                chalk.cyan('Installed'),
            ],
            style: {
                head: [],
                border: ['gray'],
            },
        });
        // Add rows
        response.data.forEach(plugin => {
            table.push([
                plugin.name,
                plugin.version,
                plugin.type,
                plugin.enabled ? chalk.green('✓') : chalk.red('✗'),
                plugin.blocks?.length || 0,
                new Date(plugin.installedAt).toLocaleDateString(),
            ]);
        });
        console.log(table.toString());
        // Display summary
        const enabled = response.data.filter(p => p.enabled).length;
        const total = response.data.length;
        console.log(chalk.gray(`\nTotal: ${total} packages (${enabled} enabled, ${total - enabled} disabled)\n`));
    });
}
//# sourceMappingURL=packages.js.map