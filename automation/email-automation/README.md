# Email Automation System (SendGrid)

This system manages post-purchase and lead nurturing emails.

## Setup

1. Sign up for a free SendGrid account.
2. Verify your sender identity for `mexicolegalguide@outlook.com`.
3. Get your API Key.
4. Install dependencies:
   ```bash
   npm install @sendgrid/mail
   ```

## Usage

### Test the connection
```bash
node send-emails.js --key=SG.your_api_key --test
```

### Configuration
- `workflows.json`: Contains the 4 emails sent after a purchase.
- `nurturing.json`: Contains the 4 emails sent after someone downloads the free checklist.

## Automation Logic
To automate this, you should point a Gumroad Webhook to a server running this script (or a wrapper like the `webhook_handler.py` provided in the root). When a sale occurs, the script calculates the delay and queues the emails.
