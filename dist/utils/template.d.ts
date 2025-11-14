export interface TemplateVariables {
    PLUGIN_NAME: string;
    PLUGIN_NAME_SLUG: string;
    PLUGIN_DESCRIPTION: string;
    PLUGIN_AUTHOR: string;
    BLOCK_TYPE: string;
    BLOCK_TYPE_PASCAL: string;
    BLOCK_NAME: string;
    BLOCK_NAME_LOWER: string;
    BLOCK_DESCRIPTION: string;
    BLOCK_DESCRIPTION_LOWER: string;
    HEADER_COLOR: string;
}
/**
 * Replace template variables in a string
 */
export declare function replaceVariables(content: string, variables: Partial<TemplateVariables>): string;
/**
 * Convert a string to PascalCase
 */
export declare function toPascalCase(str: string): string;
/**
 * Convert a string to SCREAMING_SNAKE_CASE
 */
export declare function toScreamingSnakeCase(str: string): string;
/**
 * Convert a string to kebab-case
 */
export declare function toKebabCase(str: string): string;
/**
 * Convert package name to slug (e.g., @myco/math -> myco-math)
 */
export declare function packageNameToSlug(packageName: string): string;
