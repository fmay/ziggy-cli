import { Command } from 'commander';
import chalk from 'chalk';
import { core } from '../../index.js';
import { getServerConfig } from './helpers/execute-helpers.js';
export function createFlowListCommand() {
    return new Command('list')
        .description('List all flows')
        .option('-f, --flow-ids <flowids...>', 'Space-delimited list of flow UUIDs to filter')
        .option('-t, --tags <tags...>', 'Space-separated list of tags to filter')
        .option('-s, --server <server>', 'Server name from zinstances.json')
        .action(async (options) => {
        // Get the typed API client
        // Prepare query parameters - all are required as strings
        const queryParams = {
            search: '',
            flowId: '',
            tags: options.tags && options.tags.length > 0 ? options.tags.join(',') : '',
        };
        // Get server from either -s or --server
        const serverName = options.s || options.server;
        // Get server config and login
        const serverConfig = await getServerConfig(serverName);
        await core.loadConfig(serverConfig);
        await core.login();
        // Call the flow_fetch endpoint
        const api = core.getApiClient();
        const response = await api.flow.flowFetch(queryParams);
        if (!response.data || response.data.length === 0) {
            console.log(chalk.yellow('No flows found'));
            return;
        }
        let flows = response.data;
        // If flowids are specified, filter the results
        if (options.flowids && options.flowids.length > 0) {
            const flowidsSet = new Set(options.flowids);
            flows = flows.filter(flow => flowidsSet.has(flow.uuid));
            if (flows.length === 0) {
                console.log(chalk.yellow('No flows found matching the specified flowids'));
                return;
            }
        }
        // Calculate column width for UUID
        const uuidWidth = Math.max('Flow UUID'.length, ...flows.map(f => f.uuid.length));
        // Calculate column width for Name
        const nameWidth = Math.max('Flow Name'.length, ...flows.map(f => f.name.length));
        // Print header
        console.log('');
        console.log(chalk.cyan('Flow UUID'.padEnd(uuidWidth + 2)) +
            chalk.cyan('Flow Name'.padEnd(nameWidth + 2)) +
            chalk.cyan('Tags'));
        // Print separator
        console.log('-'.repeat('Flow UUID'.length).padEnd(uuidWidth + 2) +
            '-'.repeat('Flow Name'.length).padEnd(nameWidth + 2) +
            '-'.repeat('Tags'.length));
        // Print each flow
        flows.forEach(flow => {
            const tags = flow.tags && flow.tags.length > 0 ? flow.tags.join(', ') : '';
            console.log(flow.uuid.padEnd(uuidWidth + 2) +
                flow.name.padEnd(nameWidth + 2) +
                tags);
        });
        // Display summary
        console.log(chalk.gray(`\nTotal: ${flows.length} flow${flows.length !== 1 ? 's' : ''}\n`));
    });
}
//# sourceMappingURL=flow-list.js.map