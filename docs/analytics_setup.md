# Analytics & Conversion Tracking Setup - Mexico Legal Guide

## 1. Tool Recommendation
To keep the stack lightweight yet powerful:
*   **Google Analytics 4 (GA4):**
    *   *Why:* Native integration in both Carrd and Gumroad. Allows for cross-domain tracking to see how a user moves from the landing page to the purchase.
    *   *Setup:* One Measurement ID (G-XXXXXXXX) applied to both Carrd settings and Gumroad settings.
*   **Alternative (Privacy-focused): Plausible Analytics**
    *   *Why:* Much simpler interface, no cookies required. Perfect for a one-person legal business.

## 2. UTM Parameter Strategy
Consistency is key for accurate tracking. All outgoing links from Instagram, Email, or Fiverr must use this structure:

| Parameter | Recommended Values | Example |
| :--- | :--- | :--- |
| **utm_source** | `instagram`, `fiverr`, `newsletter`, `linkedin` | `instagram` |
| **utm_medium** | `bio`, `story`, `dm`, `post_caption` | `dm` |
| **utm_campaign** | `[product_slug]`, `black_friday`, `summer_sale` | `hiring_guide` |
| **utm_content** | `reel_mistakes`, `carousel_checklist` | `reel_3mistakes` |

**Example Link for ManyChat:**
`https://mexicolegalguide.gumroad.com/l/orxcm?utm_source=instagram&utm_medium=dm&utm_campaign=hiring_guide&utm_content=reel_hiring_tips`

## 3. Conversion Funnel KPIs
The dashboard (in GA4 or a simple spreadsheet) should track:
1.  **Top of Funnel:** Instagram Reach & Profile Visits.
2.  **Landing Engagement:** Carrd Page Views.
3.  **Intent:** Clicks from Carrd to Gumroad (Product Views).
4.  **Conversion:** Gumroad Sales (Number of orders).
5.  **Efficiency:** Conversion Rate (Sales / Carrd Views).
6.  **Value:** Average Order Value (AOV).

## 4. Implementation Checklist
*   [ ] Create GA4 Property.
*   [ ] **Carrd:** Paste Tracking ID in "Settings" -> "Analytics".
*   [ ] **Gumroad:** Paste Tracking ID in "Settings" -> "Advanced" -> "Google Analytics".
*   [ ] **Instagram:** Update Bio link with `?utm_source=instagram&utm_medium=bio`.
*   [ ] **ManyChat:** Configure all DM buttons to include full UTM strings.

## 5. Simple KPI Dashboard (Example)
| Month | Carrd Views | Product Clicks | Sales | Revenue | Conversion Rate |
| :--- | :--- | :--- | :--- | :--- | :--- |
| June | 1,200 | 350 | 24 | $880 | 2.0% |
