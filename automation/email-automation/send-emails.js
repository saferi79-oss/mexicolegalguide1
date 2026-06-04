const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const path = require('path');

// Set API Key from environment or argument
const API_KEY = process.argv.find(arg => arg.startsWith('--key='))?.split('=')[1] || process.env.SENDGRID_API_KEY;

if (!API_KEY) {
  console.error('Error: Please provide SendGrid API Key via --key=YOUR_KEY or SENDGRID_API_KEY env var.');
  process.exit(1);
}

sgMail.setApiKey(API_KEY);

function sendAutomatedEmail(to, subject, bodyHtml) {
  const msg = {
    to: to,
    from: 'mexicolegalguide@outlook.com', // Must be verified in SendGrid
    subject: subject,
    html: bodyHtml,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log(`Email sent to ${to}: ${subject}`);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Example usage logic
const workflows = JSON.parse(fs.readFileSync(path.join(__dirname, 'workflows.json'), 'utf8'));
console.log(`Loaded ${workflows.length} workflows.`);

// In a real system, you'd trigger this via a webhook handler
if (process.argv.includes('--test')) {
    console.log('Running test email...');
    sendAutomatedEmail('test@example.com', workflows[0].subject, workflows[0].body_html);
}
