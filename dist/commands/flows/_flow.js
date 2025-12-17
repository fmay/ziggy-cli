import { Command } from 'commander';
import { createFlowListCommand } from './flow-list.js';
export function createFlowCommand() {
    const flow = new Command('flow')
        .description('Manage Ziggy flows');
    // Add subcommands
    flow.addCommand(createFlowListCommand());
    return flow;
}
//# sourceMappingURL=_flow.js.map