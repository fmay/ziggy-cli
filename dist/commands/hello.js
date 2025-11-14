import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';
export function createHelloCommand() {
    return new Command('hello')
        .description('Demo command showing CLI capabilities (Inquirer, Chalk, Ora, Axios)')
        .action(async () => {
        console.log(chalk.bold.cyan('\n👋 Ziggy CLI Demo\n'));
        // Inquirer: Interactive prompt
        const { name } = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                default: 'Developer',
            },
        ]);
        // Chalk: Styled output
        console.log(chalk.green('\n✓'), `Hello, ${chalk.yellow.bold(name)}!`);
        console.log(chalk.blue('ℹ'), 'Welcome to the Ziggy CLI');
        // Ora: Loading spinner
        const spinner = ora('Fetching a fun fact...').start();
        try {
            // Axios: HTTP request (mock example)
            await new Promise(resolve => setTimeout(resolve, 1500));
            // Simulating an API response
            const funFacts = [
                'Ziggy makes plugin development easy!',
                'You can generate blocks with a single command.',
                'The CLI uses Commander.js for command handling.',
                'Inquirer provides interactive prompts.',
                'Chalk adds colors to terminal output.',
                'Ora creates beautiful loading spinners.',
            ];
            const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
            spinner.succeed('Fun fact retrieved!');
            console.log(chalk.magenta('\n💡 Fun Fact:'), chalk.italic(randomFact));
        }
        catch (_error) {
            spinner.fail('Failed to fetch fun fact');
        }
        // Summary
        console.log(chalk.bold.green('\n✨ Demo complete!\n'));
        console.log('This command demonstrates:');
        console.log(`  ${chalk.cyan('•')} Inquirer for interactive prompts`);
        console.log(`  ${chalk.cyan('•')} Chalk for colorful output`);
        console.log(`  ${chalk.cyan('•')} Ora for loading spinners`);
        console.log(`  ${chalk.cyan('•')} Axios for HTTP requests`);
        console.log('\nTry these commands:');
        console.log(`  ${chalk.yellow('ziggy init my-plugin')} - Create a new plugin`);
        console.log(`  ${chalk.yellow('ziggy generate block MyBlock')} - Generate a block`);
        console.log(`  ${chalk.yellow('ziggy register .')} - Register plugin with Ziggy\n`);
    });
}
//# sourceMappingURL=hello.js.map