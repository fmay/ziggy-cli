import * as fs from 'node:fs';
import { Command } from 'commander';
import { core } from '../../index.js';
import { getServerConfig } from '../flows/helpers/execute-helpers.js';
import { confirmAction } from '../../utils/prompt.js';
/**
 * Create the backup subcommand
 */
export function createSystemBackupCommand() {
    return new Command('backup')
        .description('Backup system database')
        .requiredOption('-s, --server <server>', 'Server name from zinstances.json')
        .requiredOption('-fp, --file-path <path>', 'Absolute path where the backup file should be saved')
        .option('--no-prompt', 'Do not prompt for confirmation')
        .action(async (options) => {
        // Get file path from either -fp or --file-path
        const filePath = options.fp || options.filePath;
        // Get server from either -s or --server
        const serverName = options.s || options.server;
        try {
            // If not --no-prompt, prompt for confirmation
            if (options.prompt !== false) {
                const confirmed = await confirmAction('Are you sure you want to backup the database? This operation may take some time.');
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
            // Step 1: Call systemTransferDb to trigger backup
            console.error('Generating database backup...');
            const backupResponse = await api.system.systemTransferDb();
            if (backupResponse.status !== 200 && backupResponse.status !== 201) {
                console.log(JSON.stringify({
                    status: backupResponse.status,
                    statusText: backupResponse.statusText,
                    data: { message: 'Failed to generate backup' },
                }));
                process.exit(1);
            }
            // Step 2: Call systemDownloadTransferFile to download the backup
            console.error('Downloading backup file...');
            const downloadResponse = await api.system.systemDownloadTransferFile();
            if (!downloadResponse.ok) {
                console.log(JSON.stringify({
                    status: downloadResponse.status,
                    statusText: downloadResponse.statusText,
                    data: { message: 'Failed to download backup file' },
                }));
                process.exit(1);
            }
            // Save to file at the specified path
            const outputPath = filePath;
            // Convert response to buffer and write to file
            const arrayBuffer = await downloadResponse.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFileSync(outputPath, buffer);
            console.log(JSON.stringify({
                status: 200,
                statusText: 'OK',
                data: {
                    message: 'Backup successful',
                    filePath: outputPath,
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
//# sourceMappingURL=system-backup.js.map