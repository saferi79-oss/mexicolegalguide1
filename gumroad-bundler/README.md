# Gumroad Bundle Generator

This utility helps Sabrina (the owner) create product bundles on Gumroad accurately.

## How to use

1. Open your terminal in this directory.
2. Run the script:
   ```bash
   node create-bundles.js
   ```
3. Follow the printed instructions for each bundle.

## Note on Automation
The Gumroad v2 API does not currently support creating "bundled" products via API directly (where files from other products are linked). Therefore, this tool generates the exact description and pricing metadata you need to enter manually in the Gumroad Dashboard to ensure consistency with our business plan.

## To generate a ZIP for the bundle:
If you want to provide a single ZIP file instead of individual PDFs:
```bash
zip -r FounderPack.zip "Mistakes.pdf" "Establishing.pdf" "Hiring.pdf"
```
Then upload `FounderPack.zip` as the content for the bundle product.
