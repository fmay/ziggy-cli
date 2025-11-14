import { TemplateVariables } from '../../../utils/template.js';
import { PluginPromptAnswers } from './create-prompt.js';
export declare const getTemplateVariables: (answers: PluginPromptAnswers) => Partial<TemplateVariables>;
export declare const createPluginScaffold: (pluginDir: string, answers: PluginPromptAnswers) => Promise<void>;
