import { TemplateVariables } from './template.js';
/**
 * Get the templates directory path
 */
export declare function getTemplatesDir(): string;
/**
 * Read a template file
 */
export declare function readTemplate(templatePath: string): Promise<string>;
/**
 * Write a file with template variable replacement
 */
export declare function writeFromTemplate(outputPath: string, templatePath: string, variables: Partial<TemplateVariables>): Promise<void>;
/**
 * Copy a template file to destination
 */
export declare function copyTemplate(templatePath: string, outputPath: string, variables: Partial<TemplateVariables>): Promise<void>;
/**
 * Check if directory exists and is not empty
 */
export declare function isDirectoryEmpty(dirPath: string): Promise<boolean>;
/**
 * Ensure directory exists
 */
export declare function ensureDir(dirPath: string): Promise<void>;
/**
 * Check if file exists
 */
export declare function fileExists(filePath: string): Promise<boolean>;
/**
 * Read JSON file
 */
export declare function readJSON<T = unknown>(filePath: string): Promise<T>;
/**
 * Write JSON file
 */
export declare function writeJSON(filePath: string, data: unknown): Promise<void>;
