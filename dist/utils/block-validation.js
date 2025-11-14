import ora from 'ora';
import { logger } from './logger.js';
import { core } from '../index.js';
/**
 * Check if a block type already exists on the server
 * @param blockId - The block type ID to check (e.g., "MY_BLOCK_V1")
 * @returns Promise that resolves if block is available, rejects if it exists
 */
export async function checkBlockExistence(blockId) {
    const checkSpinner = ora('Checking block existence...').start();
    try {
        await core.login();
        const api = core.getApiClient();
        const response = await api.plugins.pluginControllerCheckBlockExistence({
            blockType: blockId,
        });
        if (response.data.exists) {
            checkSpinner.fail('Block type already exists');
            if (response.data.conflicts && response.data.conflicts.length > 0) {
                const conflict = response.data.conflicts[0];
                if (conflict.conflictSource === 'core') {
                    logger.error(`\nBlock type "${blockId}" conflicts with a core Ziggy block`);
                }
                else {
                    logger.error(`\nBlock type "${blockId}" already exists in plugin: ${conflict.pluginName}`);
                }
            }
            logger.info('\nPlease choose a different block name or remove the existing block first.');
            throw new Error('Block type already exists');
        }
        checkSpinner.succeed('Block type is available');
    }
    catch (error) {
        // If it's our error about block existing, re-throw it
        if (error instanceof Error && error.message === 'Block type already exists') {
            throw error;
        }
        // For other errors (network, API, etc.), log warning but don't fail
        checkSpinner.fail('Failed to check block existence');
        logger.error(error instanceof Error ? error.message : String(error));
        logger.warning('Proceeding anyway...');
    }
}
//# sourceMappingURL=block-validation.js.map