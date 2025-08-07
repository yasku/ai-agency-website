# AI Agency - Intelligent Solutions for Your Business

<div align="center">
  <h3>Transform your business with cutting-edge AI solutions</h3>
  <p>Built with Next.js 15, React 19, and Tailwind CSS 4</p>
</div>

## 🚀 Project Overview

**AI Agency** is a modern, high-performance landing page showcasing intelligent AI solutions for businesses. Built with the latest web technologies and following cutting-edge design patterns, this project demonstrates expertise in custom AI development, process automation, and data intelligence.

### 🎯 Key Features & Functionality
- **Hero Section**: Compelling branding with gradient text effects and clear value proposition.
- **Services Showcase (Home Page)**: Three core AI services with interactive hover effects and expandable details using React 19's `useOptimistic` and `useTransition` hooks.
- **Comprehensive Services Page (`/services`)**: A dedicated page showcasing a detailed portfolio of AI services, including:
  - **ServiceHero Component**: Professional hero section with gradient text.
  - **ServiceGrid Component**: Responsive grid layout for detailed service cards.
  - **DetailedServiceCard Component**: Advanced interactive cards with 3D tilt hover effects, service-specific gradient glows, expandable content (case studies, pricing, technologies), and professional loading states.
  - **ProcessOverview Component**: Visualizes our 6-step AI implementation methodology.
- **Feature Highlights**: Key differentiators and competitive advantages.
- **Contact Integration**: Direct engagement with a comprehensive contact form featuring client-side validation, loading states, and smooth submission UX using React 19's `useTransition`.
- **Navigation Bar**: Sticky navigation with responsive design, mobile menu, active link highlighting, scroll-based backdrop effects, and smooth scrolling to sections.
- **Accessibility**: Enhanced keyboard navigation, focus management, and screen reader support with proper ARIA attributes.
- **Performance Optimizations**: Strategic use of Server and Client Components, Next.js font optimization, and Turbopack for fast builds.
- **Responsive Design**: Mobile-first approach with `sm:` breakpoints ensuring optimal viewing across all devices.
- **Dark Mode**: Automatic theme switching based on user preference.
- **SEO Optimized**: Proper metadata and semantic HTML structure.

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
src/
├── app/
│   ├── layout.tsx                  # Root layout component, sets up fonts and global styles.
│   ├── page.tsx                    # Home page, integrates ServicesSection and ContactForm.
│   ├── globals.css                 # Global CSS styles, Tailwind CSS imports, theme variables, and custom animations.
│   ├── components/                 # Shared UI components used across the application.
│   │   ├── ContactForm.tsx         # Client Component: Handles contact form logic, state, and validation.
│   │   ├── Logo.tsx                # Component: Displays the "AI Agency" logo with size variations.
│   │   ├── NavigationBar.tsx       # Client Component: Main navigation bar, includes Logo and NavigationMenu.
│   │   ├── NavigationMenu.tsx      # Component: Renders navigation links.
│   │   ├── NavigationMenuItem.tsx  # Component: Renders individual desktop navigation links.
│   │   ├── HamburgerIcon.tsx       # Client Component: Animated hamburger icon for mobile menu.
│   │   ├── MobileMenu.tsx          # Client Component: Full-screen overlay for mobile navigation.
│   │   ├── MobileMenuItem.tsx      # Client Component: Individual navigation link within the mobile menu.
│   │   ├── README.md               # Documentation for components within this directory.
│   │   ├── ServiceCard.tsx         # Client Component: Displays individual service details with expand/collapse functionality.
│   │   ├── ServicesSection.tsx     # Client Component: Renders a grid of ServiceCard components.
│   │   └── hooks/                  # Custom React Hooks for shared logic.
│   │       ├── useActiveRoute.tsx  # Custom hook: Determines if a navigation link is active.
│   │       ├── useScrollEffect.tsx # Custom hook: Tracks scroll position and direction.
│   │       └── useSmoothScroll.tsx # Custom hook: Provides smooth scrolling functionality.
│   └── services/                   # Components and pages specific to the services section.
│       ├── page.tsx                # Services page, integrates ServiceHero, ServiceGrid, ProcessOverview, and ContactForm.
│       └── components/             # Components specific to the services page.
│           ├── DetailedServiceCard.tsx # Client Component: Displays detailed service information with advanced styling and animations.
│           ├── ProcessOverview.tsx # Component: Visualizes the 6-step development process.
│           ├── ServiceGrid.tsx     # Client Component: Renders a grid of DetailedServiceCard components.
│           └── ServiceHero.tsx     # Component: Hero section for the services page.
└── lib/                            # Utility files, constants, and TypeScript type definitions.
    ├── constants.ts                # Defines various application-wide constants (e.g., AI_SERVICES, VALIDATION_RULES).
    ├── services-data.ts            # Defines detailed service data and the DetailedServiceData interface.
    └── types.ts                    # Contains all TypeScript interfaces for data structures and component props.
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