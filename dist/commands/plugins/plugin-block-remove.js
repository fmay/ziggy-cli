import path from 'path';
import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../../utils/logger.js';
import { core } from '../../index.js';
import { fileExists } from '../../utils/file.js';
import { toKebabCase } from '../../utils/template.js';
export function createPluginBlockRemoveCommand() {
    return new Command('remove')
        .description('Remove a block from the current plugin')
        .argument('[blockName]', 'Block name (e.g., my-block)')
        .action(async (blockName) => {
        logger.title('🗑️  Remove block from plugin');
        // Validate we're in a plugin directory
        await core.validateFolder();
        const inquirer = (await import('inquirer')).default;
        const { readdirSync } = await import('fs');
        // Get list of existing blocks
        const blocksDir = path.join(process.cwd(), 'src', 'blocks');
        let availableBlocks = [];
        try {
            if (await fileExists(blocksDir)) {
                availableBlocks = readdirSync(blocksDir, { withFileTypes: true })
                    .filter(dirent => dirent.isDirectory())
                    .map(dirent => dirent.name)
                    .filter(name => name.endsWith('-v1'))
                    .map(name => name.replace(/-v1$/, ''));
            }
        }
        catch {
            logger.error('Failed to read blocks directory');
            process.exit(1);
        }
        if (availableBlocks.length === 0) {
            logger.warning('No blocks found in this plugin');
            process.exit(0);
        }
        // Prompt for block to remove
        let selectedBlock = blockName ? toKebabCase(blockName) : null;
        if (!selectedBlock || !availableBlocks.includes(selectedBlock)) {
            const answers = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'blockName',
                    message: 'Select block to remove:',
                    choices: availableBlocks,
                },
            ]);
            selectedBlock = answers.blockName;
        }
        const blockDir = path.join(blocksDir, `${selectedBlock}-v1`);
        // Confirm
        logger.log('\n⚠️  Warning:');
        logger.log(`  This will delete the block directory: ${blockDir}`);
        logger.log(`  This action cannot be undone!\n`);
        const { confirm } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: `Are you sure you want to remove '${selectedBlock}'?`,
                default: false,
            },
        ]);
        if (!confirm) {
            logger.info('Block removal cancelled');
            process.exit(0);
        }
        const spinner = ora('Removing block...').start();
        try {
            const { rm } = await import('fs/promises');
            await rm(blockDir, { recursive: true, force: true });
            // Update manifest file to remove the block
            const manifestPath = path.join(process.cwd(), 'src', 'index.ts');
            if (await fileExists(manifestPath)) {
                spinner.text = 'Updating manifest...';
                const { readFileSync, writeFileSync } = await import('fs');
                let manifestContent = readFileSync(manifestPath, 'utf-8');
                // Convert blockName to PascalCase for class name
                const blockClassName = selectedBlock
                    .split(/[-_]/)
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join('');
                // Generate block ID (e.g., MY_BLOCK_V1)
                const blockId = `${selectedBlock
                    .replace(/[^a-zA-Z0-9]/g, '_')
                    .toUpperCase()}_V1`;
                // Remove import statement
                const importPattern = new RegExp(`import\\s+{\\s*${blockClassName}BlockV1\\s*}\\s+from\\s+['"]\\./blocks/${selectedBlock}-v1/${selectedBlock}\\.v1\\.definition\\.js['"]\\s*\\n`, 'g');
                manifestContent = manifestContent.replace(importPattern, '');
                // Remove block from blocks array
                manifestContent = manifestContent.replace(new RegExp(`[,\\s]*${blockClassName}BlockV1[,\\s]*`, 'g'), (match, offset) => {
                    // Check if we're in the blocks array
                    const beforeMatch = manifestContent.slice(0, offset);
                    const blocksArrayStart = beforeMatch.lastIndexOf('blocks:');
                    const nextArrayStart = manifestContent.indexOf('[', blocksArrayStart);
                    const arrayEnd = manifestContent.indexOf(']', nextArrayStart);
                    if (offset > nextArrayStart && offset < arrayEnd) {
                        // Handle comma placement
                        const withinArray = manifestContent.slice(nextArrayStart + 1, arrayEnd);
                        const items = withinArray.split(',').map(s => s.trim()).filter(s => s && !s.includes(blockClassName));
                        return items.length === 0 ? '' : ', ';
                    }
                    return match;
                });
                // Clean up blocks array formatting
                manifestContent = manifestContent.replace(/blocks:\s*\[\s*,+\s*/g, 'blocks: [').replace(/,\s*,+/g, ',').replace(/,\s*]/g, ']');
                // Remove blockId from blockIds array
                manifestContent = manifestContent.replace(new RegExp(`[,\\s]*['"]${blockId}['"][,\\s]*`, 'g'), (match, offset) => {
                    // Check if we're in the blockIds array
                    const beforeMatch = manifestContent.slice(0, offset);
                    const blockIdsArrayStart = beforeMatch.lastIndexOf('blockIds:');
                    const nextArrayStart = manifestContent.indexOf('[', blockIdsArrayStart);
                    const arrayEnd = manifestContent.indexOf(']', nextArrayStart);
                    if (offset > nextArrayStart && offset < arrayEnd) {
                        // Handle comma placement
                        const withinArray = manifestContent.slice(nextArrayStart + 1, arrayEnd);
                        const items = withinArray.split(',').map(s => s.trim()).filter(s => s && !s.includes(blockId));
                        return items.length === 0 ? '' : ', ';
                    }
                    return match;
                });
                // Clean up blockIds array formatting
                manifestContent = manifestContent.replace(/blockIds:\s*\[\s*,+\s*/g, 'blockIds: [').replace(/,\s*,+/g, ',').replace(/,\s*]/g, ']');
                writeFileSync(manifestPath, manifestContent, 'utf-8');
            }
            spinner.succeed('Block removed successfully');
            logger.success('\n✨ Block removed successfully!\n');
            logger.info('Next steps:');
            logger.log(`  Run 'ziggy plugin register' to sync changes with the server\n`);
        }
        catch (error) {
            spinner.fail('Failed to remove block');
            logger.error(error instanceof Error ? error.message : String(error));
            process.exit(1);
        }
    });
}
//# sourceMappingURL=plugin-block-remove.js.map