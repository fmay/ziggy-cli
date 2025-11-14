export interface PluginPromptAnswers {
    pluginName: string;
    description: string;
    author: string;
    blockName: string;
}
export declare function promptPluginInit(defaultName: string): Promise<PluginPromptAnswers>;
