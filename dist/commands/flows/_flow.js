import { Command } from 'commander';
import { createFlowListCommand } from './flow-list.js';
import { createFlowExecuteCommand } from './flow-execute.js';
export function createFlowCommand() {
    const flow = new Command('flow')
        .description('Manage Ziggy flows');
    // Add subcommands
    flow.addCommand(createFlowListCommand());
    flow.addCommand(createFlowExecuteCommand());
    return flow;
}
//# sourceMappingURL=_flow.js.map