import chalk from 'chalk';
export const logger = {
    success: (message) => {
        console.log(chalk.green('✓'), message);
    },
    error: (message) => {
        console.log(chalk.red('✗'), message);
    },
    info: (message) => {
        console.log(chalk.blue('ℹ'), message);
    },
    warning: (message) => {
        console.log(chalk.yellow('⚠'), message);
    },
    title: (message) => {
        console.log(chalk.bold.cyan(`\n${message}\n`));
    },
    log: (message) => {
        console.log(message);
    },
};
//# sourceMappingURL=logger.js.map