const fs = require('fs');
const path = require('path');

// Load product configuration
const configPath = path.join(__dirname, '../config/products.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const products = config.products;
const bundles = config.bundles;

console.log("====================================================");
console.log("   GUMROAD BUNDLE GENERATOR - MEXICO LEGAL GUIDE    ");
console.log("====================================================");

function generateManualInstructions(bundle) {
    console.log(`\n📦 BUNDLE: ${bundle.name}`);
    console.log(`   Target Price: $${bundle.price} USD`);
    console.log(`   Total Savings for Customer: $${bundle.savings} USD`);
    console.log(`\n   INSTRUCTIONS TO CREATE MANUALLY:`);
    console.log(`   1. Log in to Gumroad and click "New Product".`);
    console.log(`   2. Name: "${bundle.name}"`);
    console.log(`   3. Type: Select "Digital product".`);
    console.log(`   4. Price: Set to $${bundle.price}.`);
    console.log(`   5. Description: Copy and paste the following:`);
    console.log(`      --------------------------------------------------`);
    console.log(`      The complete legal toolkit for your Mexican venture.`);
    console.log(`      Includes our most requested guides:`);
    
    // Logic to list products based on bundle name (simplified for demo)
    if (bundle.name.includes("Founder")) {
        console.log(`      - THE 7 LEGAL MISTAKES THAT DESTROY STARTUPS IN MEXICO`);
        console.log(`      - Guide to Establishing Your Company in Mexico`);
        console.log(`      - HOW TO HIRE CORRECTLY IN MEXICO`);
    } else if (bundle.name.includes("Compliance")) {
        console.log(`      - Basic Compliance for Mexican SMEs`);
        console.log(`      - INTELLECTUAL PROPERTY FOR ENTREPRENEURS IN MEXICO`);
        console.log(`      - CONTRACT GUIDE FOR FREELANCERS & CONSULTANTS IN MEXICO`);
    } else {
        console.log(`      - Full access to our entire legal library.`);
    }
    
    console.log(`      --------------------------------------------------`);
    console.log(`   6. Content: Upload the PDFs for each product listed above.`);
    console.log(`   7. Click "Publish".`);
}

bundles.forEach(bundle => {
    generateManualInstructions(bundle);
});

console.log("\n====================================================");
console.log("   ZIP GENERATION LOGIC (Conceptual)");
console.log("   To generate a ZIP of the bundle PDFs, run:");
console.log("   'zip -r founders_pack.zip file1.pdf file2.pdf ...'");
console.log("====================================================");
