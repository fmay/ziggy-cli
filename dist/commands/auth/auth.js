import { Command } from 'commander';
import { core } from '../../index.js';
import { ColorEnum, consoleMsg } from '../../utils/console-msg.js';
import { promptAuthCredentials } from '../../utils/auth-prompt.js';
export function createAuthCommand() {
    return new Command('auth')
        .description('Authorize Ziggy and connect to an instance')
        .action(async () => {
        await core.validateFolder(true);
        consoleMsg('');
        // Prompt for authentication credentials
        const newConfig = await promptAuthCredentials();
        // Set configuration
        core.setConfig(newConfig);
        // Login
        if (!await core.login(newConfig))
            return;
        // Finished
        consoleMsg('\nAuthorization was successful', ColorEnum.SUCCESS);
        consoleMsg('');
    });
}
//# sourceMappingURL=auth.js.map