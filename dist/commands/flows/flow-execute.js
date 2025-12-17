import { Command } from 'commander';
import { v4 } from 'uuid';
import { ExecutionEnvironmentModeEnum } from 'openapi/Api.js';
import { core } from '../../index.js';
import { getServerConfig, parsePayload } from './helpers/execute-helpers.js';
export function createFlowExecuteCommand() {
    return new Command('execute')
        .description('Execute a flow')
        .option('-f, --flowUuid <flowUuid>', 'Flow UUID (required)')
        .option('-p, --payload <payload>', 'JSON payload string')
        .option('-dnq, --do-not-queue', 'Execute immediately without queuing')
        .option('-s, --server <server>', 'Server name from zinstances.json')
        .action(async (options) => {
        // Get flowUuid from either -f or --flowUuid
        const flowUuid = options.f || options.flowUuid;
        if (!flowUuid) {
            console.log(JSON.stringify({
                status: 400,
                statusText: 'Bad Request',
                data: { message: 'Error: flowUuid is required. Use -f or --flowUuid' },
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
        // Get server config and login
        const serverConfig = await getServerConfig(serverName);
        await core.loadConfig(serverConfig);
        await core.login();
        // Get the typed API client
        const api = core.getApiClient();
        try {
            // Call the if-execute-internal endpoint
            const response = await api.ziggy.ifExecuteInternal({
                flowUuid: flowUuid,
                isDebug: false,
                isStep: false,
                executionEnvironmentMode: ExecutionEnvironmentModeEnum.DEV,
                executionId: v4(),
                doNotQueue: doNotQueue,
                data: payload,
            });
            // Output clean JSON for application consumption
            console.log(JSON.stringify({
                status: response.status,
                statusText: response.statusText || 'OK',
                data: response.data,
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
//# sourceMappingURL=flow-execute.js.map