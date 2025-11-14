import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../utils/logger.js';
import { promptPluginInit } from '../utils/prompt.js';
import { copyTemplate, ensureDir, fileExists, isDirectoryEmpty } from '../utils/file.js';
import { packageNameToSlug, toPascalCase, toScreamingSnakeCase, toKebabCase, } from '../utils/template.js';
const execAsync = promisify(exec);
export function createInitCommand() {
    return new Command('init')
        .description('Initialize a new Ziggy plugin')
        .argument('[name]', 'Plugin name (e.g., @myco/my-plugin)')
        .action(async (name) => {
        logger.title('🚀 Initialize Ziggy Plugin');
        // Prompt for plugin details
        const answers = await promptPluginInit(name || '@myco/my-plugin');
        const pluginDir = path.join(process.cwd(), path.basename(answers.pluginName));
        // Check if directory exists and is not empty
        if (await fileExists(pluginDir)) {
            const isEmpty = await isDirectoryEmpty(pluginDir);
            if (!isEmpty) {
                logger.error(`Directory ${pluginDir} already exists and is not empty`);
                process.exit(1);
            }
        }
        const spinner = ora('Creating plugin structure...').start();
        try {
            // Create directory structure
            await ensureDir(pluginDir);
            await ensureDir(path.join(pluginDir, 'src', 'blocks'));
            // Prepare template variables
            const blockNameLower = toKebabCase(answers.blockName);
            const blockTypePascal = toPascalCase(answers.blockName);
            const blockType = toScreamingSnakeCase(answers.blockName);
            const variables = {
                PLUGIN_NAME: answers.pluginName,
                PLUGIN_NAME_SLUG: packageNameToSlug(answers.pluginName),
                PLUGIN_DESCRIPTION: answers.description,
                PLUGIN_AUTHOR: answers.author,
                BLOCK_TYPE: `${blockType}_V1`,
                BLOCK_TYPE_PASCAL: blockTypePascal,
                BLOCK_NAME: answers.blockName,
                BLOCK_NAME_LOWER: blockNameLower,
                BLOCK_DESCRIPTION: `A custom ${answers.blockName} block`,
                BLOCK_DESCRIPTION_LOWER: `perform ${answers.blockName} operations`,
                HEADER_COLOR: '#3b82f6',
            };
            // Copy plugin templates
            await copyTemplate('plugin/package.json.template', path.join(pluginDir, 'package.json'), variables);
            await copyTemplate('plugin/tsconfig.json.template', path.join(pluginDir, 'tsconfig.json'), variables);
            await copyTemplate('plugin/vite.config.client.js.template', path.join(pluginDir, 'vite.config.client.js'), variables);
            await copyTemplate('plugin/.gitignore.template', path.join(pluginDir, '.gitignore'), variables);
            await copyTemplate('plugin/README.md.template', path.join(pluginDir, 'README.md'), variables);
            await copyTemplate('plugin/index.ts.template', path.join(pluginDir, 'src', 'index.ts'), variables);
            // Create first block
            const blockDir = path.join(pluginDir, 'src', 'blocks', `${blockNameLower}-v1`);
            await ensureDir(blockDir);
            await copyTemplate('block/block.v1.config.ts.template', path.join(blockDir, `${blockNameLower}.v1.config.ts`), variables);
            await copyTemplate('block/block.v1.definition.ts.template', path.join(blockDir, `${blockNameLower}.v1.definition.ts`), variables);
            await copyTemplate('block/block.v1.server.ts.template', path.join(blockDir, `${blockNameLower}.v1.server.ts`), variables);
            await copyTemplate('block/block.v1.block.tsx.template', path.join(blockDir, `${blockNameLower}.v1.block.tsx`), variables);
            spinner.succeed('Plugin structure created');
            // Install dependencies
            const installSpinner = ora('Installing dependencies...').start();
            try {
                await execAsync('npm install', { cwd: pluginDir });
                installSpinner.succeed('Dependencies installed');
            }
            catch (_error) {
                installSpinner.fail('Failed to install dependencies');
                logger.warning('You can manually run: npm install');
            }
            logger.success('\n✨ Plugin initialized successfully!\n');
            logger.info('Next steps:');
            logger.log(`  cd ${path.basename(pluginDir)}`);
            logger.log('  npm run build');
            logger.log('  ziggy register .');
        }
        catch (error) {
            spinner.fail('Failed to create plugin');
            logger.error(error instanceof Error ? error.message : String(error));
            process.exit(1);
        }
    });
}
//# sourceMappingURL=init.js.map