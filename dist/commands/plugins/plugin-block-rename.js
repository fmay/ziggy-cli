import path from 'path';
import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../../utils/logger.js';
import { core } from '../../index.js';
import { fileExists } from '../../utils/file.js';
import { toKebabCase, toPascalCase } from '../../utils/template.js';
import { checkBlockExistence } from '../../utils/block-validation.js';
export function createPluginBlockRenameCommand() {
    return new Command('rename')
        .description('Rename a block in the current plugin')
        .argument('[blockName]', 'Current block name (e.g., my-block)')
        .action(async (blockName) => {
        logger.title('✏️  Rename block');
        // Validate we're in a plugin directory
        await core.validateFolder();
        const inquirer = (await import('inquirer')).default;
        const { readdirSync, readFileSync, writeFileSync } = await import('fs');
        const { rename: renameFile } = await import('fs/promises');
        // Display initial warning
        logger.log('\n⚠️  WARNING:');
        logger.log('  Any blocks which you rename will no longer function in Flows.');
        logger.log('  You will need to recreate them.\n');
        const { proceedInitial } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'proceedInitial',
                message: 'Are you absolutely sure you want to proceed?',
                default: false,
            },
        ]);
        if (!proceedInitial) {
            logger.info('Block rename cancelled');
            process.exit(0);
        }
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
        // Prompt for block to rename
        let selectedBlock = blockName ? toKebabCase(blockName) : null;
        if (!selectedBlock || !availableBlocks.includes(selectedBlock)) {
            const answers = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'blockName',
                    message: 'Select block to rename:',
                    choices: availableBlocks,
                },
            ]);
            selectedBlock = answers.blockName;
        }
        // Prompt for new block name
        const { newBlockName } = await inquirer.prompt([
            {
                type: 'input',
                name: 'newBlockName',
                message: 'Enter new block name:',
                validate: (input) => {
                    if (!input || input.trim().length === 0) {
                        return 'Block name is required';
                    }
                    if (!/^[A-Za-z0-9_ ]+$/.test(input)) {
                        return 'Block name can only contain letters, numbers, spaces and underscores';
                    }
                    const newBlockKebab = toKebabCase(input);
                    if (availableBlocks.includes(newBlockKebab)) {
                        return `Block '${newBlockKebab}' already exists`;
                    }
                    if (newBlockKebab === selectedBlock) {
                        return 'New name must be different from current name';
                    }
                    return true;
                },
            },
        ]);
        const oldBlockKebab = selectedBlock;
        const newBlockKebab = toKebabCase(newBlockName);
        const oldBlockDir = path.join(blocksDir, `${oldBlockKebab}-v1`);
        const newBlockDir = path.join(blocksDir, `${newBlockKebab}-v1`);
        // Convert to PascalCase for class names
        const oldBlockClassName = toPascalCase(oldBlockKebab);
        const newBlockClassName = toPascalCase(newBlockName);
        // Generate display names (Title Case with spaces)
        const oldBlockDisplayName = oldBlockKebab
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        const newBlockDisplayName = newBlockName
            .trim()
            .split(/[-_\s]+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        // Generate block IDs
        const oldBlockId = `${oldBlockKebab
            .replace(/[^a-zA-Z0-9]/g, '_')
            .toUpperCase()}_V1`;
        const newBlockId = `${newBlockName
            .replace(/[^a-zA-Z0-9]/g, '_')
            .toUpperCase()}_V1`;
        // Display summary
        logger.log('\n📋 Summary:');
        logger.log(`  Current Name: ${oldBlockKebab}`);
        logger.log(`  New Name: ${newBlockKebab}`);
        logger.log(`  Current Block ID: ${oldBlockId}`);
        logger.log(`  New Block ID: ${newBlockId}`);
        logger.log(`  Current Directory: ${oldBlockDir}`);
        logger.log(`  New Directory: ${newBlockDir}\n`);
        logger.log('⚠️  FINAL WARNING:');
        logger.log('  Renamed blocks in your Flows will no longer function.\n');
        const { confirmFinal } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmFinal',
                message: 'Please confirm you want to rename this block. Continue?',
                default: false,
            },
        ]);
        if (!confirmFinal) {
            logger.info('Block rename cancelled');
            process.exit(0);
        }
        // Check if new block type already exists on server
        try {
            await checkBlockExistence(newBlockId);
        }
        catch (error) {
            if (error instanceof Error && error.message === 'Block type already exists') {
                process.exit(1);
            }
            // Otherwise, continue with rename (network errors, etc.)
        }
        const spinner = ora('Renaming block...').start();
        try {
            // Rename the block directory
            await renameFile(oldBlockDir, newBlockDir);
            spinner.text = 'Renaming block files...';
            // Rename and update content of each file in the block directory
            const blockFiles = [
                { old: `${oldBlockKebab}.v1.config.ts`, new: `${newBlockKebab}.v1.config.ts` },
                { old: `${oldBlockKebab}.v1.definition.ts`, new: `${newBlockKebab}.v1.definition.ts` },
                { old: `${oldBlockKebab}.v1.server.ts`, new: `${newBlockKebab}.v1.server.ts` },
                { old: `${oldBlockKebab}.v1.block.tsx`, new: `${newBlockKebab}.v1.block.tsx` },
            ];
            for (const file of blockFiles) {
                const oldFilePath = path.join(newBlockDir, file.old);
                const newFilePath = path.join(newBlockDir, file.new);
                if (await fileExists(oldFilePath)) {
                    // Read the file content
                    let content = readFileSync(oldFilePath, 'utf-8');
                    // Replace old block names with new ones in the content
                    content = content
                        .replace(new RegExp(oldBlockClassName, 'g'), newBlockClassName)
                        .replace(new RegExp(oldBlockKebab, 'g'), newBlockKebab)
                        .replace(new RegExp(oldBlockId, 'g'), newBlockId)
                        .replace(new RegExp(oldBlockDisplayName, 'g'), newBlockDisplayName);
                    // Write the updated content to the new file
                    writeFileSync(newFilePath, content, 'utf-8');
                    // Delete the old file if it's different from the new file
                    if (oldFilePath !== newFilePath) {
                        const { unlink } = await import('fs/promises');
                        await unlink(oldFilePath);
                    }
                }
            }
            // Update manifest file
            spinner.text = 'Updating manifest...';
            const manifestPath = path.join(process.cwd(), 'src', 'index.ts');
            if (await fileExists(manifestPath)) {
                let manifestContent = readFileSync(manifestPath, 'utf-8');
                // Update import statement
                const oldImportPattern = new RegExp(`import\\s+{\\s*${oldBlockClassName}BlockV1\\s*}\\s+from\\s+['"]\\./blocks/${oldBlockKebab}-v1/${oldBlockKebab}\\.v1\\.definition\\.js['"]`, 'g');
                const newImportStatement = `import { ${newBlockClassName}BlockV1 } from './blocks/${newBlockKebab}-v1/${newBlockKebab}.v1.definition.js'`;
                manifestContent = manifestContent.replace(oldImportPattern, newImportStatement);
                // Update block class name in blocks array
                manifestContent = manifestContent.replace(new RegExp(`\\b${oldBlockClassName}BlockV1\\b`, 'g'), `${newBlockClassName}BlockV1`);
                // Update blockId in blockIds array
                manifestContent = manifestContent.replace(new RegExp(`['"]${oldBlockId}['"]`, 'g'), `'${newBlockId}'`);
                writeFileSync(manifestPath, manifestContent, 'utf-8');
            }
            spinner.succeed('Block renamed successfully');
            logger.success('\n✨ Block renamed successfully!\n');
            logger.info('Next steps:');
            logger.log(`  Build your plugin then run 'ziggy plugin register' to register these changes with your Ziggy instance\n`);
        }
        catch (error) {
            spinner.fail('Failed to rename block');
            logger.error(error instanceof Error ? error.message : String(error));
            process.exit(1);
        }
    });
}
//# sourceMappingURL=plugin-block-rename.js.map