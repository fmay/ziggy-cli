import { ZiggyConfig } from '../../../utils/api.js';
/**
 * Get the server configuration from zinstances.json
 * If serverName is specified, use that server
 * Otherwise, use the server with isUsed flag
 */
export declare function getServerConfig(serverName?: string): Promise<ZiggyConfig | null>;
/**
 * Parse JSON payload string
 */
export declare function parsePayload(payloadStr?: string): unknown;
