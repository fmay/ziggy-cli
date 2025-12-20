/**
 * Print entries in a formatted table with custom first column header, API URL, and Port columns
 * @param entries - Array of [name, config] tuples to display
 * @param firstColumnHeader - Header text for the first column (e.g., "Server" or "Plugin")
 */
export function printTable(entries, firstColumnHeader) {
    if (entries.length === 0)
        return;
    // Calculate column widths based on content
    const nameWidth = Math.max(20, firstColumnHeader.length, ...entries.map(([name]) => name.length));
    const urlWidth = Math.max(30, ...entries.map(([, config]) => config.apiUrl.length));
    const portWidth = 10;
    // Print header
    const header = `${firstColumnHeader.padEnd(nameWidth)}  ${'API URL'.padEnd(urlWidth)}  ${'Port'.padEnd(portWidth)}`;
    const separator = `${'-'.repeat(nameWidth)}  ${'-'.repeat(urlWidth)}  ${'-'.repeat(portWidth)}`;
    console.log(header);
    console.log(separator);
    // Print rows
    entries.forEach(([name, config]) => {
        const row = `${name.padEnd(nameWidth)}  ${config.apiUrl.padEnd(urlWidth)}  ${String(config.port).padEnd(portWidth)}`;
        console.log(row);
    });
}
//# sourceMappingURL=table-printer.js.map