const https = require('https');

const TOKEN = 'tVu-pagMZH007tVx1dOyJQThdx9LrDQyb5Ztx2i-MGg';

function api(method, path, data) {
  return new Promise((resolve, reject) => {
    const body = data ? new URLSearchParams(data).toString() : '';
    const opts = {
      hostname: 'api.gumroad.com',
      path: '/v2' + path,
      method,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      timeout: 15000
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); }
        catch(e) { reject(new Error(d.substring(0,200))); }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function main() {
  // 1. List existing products
  console.log('=== LISTING PRODUCTS ===');
  const list = await api('GET', '/products', { access_token: TOKEN });
  console.log('Success:', list.success);
  if (list.products) {
    console.log('Existing products:', list.products.length);
    list.products.forEach(p => {
      console.log(`  [${p.id}] ${p.name} - $${p.price/100} (${p.published ? 'published' : 'draft'})`);
    });
  }

  // 2. Get product IDs for bundles (find by name)
  const products = list.products || [];
  
  // 3. Create the lead magnet (free checklist)
  console.log('\n=== CREATING LEAD MAGNET ===');
  const magnet = await api('POST', '/products', {
    access_token: TOKEN,
    name: 'Mexico Residency & Visa Checklist (2024)',
    description: 'Are you planning to move to Mexico? Don\'t let paperwork stop your dream.\n\nThis free 10-point checklist covers the critical steps to get your Temporary or Permanent Residency — from the Consulate application to the "Canje" process at INM.\n\nPerfect for remote workers, retirees, and digital nomads.',
    price: 0,
    customizable_price: true,
    suggested_price_cents: 0,
    native_type: 'ebook'
  });
  console.log('Lead magnet created:', magnet.success);
  if (magnet.product) console.log('  URL:', 'https://mexicolegalguide.gumroad.com/l/' + magnet.product.permalink);

  // 4. Create Bundle 1: Founder's Essential Pack
  console.log('\n=== CREATING BUNDLE 1: Founder\'s Essential Pack ===');
  const bundle1 = await api('POST', '/products', {
    access_token: TOKEN,
    name: 'Founder\'s Essential Pack',
    description: 'The fundamental legal toolkit for launching your business and hiring your first team members in Mexico without the legal headaches.\n\nIncludes:\n• Guide to Establishing Your Company in Mexico ($49)\n• The 7 Legal Mistakes That Destroy Startups in Mexico ($27)\n• How to Hire Correctly in Mexico ($37)\n\nSave 30% vs buying individually!',
    price: 7900,
    native_type: 'bundle'
  });
  console.log('Bundle 1 created:', bundle1.success);
  if (bundle1.product) console.log('  URL:', 'https://mexicolegalguide.gumroad.com/l/' + bundle1.product.permalink);

  // 5. Create Bundle 2: Operational Compliance Pack
  console.log('\n=== CREATING BUNDLE 2: Operational Compliance Pack ===');
  const bundle2 = await api('POST', '/products', {
    access_token: TOKEN,
    name: 'Operational Compliance & Protection Pack',
    description: 'Protect your brand, your contracts, and stay compliant with Mexican authorities.\n\nIncludes:\n• Contract Guide for Freelancers & Consultants ($35)\n• Intellectual Property for Entrepreneurs ($37)\n• Basic Compliance for Mexican SMEs ($40)\n\nSave 25% vs buying individually!',
    price: 8400,
    native_type: 'bundle'
  });
  console.log('Bundle 2 created:', bundle2.success);
  if (bundle2.product) console.log('  URL:', 'https://mexicolegalguide.gumroad.com/l/' + bundle2.product.permalink);

  // 6. Create Bundle 3: Full Library
  console.log('\n=== CREATING BUNDLE 3: Full Library Bundle ===');
  const bundle3 = await api('POST', '/products', {
    access_token: TOKEN,
    name: 'The Complete Mexico Business Vault',
    description: 'The definitive collection of legal guides for Mexico. Everything you need to know about corporate law, hiring, IP, and compliance in one place.\n\nIncludes ALL 6 guides.\n\nSave 35% vs buying individually!',
    price: 14700,
    native_type: 'bundle'
  });
  console.log('Bundle 3 created:', bundle3.success);
  if (bundle3.product) console.log('  URL:', 'https://mexicolegalguide.gumroad.com/l/' + bundle3.product.permalink);
}

main().catch(e => console.log('ERROR:', e.message));
