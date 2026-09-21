# Automora AI

> **AI-powered automation solutions for modern businesses.**

Automora AI helps businesses eliminate repetitive work, streamline operations, and connect the tools they already use through intelligent workflow automation.

This repository contains the official website for **Automora AI**, built to present its automation services, solutions, process, use cases, and business information through a modern, responsive interface.

---

## 🌐 Website

**Live Website:** https://automora.ai

**GitHub Repository:** https://github.com/ByteWithHassan/automora-ai

---

## ✨ Features

- Modern, responsive business website
- Professional dark-themed interface
- AI automation service showcase
- Business automation use cases
- Services overview
- Step-by-step automation process
- About Automora section
- Why Automora section
- Work examples and use cases
- Frequently Asked Questions
- Client contact section
- Responsive navigation
- Reusable React components
- Smooth UI animations and transitions
- Mobile-responsive design
- SEO-ready Next.js structure
- Web3Forms contact form integration
- Component-based architecture
- Production-ready Next.js application

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | React framework and application architecture |
| **React** | User interface development |
| **TypeScript** | Type-safe application development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations and transitions |
| **Lucide Icons** | Interface icons |
| **Web3Forms** | Contact form submission |
| **Git** | Version control |
| **GitHub** | Source code repository |
| **Vercel / Netlify** | Deployment |

---

## 📁 Project Structure

```text
automora-ai/
│
├── app/
│   ├── globals.css              # Global styles
│   ├── icon.svg                 # Website favicon
│   ├── layout.tsx               # Root layout and metadata
│   └── page.tsx                 # Main website page
│
├── components/
│   │
│   ├── navigation/
│   │   └── Navbar.tsx           # Main navigation
│   │
│   ├── sections/
│   │   ├── About.tsx             # About section
│   │   ├── Contact.tsx           # Contact section
│   │   ├── FAQ.tsx               # Frequently asked questions
│   │   ├── Footer.tsx            # Website footer
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Process.tsx            # Automation process
│   │   ├── Services.tsx           # Services showcase
│   │   ├── WhatWeDo.tsx           # What Automora does
│   │   ├── WhyAutomora.tsx        # Why choose Automora
│   │   └── WorkExamples.tsx       # Automation examples
│   │
│   └── ui/
│       ├── Button.tsx             # Reusable button
│       ├── Container.tsx          # Layout container
│       ├── FadeIn.tsx             # Animation wrapper
│       ├── HeroVisual.tsx         # Hero visual component
│       └── SkipToContent.tsx      # Accessibility component
│
├── config/
│   └── site.ts                    # Website configuration
│
├── lib/
│   └── utils.ts                   # Shared utility functions
│
├── public/                        # Static assets
│
├── .gitignore                     # Git ignored files
├── next.config.mjs                # Next.js configuration
├── next-env.d.ts                  # Next.js TypeScript definitions
├── package.json                   # Project dependencies and scripts
├── package-lock.json              # Locked dependency versions

🧩 Website Architecture

The website is structured into reusable sections rather than placing the entire interface inside a single page component.

Application Layer

The app/ directory contains the Next.js application entry points, global styling, layout, metadata, and main page.

Component Layer

The components/ directory contains reusable interface components.

Website sections are separated into:

components/sections/

while reusable interface elements are contained in:

components/ui/

This structure makes individual sections easier to maintain and modify without affecting unrelated parts of the website.

Configuration Layer

Website-level configuration is maintained in:

config/site.ts
Utility Layer

Shared helper functions are maintained in:

lib/
🔐 Environment Variables

The website uses environment variables for external service configuration.

The contact form requires the Web3Forms access key:

NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key

Environment files containing credentials are intentionally excluded from version control.

The repository does not include:

.env
.env.local
.env.development
.env.production
.env.test

API keys, credentials, tokens, and other sensitive values should never be committed to the repository.

📜 Available Scripts
Command	Description
npm run dev	Starts the development server
npm run build	Creates the production build
npm run start	Starts the production server
npm run lint	Runs the configured linting process
🚀 Deployment

Automora AI is designed to run on modern Next.js-compatible hosting platforms.

Supported deployment platforms include:

Vercel
Netlify
Other platforms capable of hosting Next.js applications

Production deployments should have all required environment variables configured through the hosting platform's environment settings.

🔒 Repository Security

Private development and configuration files are excluded from the repository, including:

.env*
node_modules/
.next/
CLAUDE.md
AGENTS.md

This keeps environment credentials, local dependencies, generated files, and private AI development instructions outside the public repository.

📱 Responsive Design

The website is designed to work across:

Desktop
Laptop
Tablet
Mobile devices

The interface adapts its layout and navigation according to the available screen size.

🎯 Purpose

Automora AI's website is designed to communicate the value of business automation clearly and provide potential clients with an overview of:

Automation services
Business use cases
Automation workflows
Implementation process
Benefits of automation
Frequently asked questions
Contact options

The website acts as the public-facing foundation for the Automora AI brand.

🔮 Future Development

The website architecture is designed to support future additions such as:

AI-powered website assistant
WhatsApp automation
Lead management automation
CRM integrations
Automated client onboarding
Client dashboards
Additional automation case studies
Interactive automation demonstrations
Additional third-party integrations
👨‍💻 Author

Hassan Khurshid

GitHub: https://github.com/ByteWithHassan

📄 License

Copyright © 2026 Automora AI.

This project and its source code are proprietary to Automora AI. Public visibility of the repository does not grant permission to copy, redistribute, resell, or commercially reuse the source code, design, branding, or other project assets without authorization
├── README.md                      # Project documentation
└── tsconfig.json                  # TypeScript configuration
