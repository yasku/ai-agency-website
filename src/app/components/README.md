# AI Agency Components

This directory contains all shared components for the AI Agency landing page, following Next.js 15 App Router patterns and React 19 best practices.

## Component Architecture

### Design System Compliance
All components follow the established design patterns from README2.md:

- **Colors**: Semantic tokens (`foreground`, `background`, `text-foreground/70`)
- **Buttons**: `rounded-full` with consistent hover states
- **Spacing**: `gap-[32px]`, `gap-[48px]` patterns
- **Borders**: `border-black/[.08] dark:border-white/[.145]`
- **Typography**: Geist Sans hierarchy with responsive scaling
- **Layout**: Mobile-first responsive design with `sm:` breakpoints

### Server vs Client Components

**Server Components (Default):**
- Static content rendering
- Performance optimization
- SEO benefits

**Client Components (`'use client'`):**
- Form handling and validation
- Interactive animations
- Browser API usage
- State management

### TypeScript Integration

All components use strict TypeScript with interfaces defined in `src/lib/types.ts`:

```typescript
import { ServiceCardProps, ContactFormData } from '@/lib/types';
```

## Component Guidelines

### File Naming Convention
- PascalCase for component files: `ServiceCard.tsx`
- kebab-case for utility files: `form-validation.ts`

### Import Organization
```typescript
// External libraries
import { useState, useTransition } from 'react';

// Internal utilities and types
import { ServiceData } from '@/lib/types';

// Component implementation
export default function ServiceCard({ service }: ServiceCardProps) {
  // Implementation
}
```

### Styling Standards
- Use Tailwind CSS 4 utility classes
- Follow established component patterns
- Maintain responsive design
- Support dark mode automatically

### Performance Considerations
- Minimize Client Component usage
- Use React 19 hooks appropriately (`useOptimistic`, `useTransition`)
- Implement proper TypeScript interfaces
- Optimize for bundle size

## Available Components

### Core Components
- `ServiceCard.tsx` - Interactive service showcase cards
- `ContactForm.tsx` - Enhanced contact form with validation
- `ProcessTimeline.tsx` - Step-by-step process visualization
- `SuccessStory.tsx` - Client success story showcase
- `AIChatbot.tsx` - Floating AI assistance chatbot

### Utility Components
- Form validation helpers
- Animation utilities
- Type definitions

## Development Workflow

1. Create component following established patterns
2. Add TypeScript interfaces to `src/lib/types.ts`
3. Test responsive design and dark mode
4. Ensure accessibility compliance
5. Update this README with new components