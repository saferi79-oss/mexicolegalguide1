# Bundles - Gumroad Product Copy & PowerShell Commands

---

## BUNDLE 1: Founder's Essential Pack

### Gumroad Product Description
**Title:** Founder's Essential Pack

**Price:** $79 (Save $34 — 30% off individual prices)

**Includes:**
- Guide to Establishing Your Company in Mexico ($49)
- The 7 Legal Mistakes That Destroy Startups in Mexico ($27)
- Intellectual Property for Entrepreneurs in Mexico ($37)

**Full Description:**
> 🚀 **Launch your Mexican business the right way.**
>
> Starting a company in Mexico is exciting — but the legal side can be a minefield if you don't know what you're doing. The **Founder's Essential Pack** brings together our three most critical guides for new business owners.
>
> **What you'll learn:**
> - ✅ How to choose the right corporate structure (S.A. de C.V. vs S.A.S.)
> - ✅ The 7 legal mistakes that destroy startups — and how to avoid every single one
> - ✅ How to protect your brand, logo, software, and inventions in Mexico
>
> **Value: $113 — You pay: $79 (Save 30%)**
>
> Instant digital download. PDF format. Read on any device.
>
> *Written by Sabrina Fernandez, Mexican corporate lawyer with 10+ years of experience.*

---

## BUNDLE 2: The Complete Mexico Business Vault

### Gumroad Product Description
**Title:** The Complete Mexico Business Vault

**Price:** $147 (Save $78 — 35% off individual prices)

**Includes ALL 6 guides:**
- Guide to Establishing Your Company in Mexico ($49)
- The 7 Legal Mistakes That Destroy Startups in Mexico ($27)
- Intellectual Property for Entrepreneurs in Mexico ($37)
- Contract Guide for Freelancers & Consultants in Mexico ($35)
- How to Hire Correctly in Mexico ($37)
- Basic Compliance for Mexican SMEs ($40)

**Full Description:**
> 🏆 **The definitive legal library for doing business in Mexico.**
>
> Whether you're launching a startup, scaling an SME, or investing in Mexico, this vault gives you **every legal guide you'll ever need** — at a fraction of the cost of a single lawyer consultation.
>
> **This bundle includes:**
>
> 📋 **Company Formation** — Step-by-step incorporation guide
> ⚠️ **Startup Mistakes** — Avoid the 7 most expensive legal errors
> 🛡️ **Intellectual Property** — Protect your brand and creations
> 📄 **Freelancer Contracts** — Bulletproof your client agreements
> 👥 **Hiring Guide** — Master Mexican labor law
> ✅ **SME Compliance** — Stay on the right side of the law
>
> **Individual total: $225 — Bundle price: $147 (Save 35%)**
>
> Instant digital download. All 6 guides in PDF format.
>
> *Written by Sabrina Fernandez, Mexican corporate lawyer with 10+ years of experience.*

---

## PowerShell Commands

### 1. Create Founder's Essential Pack
```powershell
Invoke-RestMethod -Uri "https://api.gumroad.com/v2/products" -Method Post -Body @{
    access_token="tVu-pagMZH007tVx1dOyJQThdx9LrDQyb5Ztx2i-MGg"
    name="Founder's Essential Pack"
    description="Launch your Mexican business the right way. Includes: Company Formation Guide, Startup Mistakes Guide, and Intellectual Property Guide. Save 30%."
    price="7900"
    native_type="bundle"
} | ConvertTo-Json
```

### 2. Create The Complete Mexico Business Vault
```powershell
Invoke-RestMethod -Uri "https://api.gumroad.com/v2/products" -Method Post -Body @{
    access_token="tVu-pagMZH007tVx1dOyJQThdx9LrDQyb5Ztx2i-MGg"
    name="The Complete Mexico Business Vault"
    description="All 6 legal guides for doing business in Mexico. Company Formation, Startup Mistakes, IP, Freelancer Contracts, Hiring Guide, and SME Compliance. Save 35%."
    price="14700"
    native_type="bundle"
} | ConvertTo-Json
```

## Welcome Messages (Post-Purchase)

### After buying Founder's Pack
**Subject:** 🚀 Your Founder's Essential Pack is ready!

**Body:**
> Thanks for grabbing the Founder's Pack!
>
> You now have access to:
> 1. 📋 Company Formation Guide
> 2. ⚠️ Startup Mistakes Guide
> 3. 🛡️ IP Guide
>
> Not sure where to start? Begin with the Company Formation Guide if you're incorporating now, or the Startup Mistakes Guide if you're still planning.
>
> Follow @mexicolegalguide for daily legal tips.
>
> — Sabrina

### After buying Business Vault
**Subject:** 🏆 Welcome to the Mexico Business Vault!

**Body:**
> You now own the complete Mexico Business Vault — all 6 guides.
>
> 📚 Start with whatever stage you're at:
> - Planning → Startup Mistakes Guide
> - Incorporating → Company Formation Guide
> - Hiring → Hiring Guide
> - Protecting → IP Guide
> - Contracting → Freelancer Guide
> - Growing → Compliance Guide
>
> This vault covers EVERYTHING. If you have questions, reach out.
>
> — Sabrina