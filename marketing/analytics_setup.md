# Analytics & Conversion Tracking Setup

## 1. Tool Recommendation

*   **Google Analytics 4 (GA4):** The best free option. Carrd and Gumroad both support native GA4 integration.
*   **Plausible / Fathom:** Paid alternatives if privacy and simplicity are the top priority.

## 2. UTM Link Tracker (Table)

| Source | Medium | Campaign | Full URL Example |
| :--- | :--- | :--- | :--- |
| **Instagram** | Bio | Profile | `https://mexicolegalguide.carrd.co/?utm_source=instagram&utm_medium=bio&utm_campaign=profile` |
| **Instagram** | DM | Hiring_Guide | `https://mexicolegalguide.gumroad.com/l/orxcm?utm_source=instagram&utm_medium=dm&utm_campaign=hiring_guide` |
| **Carrd** | Landing | Startup_Mistakes | `https://mexicolegalguide.gumroad.com/l/pnfxjgg?utm_source=carrd&utm_medium=landing&utm_campaign=7_mistakes` |
| **Email** | Workflow | Welcome_Nurture | `https://mexicolegalguide.gumroad.com/l/jakfxl?utm_source=email&utm_medium=workflow&utm_campaign=welcome_1` |
| **Fiverr** | Service | Consultation | `https://mexicolegalguide.carrd.co/?utm_source=fiverr&utm_medium=direct&utm_campaign=consultation` |

## 3. Setup Instructions (GA4)

1.  **Create Property:** Go to Google Analytics and create a new GA4 Property named "Mexico Legal Guide."
2.  **Get Measurement ID:** Copy your ID (Format: `G-XXXXXXXXXX`).
3.  **Carrd Integration:**
    *   Open your Carrd site editor.
    *   Go to **Settings** -> **Analytics**.
    *   Paste the GA4 Measurement ID and publish.
4.  **Gumroad Integration:**
    *   Go to your Gumroad Dashboard -> **Settings** -> **Advanced**.
    *   Find the **Google Analytics** section and paste your Measurement ID.
    *   *Note:* Ensure "Cross-domain tracking" is considered if supported by the tool.

## 4. KPI Dashboard Template (Simple)

We recommend tracking these in a simple **Google Sheet** or **Notion Table** at the end of every month:

| KPI | Description | Goal |
| :--- | :--- | :--- |
| **Carrd Views** | Total visitors to the landing page. | > 1,000/mo |
| **Guide Clicks** | Clicks from Carrd to Gumroad. | > 20% CTR |
| **Total Orders** | Number of successful purchases. | > 20/mo |
| **Conversion Rate** | Sales / Carrd Views. | 2% - 5% |
| **Average Order Value**| Total Revenue / Total Orders. | > $35 |
| **Revenue by Source** | Which channel brings the most $$$? | Identify Winner |
