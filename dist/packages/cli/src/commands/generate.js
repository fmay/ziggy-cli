import path from 'path';
import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../utils/logger.js';
import { promptBlockGenerate } from '../utils/prompt.js';
import { copyTemplate, ensureDir, fileExists, readJSON } from '../utils/file.js';
import { toKebabCase, toPascalCase, toScreamingSnakeCase, packageNameToSlug, } from '../utils/template.js';
export function createGenerateCommand() {
    const generate = new Command('generate').description('Generate plugin components');
    generate
        .command('block')
        .description('Generate a new block')
        .argument('[name]', 'Block name (e.g., MyBlock)')
        .action(async (name) => {
        logger.title('🔨 Generate Block');
        // Check if we're in a plugin directory
        const packageJsonPath = path.join(process.cwd(), 'package.json');
        if (!(await fileExists(packageJsonPath))) {
            logger.error('Not in a plugin directory (package.json not found)');
            logger.info('Run this command from the root of your plugin directory');
            process.exit(1);
        }
        const packageJson = await readJSON(packageJsonPath);
        // Check if src/index.ts exists
        const indexPath = path.join(process.cwd(), 'src', 'index.ts');
        if (!(await fileExists(indexPath))) {
            logger.error('src/index.ts not found');
            logger.info('This does not appear to be a valid Ziggy plugin');
            process.exit(1);
        }
        // Prompt for block details
        const answers = await promptBlockGenerate();
        const blockName = name || answers.blockName;
        const spinner = ora('Generating block...').start();
        try {
            const blockNameLower = toKebabCase(blockName);
            const blockTypePascal = toPascalCase(blockName);
            const blockType = toScreamingSnakeCase(blockName);
            const variables = {
                PLUGIN_NAME: packageJson.name,
                PLUGIN_NAME_SLUG: packageNameToSlug(packageJson.name),
                BLOCK_TYPE: `${blockType}_V1`,
                BLOCK_TYPE_PASCAL: blockTypePascal,
                BLOCK_NAME: blockName,
                BLOCK_NAME_LOWER: blockNameLower,
                BLOCK_DESCRIPTION: answers.description,
                BLOCK_DESCRIPTION_LOWER: answers.description.toLowerCase(),
                HEADER_COLOR: answers.headerColor,
            };
            // Create block directory
            const blockDir = path.join(process.cwd(), 'src', 'blocks', `${blockNameLower}-v1`);
            if (await fileExists(blockDir)) {
                spinner.fail('Block directory already exists');
                logger.error(`Block ${blockNameLower}-v1 already exists`);
                process.exit(1);
            }
            await ensureDir(blockDir);
            // Generate block files
            await copyTemplate('block/block.v1.config.ts.template', path.join(blockDir, `${blockNameLower}.v1.config.ts`), variables);
            await copyTemplate('block/block.v1.definition.ts.template', path.join(blockDir, `${blockNameLower}.v1.definition.ts`), variables);
            await copyTemplate('block/block.v1.server.ts.template', path.join(blockDir, `${blockNameLower}.v1.server.ts`), variables);
            await copyTemplate('block/block.v1.block.tsx.template', path.join(blockDir, `${blockNameLower}.v1.block.tsx`), variables);
            spinner.succeed('Block files generated');
            // Update src/index.ts
            const updateSpinner = ora('Updating plugin manifest...').start();
            try {
                const fs = await import('fs-extra');
                const indexContent = await fs.readFile(indexPath, 'utf-8');
                // Add import statement
                const importStatement = `import { ${blockTypePascal}BlockV1 } from './blocks/${blockNameLower}-v1/${blockNameLower}.v1.definition.js'\n`;
                // Find the first import and add after it
                const lines = indexContent.split('\n');
                let lastImportIndex = -1;
                for (let i = lines.length - 1; i >= 0; i--) {
                    if (lines[i].startsWith('import')) {
                        lastImportIndex = i;
                        break;
                    }
                }
                if (lastImportIndex !== -1) {
                    lines.splice(lastImportIndex + 1, 0, importStatement);
                }
                else {
                    lines.unshift(importStatement);
                }
                // Add block to blocks array
                let updatedContent = lines.join('\n');
                updatedContent = updatedContent.replace(/(blocks:\s*\[)([^\]]*)(])/, `$1$2, ${blockTypePascal}BlockV1$3`);
                // Add block ID to collections
                updatedContent = updatedContent.replace(/(blockIds:\s*\[)([^\]]*)(])/, `$1$2, '${blockType}_V1'$3`);
                await fs.writeFile(indexPath, updatedContent);
                updateSpinner.succeed('Plugin manifest updated');
            }
            catch (_error) {
                updateSpinner.fail('Failed to update plugin manifest');
                logger.warning('Please manually add the block to src/index.ts:');
                logger.log(`  import { ${blockTypePascal}BlockV1 } from './blocks/${blockNameLower}-v1/${blockNameLower}.v1.definition.js'`);
                logger.log(`  Add ${blockTypePascal}BlockV1 to the blocks array`);
                logger.log(`  Add '${blockType}_V1' to the blockIds array`);
            }
            logger.success('\n✨ Block generated successfully!\n');
            logger.info('Next steps:');
            logger.log('  npm run build');
            logger.log('  ziggy register .');
        }
        catch (error) {
            spinner.fail('Failed to generate block');
            logger.error(error instanceof Error ? error.message : String(error));
            process.exit(1);
        }
    });
    return generate;
}
//# sourceMappingURL=generate.js.map