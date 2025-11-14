import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-extra';
import { replaceVariables } from './template.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/**
 * Get the templates directory path
 */
export function getTemplatesDir() {
    return path.join(__dirname, '..', 'commands/plugins/templates');
}
/**
 * Read a template file
 */
export async function readTemplate(templatePath) {
    const fullPath = path.join(getTemplatesDir(), templatePath);
    return await fs.readFile(fullPath, 'utf-8');
}
/**
 * Write a file with template variable replacement
 */
export async function writeFromTemplate(outputPath, templatePath, variables) {
    const templateContent = await readTemplate(templatePath);
    const processedContent = replaceVariables(templateContent, variables);
    await fs.outputFile(outputPath, processedContent);
}
/**
 * Copy a template file to destination
 */
export async function copyTemplate(templatePath, outputPath, variables) {
    await writeFromTemplate(outputPath, templatePath, variables);
}
/**
 * Check if directory exists and is not empty
 */
export async function isDirectoryEmpty(dirPath) {
    try {
        const files = await fs.readdir(dirPath);
        return files.length === 0;
    }
    catch {
        return true; // Directory doesn't exist, so it's "empty"
    }
}
/**
 * Ensure directory exists
 */
export async function ensureDir(dirPath) {
    await fs.ensureDir(dirPath);
}
/**
 * Check if file exists
 */
export async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Read JSON file
 */
export async function readJSON(filePath) {
    return await fs.readJSON(filePath);
}
/**
 * Write JSON file
 */
export async function writeJSON(filePath, data) {
    await fs.writeJSON(filePath, data, { spaces: 2 });
}
//# sourceMappingURL=file.js.map