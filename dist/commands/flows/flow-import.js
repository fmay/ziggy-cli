import * as fs from 'node:fs';
import { Command } from 'commander';
import { core } from '../../index.js';
import { getServerConfig } from './helpers/execute-helpers.js';
export function createFlowImportCommand() {
    return new Command('import')
        .description('Import flows from a JSON file')
        .requiredOption('-fp, --file-path <path>', 'Path to the file to import')
        .option('-s, --server <server>', 'Server name from zinstances.json')
        .option('--skip', 'Skip flows that already exist (LEAVE duplicates mode)')
        .option('--duplicate', 'Rename duplicate flows (RENAME duplicates mode)')
        .option('--overwrite', 'Overwrite existing flows (OVERWRITE duplicates mode)')
        .action(async (options) => {
        // Get file path from either -fp or --file-path
        const filePath = options.fp || options.filePath;
        if (!filePath) {
            console.log(JSON.stringify({
                status: 400,
                statusText: 'Bad Request',
                data: { message: 'File path is required' },
            }));
            process.exit(1);
        }
        // Check that the file exists
        if (!fs.existsSync(filePath)) {
            console.log(JSON.stringify({
                status: 400,
                statusText: 'Bad Request',
                data: { message: `File not found: ${filePath}` },
            }));
            process.exit(1);
        }
        // Get server from either -s or --server
        const serverName = options.s || options.server;
        // Validate that exactly one duplicate mode option is specified
        const duplicateModes = [options.skip, options.duplicate, options.overwrite].filter(Boolean);
        if (duplicateModes.length === 0) {
            console.log(JSON.stringify({
                status: 400,
                statusText: 'Bad Request',
                data: { message: 'Must specify one of: --skip, --duplicate, or --overwrite' },
            }));
            process.exit(1);
        }
        if (duplicateModes.length > 1) {
            console.log(JSON.stringify({
                status: 400,
                statusText: 'Bad Request',
                data: { message: 'Can only specify one of: --skip, --duplicate, or --overwrite' },
            }));
            process.exit(1);
        }
        // Map the option to ImportDuplicatesEnum value
        let duplicatesMode;
        if (options.skip) {
            duplicatesMode = 'LEAVE';
        }
        else if (options.duplicate) {
            duplicatesMode = 'RENAME';
        }
        else {
            duplicatesMode = 'OVERWRITE';
        }
        try {
            // Get server config and login
            const serverConfig = await getServerConfig(serverName);
            await core.loadConfig(serverConfig);
            await core.login();
            console.error(`Uploading file: ${filePath}`);
            console.error(`Duplicates mode: ${duplicatesMode}`);
            // Read the file
            const fileContent = fs.readFileSync(filePath);
            const fileName = filePath.split('/').pop() || 'import.json';
            // Create FormData for multipart upload
            const FormData = (await import('formdata-node')).FormData;
            const { File } = await import('buffer');
            const formData = new FormData();
            // Add the file - create a File-like object
            const file = new File([fileContent], fileName, { type: 'application/json' });
            formData.append('file', file);
            // Add the duplicatesMode field
            formData.append('duplicatesMode', duplicatesMode);
            // Get the API base URL
            const config = core.getConfig();
            if (!config) {
                console.log(JSON.stringify({
                    status: 500,
                    statusText: 'Internal Error',
                    data: { message: 'No configuration available' },
                }));
                process.exit(1);
            }
            const baseUrl = `${config.apiUrl}:${config.port}/api`;
            const importUrl = `${baseUrl}/flow/import`;
            // Make the request using fetch with proper headers
            const response = await fetch(importUrl, {
                method: 'POST',
                headers: {
                    'Authorization': config.authToken ? `Bearer ${config.authToken}` : '',
                    'Cookie': `tenantId=##solo##; provider=email; accessToken=${config.authToken || ''}; userId=${config.userName || ''}; password=${config.password || ''};`,
                },
                body: formData,
            });
            if (!response.ok) {
                const errorText = await response.text().catch(() => 'Unknown error');
                console.log(JSON.stringify({
                    status: response.status,
                    statusText: response.statusText,
                    data: { message: errorText },
                }));
                process.exit(1);
            }
            // Try to parse response as JSON
            const contentType = response.headers.get('content-type');
            let responseData;
            if (contentType?.includes('application/json')) {
                responseData = await response.json();
            }
            else {
                responseData = { message: await response.text() };
            }
            console.log(JSON.stringify({
                status: response.status,
                statusText: response.statusText,
                data: responseData,
            }, null, 2));
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
//# sourceMappingURL=flow-import.js.map