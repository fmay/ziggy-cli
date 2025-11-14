import path from 'path';
import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../../utils/logger.js';
import { core } from '../../index.js';
import { fileExists } from '../../utils/file.js';
import { toKebabCase } from '../../utils/template.js';
import { createBlockFromTemplate } from './helpers/create-block-from-template.js';
import { checkBlockExistence } from '../../utils/block-validation.js';
export function createPluginBlockAddCommand() {
    return new Command('add')
        .description('Add a new block to the current plugin')
        .argument('[blockName]', 'Block name (e.g., my-block)')
        .action(async (blockName) => {
        logger.title('➕ Add new block to plugin');
        // Validate we're in a plugin directory
        await core.validateFolder();
        // Prompt for block details
        const inquirer = (await import('inquirer')).default;
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'blockName',
                message: 'Block name:',
                default: blockName || 'my-block',
                validate: (input) => {
                    if (!input || input.trim().length === 0) {
                        return 'Block name is required';
                    }
                    if (!/^(?:@[a-z][a-z0-9-]*\/)?[a-z][a-z0-9-]*$/.test(input)) {
                        return 'Invalid plugin name format. Must be all lower case, no spaces.';
                    }
                    return true;
                },
            },
            {
                type: 'input',
                name: 'description',
                message: 'Block description:',
                default: 'A new block',
            },
            {
                type: 'confirm',
                name: 'batching',
                message: 'Should this block be used for batching?',
                default: false,
            },
        ]);
        const blockNameKebab = toKebabCase(answers.blockName);
        const blockDir = path.join(process.cwd(), 'src', 'blocks', `${blockNameKebab}-v1`);
        // Check if block already exists
        if (await fileExists(blockDir)) {
            logger.error(`Block '${blockNameKebab}' already exists`);
            process.exit(1);
        }
        // Confirm
        logger.log('\n📋 Summary:');
        logger.log(`  Block Name: ${answers.blockName}`);
        logger.log(`  Description: ${answers.description}`);
        logger.log(`  Directory: ${blockDir}\n`);
        const { confirm } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: 'Create this block?',
                default: true,
            },
        ]);
        if (!confirm) {
            logger.info('Block creation cancelled');
            process.exit(0);
        }
        // Check if block type already exists on server
        const blockId = `${answers.blockName
            .replace(/[^a-zA-Z0-9]/g, '_')
            .toUpperCase()}_V1`;
        try {
            await checkBlockExistence(blockId);
        }
        catch (error) {
            if (error instanceof Error && error.message === 'Block type already exists') {
                process.exit(1);
            }
            // Otherwise, continue with creation (network errors, etc.)
        }
        const spinner = ora('Creating block...').start();
        try {
            // Get plugin info from package.json
            const packageJsonPath = path.join(process.cwd(), 'package.json');
            if (!await fileExists(packageJsonPath)) {
                throw new Error('package.json not found. Are you in a plugin directory?');
            }
            const { readFileSync } = await import('fs');
            const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
            // Create block from template
            await createBlockFromTemplate(process.cwd(), answers.batching, {
                pluginName: packageJson.name,
                description: answers.description,
                author: packageJson.author,
                blockName: answers.blockName,
            });
            // Update manifest file
            const manifestPath = path.join(process.cwd(), 'src', 'index.ts');
            if (await fileExists(manifestPath)) {
                const { writeFileSync } = await import('fs');
                let manifestContent = readFileSync(manifestPath, 'utf-8');
                // Convert blockName to PascalCase for class name
                const blockClassName = answers.blockName
                    .split(/[-_]/)
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join('');
                // Generate block ID (e.g., MY_BLOCK_V1)
                const blockId = `${answers.blockName
                    .replace(/[^a-zA-Z0-9]/g, '_')
                    .toUpperCase()}_V1`;
                // Add import statement after existing imports
                const importStatement = `import { ${blockClassName}BlockV1 } from './blocks/${blockNameKebab}-v1/${blockNameKebab}.v1.definition.js'\n`;
                const lastImportIndex = manifestContent.lastIndexOf('import ');
                const nextLineAfterLastImport = manifestContent.indexOf('\n', lastImportIndex) + 1;
                manifestContent = manifestContent.slice(0, nextLineAfterLastImport) + importStatement + manifestContent.slice(nextLineAfterLastImport);
                // Add block to blocks array
                const blocksMatch = manifestContent.match(/blocks:\s*\[([\s\S]*?)]/);
                if (blocksMatch) {
                    const blocksContent = blocksMatch[1].trim();
                    const newBlocksContent = blocksContent
                        ? `${blocksContent}, ${blockClassName}BlockV1`
                        : `${blockClassName}BlockV1`;
                    manifestContent = manifestContent.replace(/blocks:\s*\[([\s\S]*?)]/, `blocks: [${newBlocksContent}]`);
                }
                // Add blockId to blockIds array in the first collection
                const blockIdsMatch = manifestContent.match(/blockIds:\s*\[([\s\S]*?)]/);
                if (blockIdsMatch) {
                    const blockIdsContent = blockIdsMatch[1].trim();
                    const newBlockIdsContent = blockIdsContent
                        ? `${blockIdsContent}, '${blockId}'`
                        : `'${blockId}'`;
                    manifestContent = manifestContent.replace(/blockIds:\s*\[([\s\S]*?)]/, `blockIds: [${newBlockIdsContent}]`);
                }
                writeFileSync(manifestPath, manifestContent, 'utf-8');
                spinner.text = 'Updating manifest...';
            }
            spinner.succeed('Block created successfully');
            logger.success('\n✨ Block added successfully!\n');
            logger.info('Next steps:');
            logger.log(`  1. Edit the block files in src/blocks/${blockNameKebab}-v1/`);
            logger.log(`  2. Run 'ziggy plugin register' to register the new block with the server\n`);
        }
        catch (error) {
            spinner.fail('Failed to create block');
            logger.error(error instanceof Error ? error.message : String(error));
            process.exit(1);
        }
    });
}
//# sourceMappingURL=plugin-block-add.js.map