# Mexico Legal Guide - Automation System

This directory contains the complete automation infrastructure for the business.

## Structure

- **/config**: Contains `products.json` with all product metadata and permalinks.
- **/gumroad-bundler**: Node.js script to generate bundle creation instructions and links.
- **/email-automation**: SendGrid-based system for post-purchase and lead nurturing emails.
- **/instagram-scheduler**: Content calendar and post templates for Metricool and ManyChat.

## Quick Start (When API Keys are available)

### 1. Install Dependencies
```bash
npm install @sendgrid/mail
```

### 2. Run Gumroad Helper
```bash
node gumroad-bundler/create-bundles.js
```

### 3. Test Email System
```bash
node email-automation/send-emails.js --key=YOUR_SENDGRID_KEY --test
```

## Maintenance
Update `/config/products.json` whenever a new guide is published or prices change. The rest of the system will automatically adapt.
