/**
 * Replace template variables in a string
 */
export function replaceVariables(content, variables) {
    let result = content;
    for (const [key, value] of Object.entries(variables)) {
        const pattern = new RegExp(`{{${key}}}`, 'g');
        result = result.replace(pattern, value || '');
    }
    return result;
}
/**
 * Convert a string to PascalCase
 */
export function toPascalCase(str) {
    return str
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
        .replace(/^[a-z]/, chr => chr.toUpperCase());
}
/**
 * Convert a string to SCREAMING_SNAKE_CASE
 */
export function toScreamingSnakeCase(str) {
    return str
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toUpperCase();
}
/**
 * Convert a string to kebab-case
 */
export function toKebabCase(str) {
    return str
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
}
/**
 * Convert package name to slug (e.g., @myco/math -> myco-math)
 */
export function packageNameToSlug(packageName) {
    return packageName.replace('@', '').replace('/', '-');
}
//# sourceMappingURL=template.js.map