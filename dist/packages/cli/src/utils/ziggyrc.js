import path from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { EmptyZiggyConfig } from './api.js';
import { decrypt, encrypt } from './crypto.js';
import { consoleMsg } from './console-msg.js';
/**
 * Load Ziggy configuration from .ziggyrc.json
 */
export async function loadPackageConfig() {
    const filePath = path.join(process.cwd(), '.ziggyrc.json');
    try {
        let rcRaw = '';
        try {
            rcRaw = readFileSync(filePath, 'utf8');
        }
        catch {
            return null;
        }
        // Return default config
        const rc = JSON.parse(rcRaw);
        return {
            apiUrl: rc.apiUrl,
            port: rc.port,
            authToken: rc.authToken ? await decrypt(rc.authToken) : '',
            userName: await decrypt(rc.userName),
            password: await decrypt(rc.password),
        };
    }
    catch (error) {
        console.log(error.stack);
        return EmptyZiggyConfig;
    }
}
/**
 * Save Ziggy configuration to .ziggyrc.json
 */
export async function savePackageConfig(config) {
    const filePath = path.join(process.cwd(), '.ziggyrc.json');
    if (!config.userName || !config.password) {
        consoleMsg('User name and password must both be present to save to .ziggyrc.json');
        throw new Error('User name and password must both be present to save to .ziggyrc.json');
    }
    const copy = { ...config };
    copy.userName = await encrypt(config.userName);
    copy.password = await encrypt(config.password);
    copy.authToken = config.authToken ? await encrypt(config.authToken) : '';
    writeFileSync(filePath, JSON.stringify(copy, null, 2));
}
//# sourceMappingURL=ziggyrc.js.map