# Automora AI — Official Website

> **AI-powered automation solutions for modern businesses.**  
> Automora AI helps businesses eliminate repetitive work, streamline operations, and connect the tools they already use through intelligent workflow automation.

This repository contains the official production codebase for the Automora AI website, built to showcase its automation services, solutions, workflows, business use cases, and company details through a modern, responsive interface.

🌐 **Live Website:** [automora.ai](https://automora.ai)  
📁 **GitHub Repository:** [github.com/ByteWithHassan/automora-ai](https://github.com/ByteWithHassan/automora-ai)

---

## 🎯 Purpose

Automora AI's website is designed to communicate the value of business automation clearly and provide potential clients with a comprehensive overview of:

* Automation services and solutions
* Real-world business use cases
* Streamlined automation workflows
* Step-by-step implementation process
* Core benefits of business automation
* Frequently asked questions (FAQ)
* Direct client contact and lead options

The website acts as the public-facing foundation for the Automora AI brand.

---

## ✨ Features

* **Modern, Responsive Design:** Adapts smoothly across Desktop, Laptop, Tablet, and Mobile devices.
* **Professional Dark Theme:** Sleek, high-contrast aesthetic crafted for modern tech and automation agencies.
* **Service & Use Case Showcase:** Clear sections highlighting AI automation capabilities and practical business workflows.
* **Step-by-Step Process:** Interactive roadmap demonstrating how client onboarding and automation builds occur.
* **Interactive UI Elements:** Reusable React components built with smooth UI animations and transitions powered by Framer Motion.
* **SEO-Ready Architecture:** Structured using Next.js App Router for optimal loading speeds and search indexing.
* **Web3Forms Contact Integration:** Functional contact form for direct inquiry submissions without needing a dedicated backend server.
* **Accessibility Focused:** Semantic HTML setup with skip-to-content navigation.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js** | React framework and application architecture |
| **React** | User interface development |
| **TypeScript** | Type-safe application development |
| **Tailwind CSS** | Utility-first styling engine |
| **Framer Motion** | UI animations and transition effects |
| **Lucide Icons** | Interface icons |
| **Web3Forms** | Contact form submission handling |
| **Git** | Version control system |
| **GitHub** | Source code hosting and collaboration |
| **Vercel / Netlify** | Production hosting and edge deployment |

---

## 📁 Project Structure

```text
automora-ai/
│
├── app/                        # Next.js App Router entry points
│   ├── globals.css             # Global styles and Tailwind directives
│   ├── icon.svg                # Website favicon
│   ├── layout.tsx              # Root layout and metadata configuration
│   └── page.tsx                # Main website page
│
├── components/                 # Reusable interface components
│   ├── navigation/
│   │   └── Navbar.tsx          # Main header navigation
│   │
│   ├── sections/               # Page section layouts
│   │   ├── About.tsx           # About section
│   │   ├── Contact.tsx         # Client contact section
│   │   ├── FAQ.tsx             # Frequently asked questions
│   │   ├── Footer.tsx          # Website footer
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Process.tsx         # Step-by-step automation process
│   │   ├── Services.tsx        # Automation services showcase
│   │   ├── WhatWeDo.tsx        # Overview of Automora capabilities
│   │   ├── WhyAutomora.tsx     # Value proposition section
│   │   └── WorkExamples.tsx    # Automation examples and use cases
│   │
│   └── ui/                     # Atomic UI primitives
│       ├── Button.tsx          # Reusable button component
│       ├── Container.tsx       # Content layout container
│       ├── FadeIn.tsx          # Animation motion wrapper
│       ├── HeroVisual.tsx      # Hero visual presentation graphic
│       └── SkipToContent.tsx   # Accessibility component
│
├── config/
│   └── site.ts                 # Website navigation & site-wide configuration
│
├── lib/
│   └── utils.ts                # Shared helper and utility functions
│
├── public/                     # Static assets (images, vectors, media)
│
├── .gitignore                  # Files and folders excluded from Git
├── next.config.mjs             # Next.js configuration settings
├── next-env.d.ts               # Next.js TypeScript declarations
├── package.json                # Project dependencies and script aliases
├── package-lock.json           # Locked dependency tree
├── README.md                   # Project documentation
└── tsconfig.json               # TypeScript compiler rules
