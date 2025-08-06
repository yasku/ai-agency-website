# AI Agency - Intelligent Solutions for Your Business

<div align="center">
  <h3>Transform your business with cutting-edge AI solutions</h3>
  <p>Built with Next.js 15, React 19, and Tailwind CSS 4</p>
</div>

## 🚀 Project Overview

**AI Agency** is a modern, high-performance landing page showcasing intelligent AI solutions for businesses. Built with the latest web technologies and following cutting-edge design patterns, this project demonstrates expertise in custom AI development, process automation, and data intelligence.

### 🎯 Live Features
- **Hero Section**: Compelling branding with gradient text effects and clear value proposition
- **Services Showcase**: Three core AI services with interactive hover effects
- **Feature Highlights**: Key differentiators and competitive advantages
- **Contact Integration**: Direct engagement with professional call-to-actions

## 📋 Tech Stack

- **Framework**: [Next.js 15.4.5](https://nextjs.org) with App Router
- **React**: [19.1.0](https://react.dev) with latest hooks and features
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) with CSS-first configuration
- **TypeScript**: [^5](https://www.typescriptlang.org) with strict mode
- **Linting**: [ESLint ^9](https://eslint.org) with Next.js rules
- **Build Tool**: [Turbopack](https://turbo.build/pack) for fast development builds

## 🎨 Design System & UI/UX Patterns

### Color Palette
```css
/* Light Mode */
--background: #ffffff
--foreground: #171717

/* Dark Mode */
--background: #0a0a0a  
--foreground: #ededed
```

### Typography Hierarchy
- **Primary Font**: Geist Sans (`var(--font-geist-sans)`)
- **Monospace Font**: Geist Mono (`var(--font-geist-mono)`)
- **Font Optimization**: Next.js font loading with variable fonts

### Layout Patterns
- **Grid System**: `grid-rows-[auto_1fr_auto]` for structured layouts
- **Responsive Design**: Mobile-first with `sm:` breakpoints
- **Content Centering**: `items-center justify-items-center`
- **Semantic Spacing**: Consistent `gap-[32px]` and `gap-[48px]` patterns

### Component Design Patterns

#### Buttons
```tsx
// Primary CTA Button
className="rounded-full border border-solid border-transparent transition-colors 
          flex items-center justify-center bg-foreground text-background gap-2 
          hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base 
          h-10 sm:h-12 px-4 sm:px-5"

// Secondary Button
className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
          transition-colors flex items-center justify-center hover:bg-[#f2f2f2] 
          dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base 
          h-10 sm:h-12 px-4 sm:px-5"
```

#### Cards & Containers
```tsx
// Service Cards
className="flex flex-col items-center p-6 rounded-lg border border-black/[.08] 
          dark:border-white/[.145] hover:bg-[#f9f9f9] dark:hover:bg-[#111] transition-colors"

// Feature List Items
className="flex items-start gap-3"
className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" // Bullet points
```

#### Typography Styles
```tsx
// Main Heading
className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground 
          to-foreground/70 bg-clip-text text-transparent"

// Section Headings
className="text-2xl sm:text-3xl font-semibold mb-4"

// Body Text
className="text-foreground/70 max-w-3xl text-base sm:text-lg leading-relaxed"
```

### Color Usage Guidelines
- **Primary Actions**: `bg-foreground text-background`
- **Borders**: `border-black/[.08] dark:border-white/[.145]`
- **Hover States**: `hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]`
- **Text Hierarchy**: `text-foreground`, `text-foreground/80`, `text-foreground/70`

### Responsive Design Strategy
- **Mobile-First**: Base styles for mobile devices
- **Breakpoint**: `sm:` for screens ≥640px
- **Layout Adaptation**: `flex-col sm:flex-row` patterns
- **Text Scaling**: `text-lg sm:text-xl` responsive typography

## 📁 Project Structure

```
ai-agency/
├── src/
│   └── app/                 # App Router structure
│       ├── layout.tsx       # Root layout with font optimization
│       ├── page.tsx         # Main landing page
│       └── globals.css      # Tailwind + theme configuration
├── public/                  # Static assets (logos, icons)
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Development Commands

### Core Development
```bash
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Start production server
```

### Quality Assurance
```bash
npm run lint        # Run ESLint code quality checks
```

## 🏗️ Architecture Decisions

### Server Components (Default)
- **Main page**: Server Component for optimal performance
- **Static content**: Hero, services, features rendered server-side
- **SEO optimized**: Better search engine indexing

### Styling Approach
- **Tailwind CSS 4**: CSS-first configuration with `@theme inline`
- **CSS Variables**: Consistent theming with custom properties
- **Dark Mode**: Automatic via `prefers-color-scheme: dark`
- **No Config File**: Leveraging Tailwind CSS 4's dynamic utilities

### Performance Optimizations
- **Font Loading**: Next.js optimized font loading with Geist
- **Minimal Client Bundle**: Server Components reduce JavaScript payload
- **Turbopack**: Fast development builds with Hot Module Replacement

## 🎯 Current Implementation Status

### ✅ Completed Features
- [x] Professional hero section with AI Agency branding
- [x] Services showcase (Custom AI Development, Process Automation, Data Intelligence)
- [x] Feature highlights section with key benefits
- [x] Contact section with direct engagement
- [x] Responsive design across all screen sizes
- [x] Dark mode support with smooth transitions
- [x] SEO-optimized metadata and structure
- [x] ESLint compliance and code quality

### 🚧 Architecture Foundation
- [x] Next.js 15 App Router setup
- [x] React 19 with latest features ready
- [x] Tailwind CSS 4 configuration
- [x] TypeScript strict mode
- [x] Design system documentation

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📝 Development Guidelines

### Component Creation
- Default to **Server Components** for static content
- Use **Client Components** (`'use client'`) only for interactivity
- Follow established design patterns from the design system
- Maintain consistent spacing and typography hierarchy

### Styling Standards
- Use semantic color tokens (`foreground`, `background`)
- Follow responsive patterns with `sm:` breakpoints
- Implement hover states for interactive elements
- Maintain accessibility with proper contrast ratios

### Code Quality
- Run `npm run lint` before commits
- Follow TypeScript strict mode guidelines
- Use meaningful component and variable names
- Document complex logic and architectural decisions

## 📄 License

This project is proprietary software for AI Agency. All rights reserved.

---

<div align="center">
  <p><strong>AI Agency</strong> - Transforming businesses through intelligent automation and custom AI solutions.</p>
  <p>Built with ❤️ using modern web technologies</p>
</div>