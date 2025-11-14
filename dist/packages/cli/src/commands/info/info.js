import { Command } from 'commander';
import { core } from '../../index.js';
export function createInfoCommand() {
    return new Command('info')
        .description('Lists information about a package and its blocks')
        .action(async () => {
        const api = core.getApiClient();
        // Get the package info from the server
        // const url = '/plugin'
        // const response = await core.apiGet(url)
        const response = await api.plugins.pluginControllerGetAllPlugins();
        // List them all
        console.log(response.data);
    });
}
//# sourceMappingURL=info.js.map