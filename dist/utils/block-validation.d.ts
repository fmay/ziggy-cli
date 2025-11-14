/**
 * Check if a block type already exists on the server
 * @param blockId - The block type ID to check (e.g., "MY_BLOCK_V1")
 * @returns Promise that resolves if block is available, rejects if it exists
 */
export declare function checkBlockExistence(blockId: string): Promise<void>;
