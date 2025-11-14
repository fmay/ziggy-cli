import path from 'path';
import { copyTemplate, ensureDir } from '../../../utils/file.js';
import { toKebabCase } from '../../../utils/template.js';
import { getTemplateVariables } from './create-plugin-scaffold.js';
export const createBlockFromTemplate = async (pluginDir, isBatching, answers) => {
    const variables = getTemplateVariables(answers);
    const blockNameLower = toKebabCase(answers.blockName);
    const templateDir = isBatching ? 'block-batch' : 'block-simple';
    // Create first block
    const blockDir = path.join(pluginDir, 'src', 'blocks', `${blockNameLower}-v1`);
    await ensureDir(blockDir);
    await copyTemplate(`${templateDir}/block.v1.config.ts.template`, path.join(blockDir, `${blockNameLower}.v1.config.ts`), variables);
    await copyTemplate(`${templateDir}/block.v1.definition.ts.template`, path.join(blockDir, `${blockNameLower}.v1.definition.ts`), variables);
    await copyTemplate(`${templateDir}/block.v1.server.ts.template`, path.join(blockDir, `${blockNameLower}.v1.server.ts`), variables);
    await copyTemplate(`${templateDir}/block.v1.block.tsx.template`, path.join(blockDir, `${blockNameLower}.v1.block.tsx`), variables);
};
//# sourceMappingURL=create-block-from-template.js.map