# Ziggy CLI

CLI tool for Ziggy plugin development

## Installation

Install globally from GitHub:

```bash
npm install -g github:fmay/ziggy-cli.git
```

## Usage

After installation, you can use the `ziggy` command:

```bash
# View available commands
ziggy --help

# Authorize and connect to a Ziggy instance
ziggy auth

# Manage plugins
ziggy plugin --help
ziggy plugin list
ziggy plugin create
ziggy plugin register
ziggy plugin unregister

# Manage plugin blocks
ziggy plugin block add
ziggy plugin block remove
ziggy plugin block rename
```

## Requirements

- Node.js >= 18.0.0

## Commands

### Authentication

```bash
ziggy auth
```

Authorize and connect to a Ziggy instance. This will prompt you for:
- Instance URL
- Port
- Username
- Password

### Plugin Management

```bash
ziggy plugin list           # List all plugins
ziggy plugin create         # Create a new plugin
ziggy plugin register       # Register a plugin
ziggy plugin unregister     # Unregister a plugin
```

### Block Management

```bash
ziggy plugin block add      # Add a block to a plugin
ziggy plugin block remove   # Remove a block from a plugin
ziggy plugin block rename   # Rename a block in a plugin
```

## Configuration

Ziggy CLI stores configuration in `~/.ziggy/config.json`

## License

MIT
