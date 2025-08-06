# GEMINI.md

This file provides guidance to Gemini CLI when working with Claude Code in this repository.

## Main Task
**Help** Claude Code with his request.
- If he asks you a question, answer it.
- If he asks you to review code, provide feedback.
- If he asks you for your opinion, analyze the request based on the @README.md file with the project overview and architecture details, also from the @README2.md file and if reviewing the code or files related

## Project Overview

This is a Next.js 15.4.5 project using React 19.1.0, TypeScript 5, and Tailwind CSS 4. It follows the modern App Router architecture and represents a cutting-edge implementation of these technologies with their latest features.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack (fast refresh enabled)
- `npm run build` - Build production bundle
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint code quality checks

### Testing & Quality Assurance
- No test framework is currently configured
- ESLint configured with Next.js rules for code quality enforcement

## Architecture & Key Technologies

### Technology Stack
- **Next.js 15.4.5** with App Router (not Pages Router)
- **React 19.1.0** with latest hooks (useOptimistic, use API, useTransition)
- **Tailwind CSS 4** with CSS-first configuration approach
- **TypeScript 5** with strict mode and Next.js integration
- **Turbopack** for fast development builds

### Project Structure Philosophy
```
src/app/              # App Router structure (file-based routing)
├── layout.tsx        # Root layout with font optimization
├── page.tsx          # Home page component
└── globals.css       # Tailwind imports + theme configuration
```

### Critical Architectural Patterns

#### Tailwind CSS 4 Configuration Method
- Uses modern `@import "tailwindcss"` instead of traditional @tailwind directives
- CSS-first configuration via `@theme inline` directive in globals.css
- No separate tailwind.config.js file needed for basic setup
- PostCSS configured with only `@tailwindcss/postcss` plugin
- Automatic dark mode via `prefers-color-scheme: dark`

#### Font Management System
- Next.js font optimization with Geist and Geist Mono fonts
- Font variables configured in layout.tsx: `--font-geist-sans`, `--font-geist-mono`
- CSS variables referenced in globals.css theme configuration
- Fonts applied via className variables in root layout

#### Server vs Client Component Strategy
- **Server Components (default)**: Use for data fetching, static content, SEO
- **Client Components ('use client')**: Use for interactivity, state, browser APIs
- Strategic component boundaries to minimize client bundle size
- Pass minimal data from Server to Client components

#### TypeScript Configuration
- Path mapping configured for `@/*` imports pointing to `./src/*`
- Strict mode enabled with incremental compilation
- Next.js plugin integrated for optimal TypeScript experience
- Uses latest React 19 type definitions

## React 19 & Tailwind CSS 4 Integration Patterns

### React 19 Features to Leverage
- `useOptimistic` for optimistic UI updates
- `use` API for conditional context consumption
- `useTransition` for better UX during async operations
- Enhanced `useReducer` type inference
- Actions and form handling improvements

### Tailwind CSS 4 Modern Patterns
- Dynamic utilities without explicit configuration (e.g., `grid-cols-15`)
- CSS-first theming with `@theme` directive
- Modern CSS features integration (cascade layers, color-mix)
- Container queries with `@container` variants
- Starting state animations with `starting` variant

## Development Guidelines

### Component Architecture
- Default to Server Components unless interactivity is needed
- Use Client Components sparingly and strategically
- Implement proper data flow from Server to Client components
- Leverage App Router's layout nesting for shared UI

### Styling Approach
- Utility-first methodology with Tailwind CSS 4
- CSS custom properties for dynamic theming
- Component-specific styles using `@utility` directive when needed
- Responsive design using Tailwind's responsive utilities and container queries

### Data Fetching Patterns
- Server Components for direct data fetching with async/await
- Use `fetch` with appropriate caching strategies
- Parallel data fetching with `Promise.all`
- Dynamic route parameters via `params` prop (now a Promise in Next.js 15+)

### Performance Considerations
- Turbopack enabled for fast development builds
- Server Component prioritization for reduced client bundle
- Strategic Client Component boundaries
- Font optimization with Next.js font loading
- Tailwind CSS 4's improved performance characteristics

## Important Configuration Details

### PostCSS Setup
- Minimal configuration with only `@tailwindcss/postcss`
- No autoprefixer or postcss-import needed (built into Tailwind CSS 4)

### TypeScript Paths
- Note: There's a space in the path mapping `" @/*"` which should be `"@/*"`
- This may need correction for proper import resolution

### Theme Configuration
- Dark mode handled via CSS media queries, not JavaScript
- Custom properties defined in globals.css for background/foreground colors
- Font variables integrated into Tailwind theme configuration