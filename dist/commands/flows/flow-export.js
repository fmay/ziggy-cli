import * as fs from 'node:fs';
import { Command } from 'commander';
import { core } from '../../index.js';
import { getServerConfig } from './helpers/execute-helpers.js';
import { confirmAction } from '../../utils/prompt.js';
export function createFlowExportCommand() {
    return new Command('export')
        .description('Export flows to a JSON file')
        .option('-f, --flow-ids <flowUuids...>', 'Space-separated list of flow UUIDs')
        .option('-t, --tags <tags...>', 'Space-separated list of tags to filter flows')
        .requiredOption('-s, --server <server>', 'Server name from zinstances.json')
        .requiredOption('-sp, --save-path <path>', 'Absolute path where the exported file should be saved')
        .option('--no-prompt', 'Do not prompt for confirmation')
        .action(async (options) => {
        // Get flowUuids from either -f or --flowUuid
        const flowUuids = options.f || options.flowUuid || [];
        // Get tags from either -t or --tags
        const tags = options.t || options.tags || [];
        // Get server from either -s or --server
        const serverName = options.s || options.server;
        // Get save path from either -sp or --save-path
        const savePath = options.sp || options.savePath;
        // If not --no-prompt, prompt for confirmation
        if (options.prompt !== false) {
            const confirmed = await confirmAction('Are you sure you want to export the flow(s)?');
            if (!confirmed) {
                console.log(JSON.stringify({
                    status: 200,
                    statusText: 'OK',
                    data: { message: 'Operation cancelled by user' },
                }));
                return;
            }
        }
        // Get server config and login
        const serverConfig = await getServerConfig(serverName);
        await core.loadConfig(serverConfig);
        await core.login();
        // Get the typed API client
        const api = core.getApiClient();
        // Compile list of flowUuids to export
        const flowUuidsToExport = [];
        // Add flowUuids from -f if specified
        if (flowUuids && flowUuids.length > 0) {
            flowUuidsToExport.push(...flowUuids);
        }
        // Fetch flows by tags if specified
        if (tags && tags.length > 0) {
            try {
                const queryParams = {
                    search: '',
                    flowId: '',
                    tags: tags.join(','),
                };
                const response = await api.flow.flowFetch(queryParams);
                if (response.data && response.data.length > 0) {
                    // Add unique flowUuids from tag search
                    response.data.forEach(flow => {
                        if (!flowUuidsToExport.includes(flow.uuid)) {
                            flowUuidsToExport.push(flow.uuid);
                        }
                    });
                }
            }
            catch (error) {
                if (error.response) {
                    console.log(JSON.stringify({
                        status: error.response.status,
                        statusText: error.response.statusText,
                        data: error.response.data,
                    }));
                }
                else {
                    console.log(JSON.stringify({
                        status: 500,
                        statusText: 'Internal Error',
                        data: { message: error.message },
                    }));
                }
                process.exit(1);
            }
        }
        try {
            // Step 1: Call flowExportTagged to trigger export generation
            console.error('Generating export...');
            const exportResponse = await api.flow.flowExportTagged({
                tags: tags,
                flowUuids: flowUuidsToExport,
            });
            if (exportResponse.status !== 200 && exportResponse.status !== 201) {
                console.log(JSON.stringify({
                    status: exportResponse.status,
                    statusText: exportResponse.statusText,
                    data: { message: 'Failed to generate export' },
                }));
                process.exit(1);
            }
            // Step 2: Call flowGetTaggedExport to download the generated file
            console.error('Downloading export...');
            const downloadResponse = await api.flow.flowGetTaggedExport();
            if (!downloadResponse.data) {
                console.log(JSON.stringify({
                    status: 500,
                    statusText: 'Internal Error',
                    data: { message: 'No data returned from download' },
                }));
                process.exit(1);
            }
            // Save to file at the specified path
            const outputPath = savePath;
            // The API returns the data as a string or object
            const exportData = typeof downloadResponse.data === 'string'
                ? downloadResponse.data
                : JSON.stringify(downloadResponse.data, null, 2);
            fs.writeFileSync(outputPath, exportData, 'utf-8');
            console.log(JSON.stringify({
                status: 200,
                statusText: 'OK',
                data: {
                    message: 'Export successful',
                    filePath: outputPath,
                    flowCount: flowUuidsToExport.length,
                },
            }));
        }
        catch (error) {
            if (error.response) {
                console.log(JSON.stringify({
                    status: error.response.status,
                    statusText: error.response.statusText,
                    data: error.response.data,
                }));
            }
            else {
                console.log(JSON.stringify({
                    status: 500,
                    statusText: 'Internal Error',
                    data: { message: error.message },
                }));
            }
            process.exit(1);
        }
    });
}
//# sourceMappingURL=flow-export.js.map