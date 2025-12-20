/**
 * Print entries in a formatted table with custom first column header, API URL, and Port columns
 * @param entries - Array of [name, config] tuples to display
 * @param firstColumnHeader - Header text for the first column (e.g., "Server" or "Plugin")
 */
export declare function printTable(entries: [string, {
    apiUrl: string;
    port: string | number;
}][], firstColumnHeader: string): void;
