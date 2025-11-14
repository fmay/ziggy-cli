import path from 'path';
import { copyTemplate } from '../../../utils/file.js';
import { packageNameToSlug, toKebabCase, toPascalCase, toScreamingSnakeCase, } from '../../../utils/template.js';
export const getTemplateVariables = (answers) => {
    // Prepare template variables
    const blockNameLower = toKebabCase(answers.blockName);
    const blockTypePascal = toPascalCase(answers.blockName);
    const blockType = toScreamingSnakeCase(answers.blockName);
    const variables = {
        PLUGIN_NAME: answers.pluginName,
        PLUGIN_NAME_SLUG: packageNameToSlug(answers.pluginName),
        PLUGIN_DESCRIPTION: answers.description,
        PLUGIN_AUTHOR: answers.author,
        BLOCK_TYPE: `${blockType}_V1`,
        BLOCK_TYPE_PASCAL: blockTypePascal,
        BLOCK_NAME: answers.blockName,
        BLOCK_NAME_LOWER: blockNameLower,
        BLOCK_DESCRIPTION: `${answers.blockName} block for ${answers.pluginName}`,
        BLOCK_DESCRIPTION_LOWER: `perform ${answers.blockName} operations`,
        HEADER_COLOR: '#3b82f6',
    };
    return variables;
};
export const createPluginScaffold = async (pluginDir, answers) => {
    const variables = getTemplateVariables(answers);
    await copyTemplate('plugin/package.json.template', path.join(pluginDir, 'package.json'), variables);
    await copyTemplate('plugin/tsconfig.json.template', path.join(pluginDir, 'tsconfig.json'), variables);
    await copyTemplate('plugin/vite.config.client.js.template', path.join(pluginDir, 'vite.config.client.js'), variables);
    await copyTemplate('plugin/.gitignore.template', path.join(pluginDir, '.gitignore'), variables);
    await copyTemplate('plugin/README.md.template', path.join(pluginDir, 'README.md'), variables);
    await copyTemplate('plugin/index.ts.template', path.join(pluginDir, 'src', 'index.ts'), variables);
    await copyTemplate('plugin/.prettierrc.template', path.join(pluginDir, 'src', '.prettierrc'), variables);
    await copyTemplate('plugin/eslint.config.js.template', path.join(pluginDir, 'src', '.eslint.config.js'), variables);
};
//# sourceMappingURL=create-plugin-scaffold.js.map