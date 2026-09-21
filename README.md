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
├── README.md                      # Project documentation
└── tsconfig.json                  # TypeScript configuration
