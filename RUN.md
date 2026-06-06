# Mexico Legal Guide - Automation System

## Prerequisites

To run the automation scripts, you need **Node.js** installed on your system.

### How to install Node.js
If you don't have Node.js, you can download it from [nodejs.org](https://nodejs.org/). 
- **Windows/macOS:** Download the installer from the website.
- **Linux (Ubuntu/Debian):**
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```

## How to use the Gumroad Product Creator

This script automatically creates the lead magnet and product bundles in your Gumroad account using the API.

### Execution
From the root of the repository, run:
```bash
node automation/gumroad-bundler/create-products.js
```

The script will list your existing products and then attempt to create the new bundles defined in the strategy.
