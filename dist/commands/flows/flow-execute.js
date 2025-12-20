import { Command } from 'commander';
import { v4 } from 'uuid';
import { ExecutionEnvironmentModeEnum } from 'openapi/Api.js';
import { core } from '../../index.js';
import { confirmAction } from '../../utils/prompt.js';
import { getServerConfig, parsePayload } from './helpers/execute-helpers.js';
export function createFlowExecuteCommand() {
    return new Command('execute')
        .description('Execute a flow')
        .option('-f, --flow-ids <flowUuids...>', 'Space-separated list of flow UUIDs')
        .option('-t, --tags <tags...>', 'Space-separated list of tags to filter flows')
        .option('-p, --payload <payload>', 'JSON payload string')
        .option('-dnq, --do-not-queue', 'Execute immediately without queuing')
        .requiredOption('-s, --server <server>', 'Server name from zinstances.json')
        .option('--parallel', 'Execute flows in parallel')
        .option('--no-prompt', 'Do not prompt for confirmation')
        .action(async (options) => {
        // Get flowUuids from either -f or --flowUuid
        const flowUuids = options.f || options.flowUuid;
        // Get tags from either -t or --tags
        const tags = options.t || options.tags;
        // Validate that at least one of flowUuids or tags is specified
        if ((!flowUuids || flowUuids.length === 0) && (!tags || tags.length === 0)) {
            console.log(JSON.stringify({
                status: 400,
                statusText: 'Bad Request',
                data: { message: 'Error: At least one of -f (flowUuids) or -t (tags) is required' },
            }));
            process.exit(1);
        }
        // Get payload from either -p or --payload
        const payloadStr = options.p || options.payload;
        const payload = parsePayload(payloadStr);
        // Get doNotQueue from either -dnq or --do-not-queue
        const doNotQueue = options.dnq || options.doNotQueue || false;
        // Get server from either -s or --server
        const serverName = options.s || options.server;
        // If not --no-prompt, prompt for confirmation
        if (options.prompt !== false) {
            const confirmed = await confirmAction('Are you sure you want to execute the flow(s)?');
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
        // Compile list of flowUuids to execute
        const flowUuidsToExecute = [];
        // Add flowUuids from -f if specified
        if (flowUuids && flowUuids.length > 0) {
            flowUuidsToExecute.push(...flowUuids);
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
                        if (!flowUuidsToExecute.includes(flow.uuid)) {
                            flowUuidsToExecute.push(flow.uuid);
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
        // Helper function to execute a single flow
        const executeFlow = async (currentFlowUuid) => {
            // Log the execution
            console.error(`Executing flow: ${currentFlowUuid}`);
            try {
                // Call the if-execute-internal endpoint
                const response = await api.ziggy.ifExecuteInternal({
                    flowUuid: currentFlowUuid,
                    isDebug: false,
                    isStep: false,
                    executionEnvironmentMode: ExecutionEnvironmentModeEnum.DEV,
                    executionId: v4(),
                    doNotQueue: doNotQueue,
                    data: payload,
                });
                return {
                    flowUuid: currentFlowUuid,
                    status: response.status,
                    statusText: response.statusText || 'OK',
                    data: response.data,
                };
            }
            catch (error) {
                if (error.response) {
                    return {
                        flowUuid: currentFlowUuid,
                        status: error.response.status,
                        statusText: error.response.statusText,
                        data: error.response.data,
                    };
                }
                else {
                    return {
                        flowUuid: currentFlowUuid,
                        status: 500,
                        statusText: 'Internal Error',
                        data: { message: error.message },
                    };
                }
            }
        };
        // Execute flows either in parallel or sequentially
        let results;
        if (options.parallel) {
            // Execute all flows in parallel
            results = await Promise.all(flowUuidsToExecute.map(flowUuid => executeFlow(flowUuid)));
        }
        else {
            // Execute flows sequentially
            results = [];
            for (const currentFlowUuid of flowUuidsToExecute) {
                const result = await executeFlow(currentFlowUuid);
                results.push(result);
            }
        }
        // Output all results as JSON array
        console.log(JSON.stringify(results));
    });
}
//# sourceMappingURL=flow-execute.js.map