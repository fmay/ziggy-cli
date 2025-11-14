export interface PluginPromptAnswers {
    pluginName: string;
    description: string;
    author: string;
    blockName: string;
}
export interface BlockPromptAnswers {
    blockName: string;
    description: string;
    headerColor: string;
}
/**
 * Prompt for plugin initialization details
 */
export declare function promptPluginInit(defaultName: string): Promise<PluginPromptAnswers>;
/**
 * Prompt for block generation details
 */
export declare function promptBlockGenerate(): Promise<BlockPromptAnswers>;
/**
 * Confirm action
 */
export declare function confirmAction(message: string): Promise<boolean>;
