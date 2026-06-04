# Mexico Legal Guide - Professional Landing Page

This is a high-conversion, professional landing page designed to replace the current Carrd site. It is built with high-performance static HTML/CSS/JS and is ready for deployment on platforms like Vercel, Netlify, or GitHub Pages.

## Features
- **Design:** Legal-professional aesthetic using brand colors (#1a2332 and #c9a84c).
- **Responsiveness:** Mobile-first, fully responsive design using Tailwind CSS.
- **Conversion Optimization:** Direct "Buy Now" links to specific Gumroad product pages.
- **Lead Capture:** Integrated email signup form for the "Mexico Residency Checklist" (Lead Magnet).
- **Bundles:** Dedicated section for high-value strategic packages.
- **Analytics:** Ready-to-use Google Analytics 4 (GA4) event tracking.
- **Tech Stack:** 
    - HTML5
    - Tailwind CSS (via CDN)
    - Alpine.js (for simple interactivity)
    - Pure JavaScript

## File Structure
- `index.html`: Main entry point and page structure.
- `assets/css/styles.css`: Custom brand styles and animations.
- `assets/js/script.js`: Interactive logic, UTM preservation, and tracking.

## Deployment Instructions

### Option 1: Vercel (Recommended)
1. Initialize a Git repository in this folder.
2. Push to GitHub/GitLab/Bitbucket.
3. Import the project in Vercel.
4. Vercel will automatically detect the static site and deploy it.

### Option 2: Netlify
1. Drag and drop this folder onto the Netlify "Drop" area.
2. OR connect via Git similarly to Vercel.

### Option 3: Manual Hosting
Upload all files (including the `assets` folder) to your web server's public directory (e.g., `public_html`).

## Configuration
- **Analytics:** Search for `G-XXXXXXXXXX` in `index.html` and replace it with your actual Google Analytics Measurement ID.
- **Email Form:** The form in `script.js` currently simulates a submission. To connect to a real service (like Mailchimp, ConvertKit, or a custom backend), update the fetch call in the "EMAIL CAPTURE FORM" section.
- **Bundle Links:** Update the `href="#"` attributes in the "Strategic Business Bundles" section once the Gumroad bundle URLs are generated.

---
Built by **Team Mexico Legal Guide**
