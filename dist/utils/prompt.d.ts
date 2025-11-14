export interface BlockPromptAnswers {
    blockName: string;
    description: string;
    headerColor: string;
}
/**
 * Prompt for block generation details
 */
export declare function promptBlockGenerate(): Promise<BlockPromptAnswers>;
/**
 * Confirm action
 */
export declare function confirmAction(message: string): Promise<boolean>;
