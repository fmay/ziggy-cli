import { ZiggyConfig } from './api.js';
/**
 * Prompts the user for authentication credentials
 * @returns ZiggyConfig object with user-provided credentials
 */
export declare function promptAuthCredentials(): Promise<ZiggyConfig>;
