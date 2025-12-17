import { Command } from 'commander';
import chalk from 'chalk';
import Table from 'cli-table3';
import { core } from '../../index.js';
export function createFlowListCommand() {
    return new Command('list')
        .description('List all flows')
        .option('-f, --flowids <flowids...>', 'Space-delimited list of flow UUIDs to filter')
        .option('-t, --tags <tags...>', 'Space-separated list of tags to filter')
        .action(async (options) => {
        await core.validateFolder(true);
        await core.login();
        // Get the typed API client
        const api = core.getApiClient();
        // Prepare query parameters - all are required as strings
        const queryParams = {
            search: '',
            flowId: '',
            tags: options.tags && options.tags.length > 0 ? options.tags.join(',') : '',
        };
        // Call the flow_fetch endpoint
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
        // Create table for flows
        const flowTable = new Table({
            head: [
                chalk.cyan('Flow UUID'),
                chalk.cyan('Flow Name'),
            ],
            style: {
                head: [],
                border: ['gray'],
            },
        });
        // Add each flow to the table
        flows.forEach(flow => {
            flowTable.push([
                flow.uuid,
                flow.name,
            ]);
        });
        console.log(flowTable.toString());
        // Display summary
        console.log(chalk.gray(`\nTotal: ${flows.length} flow${flows.length !== 1 ? 's' : ''}\n`));
    });
}
//# sourceMappingURL=flow-list.js.map