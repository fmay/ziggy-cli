#!/usr/bin/env node
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Command } from 'commander';
import { createInitCommand, createGenerateCommand, createRegisterCommand, createHelloCommand, } from './commands/index.js';
import { createInfoCommand } from './commands/info/info.js';
import { createAuthCommand } from './commands/auth/auth.js';
import { CliCore } from './utils/cli-core.class.js';
import { createPackagesCommand } from './commands/packages.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Get cli class
export const core = new CliCore();
await core.init();
// Read package.json for version
const packageJson = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf-8'));
const program = new Command();
program
    .name('ziggy')
    .description('CLI tool for Ziggy plugin development')
    .version(packageJson.version);
// Register commands
program.addCommand(createAuthCommand());
program.addCommand(createPackagesCommand());
program.addCommand(createInitCommand());
program.addCommand(createInfoCommand());
program.addCommand(createGenerateCommand());
program.addCommand(createRegisterCommand());
program.addCommand(createHelloCommand());
// Parse arguments
program.parse(process.argv);
//# sourceMappingURL=index.js.map