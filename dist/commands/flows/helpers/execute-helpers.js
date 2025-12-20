import * as process from 'node:process';
import { decrypt } from '../../../utils/crypto.js';
import { ColorEnum, consoleMsg } from '../../../utils/console-msg.js';
import { loadGlobalConfig } from '../../auth/helpers/config-loader.js';
/**
 * Get the server configuration from zinstances.json
 * If serverName is specified, use that server
 * Otherwise, use the server with isUsed flag
 */
export async function getServerConfig(serverName) {
    try {
        const globalConfig = loadGlobalConfig(false); // false = use zinstances.json
        if (Object.keys(globalConfig).length === 0) {
            consoleMsg('No servers found in zinstances.json. Run "ziggy auth" to add a server.', ColorEnum.ERROR);
            process.exit(1);
        }
        let serverConfig = null;
        let actualServerName;
        if (serverName) {
            // Use specified server
            serverConfig = globalConfig[serverName];
            if (!serverConfig) {
                consoleMsg(`Server "${serverName}" not found in zinstances.json`, ColorEnum.ERROR);
                process.exit(1);
            }
            actualServerName = serverName;
        }
        else {
            // Find server with isUsed flag
            const usedServerName = Object.keys(globalConfig).find(name => globalConfig[name].isUsed === true);
            if (!usedServerName) {
                consoleMsg('No server is marked as used. Either specify a server with -s or run "ziggy auth use <server>"', ColorEnum.ERROR);
                process.exit(1);
            }
            serverConfig = globalConfig[usedServerName];
            actualServerName = usedServerName;
        }
        // Decrypt sensitive fields
        return {
            apiUrl: serverConfig.apiUrl,
            port: serverConfig.port,
            authToken: serverConfig.authToken ? await decrypt(serverConfig.authToken) : '',
            userName: serverConfig.userName ? await decrypt(serverConfig.userName) : '',
            password: serverConfig.password ? await decrypt(serverConfig.password) : '',
            serverName: actualServerName,
            isPluginAuth: false,
        };
    }
    catch (error) {
        consoleMsg(`Error loading server config: ${error.message}`, ColorEnum.ERROR);
        process.exit(1);
    }
}
/**
 * Parse JSON payload string
 */
export function parsePayload(payloadStr) {
    if (!payloadStr) {
        return undefined;
    }
    try {
        return JSON.parse(payloadStr);
    }
    catch (error) {
        consoleMsg(`Invalid JSON payload: ${error.message}`, ColorEnum.ERROR);
        process.exit(1);
    }
}
//# sourceMappingURL=execute-helpers.js.map