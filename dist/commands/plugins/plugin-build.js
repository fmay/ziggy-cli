import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { Command } from 'commander';
import ora from 'ora';
import { logger } from '../../utils/logger.js';
import { core } from '../../index.js';
import { fileExists, readJSON } from '../../utils/file.js';
const execAsync = promisify(exec);
export function createPluginBuildCommand() {
    return new Command('build')
        .description('Build the current plugin using its package.json build script')
        .action(async () => {
        logger.title('🔨 Build Plugin');
        // Validate we're in a plugin directory
        await core.validateFolder();
        const cwd = process.cwd();
        const packageJsonPath = path.join(cwd, 'package.json');
        // Check if package.json exists
        if (!(await fileExists(packageJsonPath))) {
            logger.error('package.json not found in current directory');
            process.exit(1);
        }
        // Read package.json to get the build script
        const packageJson = await readJSON(packageJsonPath);
        if (!packageJson.scripts?.build) {
            logger.error('No build script found in package.json');
            logger.info('Please add a "build" script to your package.json');
            process.exit(1);
        }
        logger.log(`\nPlugin: ${packageJson.name}`);
        logger.log(`Build script: ${packageJson.scripts.build}\n`);
        const spinner = ora('Building plugin...').start();
        try {
            const { stdout, stderr } = await execAsync('npm run build', { cwd });
            spinner.succeed('Plugin built successfully');
            // Show output if there's any
            if (stdout) {
                logger.log(`\n${stdout}`);
            }
            if (stderr) {
                logger.warning(`\n${stderr}`);
            }
            logger.success('\n✨ Build complete!\n');
        }
        catch (error) {
            spinner.fail('Build failed');
            if (error && typeof error === 'object' && 'stdout' in error) {
                const execError = error;
                logger.log(`\n${execError.stdout}`);
                logger.error(`\n${execError.stderr}`);
            }
            else {
                logger.error(error instanceof Error ? error.message : String(error));
            }
            process.exit(1);
        }
    });
}
//# sourceMappingURL=plugin-build.js.map