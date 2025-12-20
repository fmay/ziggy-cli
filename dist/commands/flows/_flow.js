import { Command } from 'commander';
import { createFlowListCommand } from './flow-list.js';
import { createFlowExecuteCommand } from './flow-execute.js';
import { createFlowExportCommand } from './flow-export.js';
import { createFlowImportCommand } from './flow-import.js';
export function createFlowCommand() {
    const flow = new Command('flow')
        .description('Manage Ziggy flows');
    // Add subcommands
    flow.addCommand(createFlowListCommand());
    flow.addCommand(createFlowExecuteCommand());
    flow.addCommand(createFlowExportCommand());
    flow.addCommand(createFlowImportCommand());
    return flow;
}
//# sourceMappingURL=_flow.js.map