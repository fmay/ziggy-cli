import { Command } from 'commander';
import { core } from '../../index.js';
import { getServerConfig } from '../flows/helpers/execute-helpers.js';
import { confirmAction } from '../../utils/prompt.js';
/**
 * Create the reorg subcommand
 */
export function createSystemReorgCommand() {
    return new Command('reorg')
        .description('Reorganize system database (vacuum)')
        .option('-s, --server <server>', 'Server name from zinstances.json')
        .option('--no-prompt', 'Do not prompt for confirmation')
        .action(async (options) => {
        // Get server from either -s or --server
        const serverName = options.s || options.server;
        try {
            // If not --no-prompt, prompt for confirmation
            if (options.prompt !== false) {
                const confirmed = await confirmAction('Are you sure you want to reorganise the database? This may impact database performance significantly while processing.');
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
            // Call flowVacuum to reorganize the database
            console.error('Reorganizing database...');
            const vacuumResponse = await api.flow.flowVacuum();
            if (vacuumResponse.status !== 200 && vacuumResponse.status !== 201) {
                console.log(JSON.stringify({
                    status: vacuumResponse.status,
                    statusText: vacuumResponse.statusText,
                    data: { message: 'Failed to reorganize database' },
                }));
                process.exit(1);
            }
            console.log(JSON.stringify({
                status: 200,
                statusText: 'OK',
                data: {
                    message: 'Database reorganization successful',
                    result: vacuumResponse.data,
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
//# sourceMappingURL=system-reorg.js.map