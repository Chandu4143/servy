Absolutely. Since the **Servy app/backend/admin already exist**, this PRD should be specifically for the **marketing website**, not the product itself. I’ll keep it detailed enough that you can paste it directly into Astra/Cursor/Claude Code/etc.

The FSD establishes Servy as a two-sided marketplace for services such as cooking, cleaning, washing and ironing, with separate customer and service-provider experiences. 

# SERVY — Marketing Website PRD

## 1. Project Overview

**Product Name:** Servy

**Project Type:** Premium single-page marketing website

**Purpose:**
Create a modern, premium, conversion-focused landing page for **Servy**, a local home-services marketplace that connects customers with service professionals.

The Servy mobile application already exists. **This website is only a marketing and acquisition website.**

The website should introduce Servy, explain how it works, showcase the available services, highlight the benefits for customers and professionals, showcase the mobile app, and encourage visitors to download/use the app or join as service professionals.

### Important

This is **NOT** the Servy application.

Do NOT build:

* Authentication
* Login/signup
* Database
* User dashboard
* Provider dashboard
* Booking functionality
* Payment functionality
* Chat
* Admin panel
* Backend APIs
* Real-time functionality
* Location functionality

All of those already belong to the existing Servy product.

The website should be a **static marketing experience** with links/buttons that can later be connected to the real app.

---

# 2. Design Goal

Create a website that feels **more polished, modern and premium than a typical startup landing page**.

Use modern consumer marketplace design inspiration rather than making it look like a generic SaaS template.

The visual personality should communicate:

* Trust
* Convenience
* Local service
* Professionalism
* Safety
* Simplicity
* Modern technology
* Human connection

The website should feel appropriate for an Indian consumer marketplace.

### Design keywords

**Premium · Friendly · Modern · Clean · Trustworthy · Human · Local · Spacious · Smooth**

---

# 3. Reference Direction

Use the existing Sceneary website as a **general quality/reference benchmark**, but do NOT copy its design, text, layout, branding or visual assets.

The goal is:

> Build something that feels at least as polished as a high-quality modern startup landing page, while developing an original visual identity for Servy.

The website should not look like a clone.

---

# 4. Technology

Use:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide React
```

Recommended deployment:

```text
Vercel
```

No backend is required.

No database is required.

No authentication is required.

No CMS is required for V1.

---

# 5. Brand Colors

Use the following design system consistently.

### Primary

```text
Deep Indigo
#283593
```

Used for:

* Brand
* Hero background
* Primary buttons
* Important UI elements
* Navigation
* Major visual sections

### Primary Dark

```text
#1D276F
```

Used for:

* Hover states
* Darker gradients
* Contrast sections

### Secondary Green

```text
#4CAF7A
```

Used for:

* Service accents
* Success states
* Availability
* Verified indicators
* Icons
* Small highlights

### Light Green

```text
#E8F5EE
```

Used for:

* Service backgrounds
* Small badges
* Supporting UI

### Main Background

```text
#F8F7F9
```

Warm off-white.

### White

```text
#FFFFFF
```

Used for cards and content surfaces.

### Lavender Accent

```text
#E9E8FF
```

Used sparingly for:

* Secondary backgrounds
* Decorative elements
* Selected states

### Text

```text
#202124
```

Primary text.

```text
#6B6B73
```

Secondary text.

```text
#9A9AA2
```

Muted text.

### Emergency

```text
#E53935
```

Use red only where appropriate for emergency/SOS-related visual references.

---

# 6. Typography

Use a modern geometric sans-serif.

Preferred:

**Inter**

or another similar premium sans-serif.

Typography should have:

* Large bold hero headings
* Short paragraphs
* Strong hierarchy
* Generous line height
* Large section headings

Avoid overly decorative fonts.

---

# 7. Overall Page Structure

The website should be a single-page website.

Navigation anchors:

```text
Home
Services
How It Works
For Professionals
Download
```

Suggested structure:

```text
Navbar
↓
Hero
↓
Trust / Benefits
↓
Services
↓
How It Works
↓
App Showcase
↓
For Professionals
↓
Why Servy
↓
Final CTA
↓
Footer
```

---

# 8. Navbar

Create a clean sticky/floating navbar.

### Desktop

Left:

**Servy logo**

Center/right:

* Services
* How It Works
* For Professionals
* Download

CTA:

**Get Started**

### Behavior

Navbar should:

* Become slightly more opaque while scrolling
* Have subtle backdrop blur
* Maintain excellent readability
* Animate smoothly

### Mobile

Use:

* Servy logo
* Menu button

Open a smooth mobile navigation drawer.

---

# 9. Hero Section

This is the most important section of the entire website.

### Background

Use:

```text
#283593
```

with a subtle indigo gradient.

Do NOT make it excessively dark or visually noisy.

### Main headline

Use:

# **Trusted help, right around the corner.**

Supporting text:

> Book reliable professionals for cleaning, cooking, washing, ironing and everyday services — whenever you need them.

CTA buttons:

**Find a Service →**

**Become a Professional**

### Visual

On the right side, show a large, beautiful representation of the Servy mobile app.

Use a clean smartphone mockup.

Do NOT show:

* Photograph of a physical phone
* Hands holding phone
* Camera glare
* Distorted perspective

The app screenshot should look like a professionally designed product presentation.

Around the phone, add subtle floating UI cards such as:

```text
✓ Booking Confirmed

Saikumar is on the way

12 min away
```

and:

```text
⭐ 4.9

Verified Professional
```

These should animate subtly.

### Hero animation

Use Framer Motion for:

* Phone entrance
* Floating cards
* Small background elements
* Button hover
* Text entrance

Animations should be smooth and premium.

Avoid excessive animation.

---

# 10. Trust Section

Immediately after the hero.

Create a simple horizontal trust strip.

Items:

### ✓ Verified Professionals

Find trusted service providers.

### ₹ Transparent Pricing

Know what you're paying for.

### 📅 Flexible Booking

Choose a time that works for you.

### 🔒 Secure Payments

Safe and convenient payments.

Keep this section minimal.

---

# 11. Services Section

Headline:

# **Whatever you need. We've got someone for it.**

Supporting text:

> From everyday household tasks to essential home services, find the right professional for the job.

Create attractive service cards.

### Services

```text
Cleaning
Cooking
Washing
Ironing
AC Service
Plumbing
Electrical
More
```

Each card should contain:

* Icon/illustration
* Service name
* Short description
* Hover animation

Example:

### Cleaning

> Keep your home fresh, clean and comfortable.

### Cooking

> Find professionals for everyday cooking needs.

### Washing

> Get your laundry handled with ease.

### Ironing

> Fresh, pressed clothes without the hassle.

The exact service list can remain editable because the final production categories may change.

---

# 12. How It Works

Headline:

# **Getting help is simple.**

Subheading:

> Find the right professional, choose your time and let Servy handle the rest.

Show four steps.

### 01 — Find

Tell us what service you need.

### 02 — Choose

Browse professionals, ratings and pricing.

### 03 — Book

Choose your date and preferred time.

### 04 — Relax

Your professional takes care of the rest.

Use a visually interesting horizontal progression on desktop.

On mobile, stack the steps vertically.

Add subtle scroll animations.

---

# 13. App Showcase

This should be one of the largest visual sections.

Headline:

# **Everything you need, right in your pocket.**

Supporting copy:

> Discover professionals, compare options, book services and keep track of your bookings — all from the Servy app.

Show multiple app screens.

Recommended screens:

1. Home
2. Provider listing
3. Provider profile
4. Booking
5. Booking tracking

Create a large central phone mockup with surrounding screens/cards.

### Animation

As the user scrolls:

* Screens can slide/fade into position
* Cards can move slightly
* Phone can have subtle parallax
* UI elements can appear progressively

Do not make the animation excessive.

---

# 14. Provider Section

Servy is a two-sided marketplace, so the website must also appeal to professionals.

The product specification includes a dedicated service-provider experience where professionals can register, manage tasks, pricing, availability and earnings.  

Create a large contrasting section.

Headline:

# **Have a skill? Turn it into income.**

Supporting copy:

> Join Servy and connect with customers looking for reliable professionals like you.

Feature list:

### Set your availability

Choose when you're available for bookings.

### Manage your services

Offer the services you're skilled at.

### Manage your bookings

Keep track of upcoming and completed work.

### Track your earnings

Monitor your income and payouts.

CTA:

**Become a Professional →**

Visual:

Show a provider-oriented mobile app screen or professional person imagery.

---

# 15. Why Servy

Headline:

# **Built around the way you live.**

Create 4–6 benefits.

### Trusted Professionals

Discover professionals with ratings and reviews.

### Flexible Scheduling

Book according to your preferred date and time.

### Transparent Pricing

See pricing before confirming your booking.

### Easy Booking

Find and book services without unnecessary steps.

### Local Service

Discover professionals available around you.

### One Simple App

Everything from discovery to booking in one place.

Do not make this section overly text-heavy.

---

# 16. Booking Experience Visual

Create a visually engaging section showing the journey.

Example:

```text
Search
   ↓
Choose Professional
   ↓
Select Date & Time
   ↓
Confirm
   ↓
Professional Arrives
   ↓
Service Complete
```

Could be represented as a large animated timeline.

Use:

* Indigo
* Green
* White
* Off-white

---

# 17. Final CTA

Large full-width indigo section.

Headline:

# **Your next task shouldn't be a hassle.**

Supporting text:

> Find someone you can trust and get things done with Servy.

Primary button:

**Get Started →**

Secondary:

**Become a Professional**

Add subtle decorative background elements.

---

# 18. Footer

Footer should contain:

### Servy

Short description:

> Making everyday services simpler, more accessible and more convenient.

Links:

```text
Services
How It Works
For Professionals
Download
About
Contact
```

Legal:

```text
Privacy Policy
Terms & Conditions
```

Social links can be placeholders until actual URLs are provided.

Copyright:

```text
© 2026 Servy. All rights reserved.
```

---

# 19. App Download CTA

Include app download buttons where appropriate.

Use placeholders if actual store URLs are not yet available:

```text
Download on the App Store
Get it on Google Play
```

Do not invent actual URLs.

The buttons should be easy to replace later.

---

# 20. Animations

Use **Framer Motion**.

Animation philosophy:

> Subtle, smooth and premium — never distracting.

Implement:

### On page load

* Navbar fade/slide
* Hero text entrance
* Phone mockup entrance
* Floating cards appear

### On scroll

* Section fade-in
* Cards slide upward
* Phone mockups move slightly
* Numbers/steps appear progressively

### Hover

Buttons:

* Slight scale
* Background transition

Cards:

* Slight upward movement
* Subtle shadow increase

Service cards:

* Icon movement
* Slight elevation

### Avoid

* Excessive bouncing
* Constant movement
* Huge parallax effects
* Long loading animations
* Animation that interferes with reading

Respect `prefers-reduced-motion`.

---

# 21. Responsive Design

The website must be excellent at:

```text
1440px+
1280px
1024px
768px
480px
390px
375px
```

### Desktop

Use large visual compositions and generous whitespace.

### Tablet

Reflow sections naturally.

### Mobile

Important:

* Hero becomes vertical
* Phone mockup scales correctly
* Navigation becomes hamburger
* Service cards become 2-column or horizontal scroll
* How-it-works becomes vertical
* App showcase becomes swipeable/stacked
* CTA buttons become full-width where appropriate

The mobile website should feel intentionally designed, **not like a compressed desktop site**.

---

# 22. Image / Asset Requirements

Use high-quality assets.

Do NOT use:

* Blurry images
* Low-resolution screenshots
* Screenshots of physical phones
* Random stock images that don't match the brand
* Overly artificial AI imagery

Prefer:

* Clean app mockups
* Professional Indian service-provider photography
* Subtle abstract gradients
* Minimal illustrations
* High-quality service imagery

If temporary images are necessary, structure the project so they can easily be replaced.

---

# 23. App Screenshot Presentation

The existing Servy app UI should be treated as the source of truth.

Do not redesign the actual application inside the marketing website.

Instead:

* Clean the screenshots
* Put them inside consistent device frames
* Use the same dimensions
* Apply consistent shadows
* Use realistic but subtle perspective
* Keep UI readable

Recommended presentation:

```text
          ┌───────────────┐
          │               │
          │  SERVY APP    │
          │               │
          │               │
          │               │
          └───────────────┘
             shadow
```

Avoid the photographed-phone appearance from the original reference screenshots.

---

# 24. Content Tone

Copy should be:

* Simple
* Friendly
* Confident
* Human
* Short

Avoid corporate jargon such as:

> "Our revolutionary AI-powered ecosystem enables..."

Instead:

> "Find someone you can trust."

Use short sentences.

The brand should feel accessible to ordinary Indian consumers.

---

# 25. Performance

The website should be extremely fast.

Requirements:

* Optimize images
* Use WebP/AVIF where appropriate
* Lazy-load below-the-fold images
* Avoid huge video backgrounds
* Avoid unnecessary JavaScript
* Use Next.js image optimization
* Keep animations performant
* Avoid excessive third-party libraries

Target:

**Excellent Lighthouse performance.**

---

# 26. SEO

Implement basic SEO.

Title:

> **Servy — Trusted Help, Right Around the Corner**

Description:

> Find trusted professionals for cleaning, cooking, washing, ironing and everyday home services with Servy.

Include:

* Proper H1
* Semantic headings
* Meta description
* Open Graph metadata
* Favicon
* Robots metadata
* Sitemap
* Descriptive image alt text

---

# 27. Accessibility

Implement:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible buttons
* Accessible navigation
* Sufficient color contrast
* Alt text
* Reduced-motion support

---

# 28. Code Architecture

Use reusable components.

Suggested structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── AppShowcase.tsx
│   ├── ProviderSection.tsx
│   ├── WhyServy.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
│
├── data/
│   └── services.ts
│
└── public/
    ├── images/
    ├── app-screens/
    └── logo/
```

Keep content separated from components where practical.

---

# 29. Important Product Rules

### Do not build fake functionality

Buttons that don't have real destinations should clearly be placeholders/configurable.

Do not create fake:

* Login systems
* Booking systems
* Payment systems
* API calls
* Maps
* User accounts

### Do not invent claims

Do not write things such as:

> "100,000+ users"

> "10,000 verified professionals"

> "Available in 50 cities"

unless the client provides those numbers.

Similarly, do not invent awards, partnerships, reviews or statistics.

---

# 30. Final Design Goal

The finished website should feel like:

> **A premium Indian consumer marketplace startup that already has a serious mobile product behind it.**

It should NOT feel like:

* A generic template
* An AI-generated landing page
* A basic freelancer website
* A corporate services company
* A copy of Sceneary

The first screen should immediately communicate:

**What is Servy?**

**Why should I care?**

**What can I do with it?**

**Where can I get the app?**

And the entire page should naturally lead toward:

### **Get Started**

or

### **Become a Professional**

---
https://sceneary.in/