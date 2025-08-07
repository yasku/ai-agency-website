# Codebase Review Plan

## Project Overview
This plan outlines a systematic review of all files within the `src/` directory to ensure adherence to Next.js 15 App Router standards, React 19 best practices, and Tailwind CSS 4 guidelines, as defined in `README.md` and `README2.md`. The review will focus on imports, variable/function naming, `useRef` usage, component props/state, Tailwind CSS classes, and Server/Client component directives.

## Golden Rule
Each task must be completed, reviewed, and marked as done before proceeding to the next. If issues are encountered, new tasks will be added to this `TODO.md` file, but no modifications will be made without explicit confirmation.

## Files to Analyze

*   `/home/yasku/proyectos/nextjs-project/src/app/components/ContactForm.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/HamburgerIcon.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/Logo.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/MobileMenu.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/MobileMenuItem.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/NavigationBar.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/NavigationMenu.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/NavigationMenuItem.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/ServiceCard.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/ServicesSection.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/hooks/useActiveRoute.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/hooks/useScrollEffect.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/components/hooks/useSmoothScroll.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/globals.css`
*   `/home/yasku/proyectos/nextjs-project/src/app/layout.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/page.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/services/components/DetailedServiceCard.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/services/components/ProcessOverview.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/services/components/ServiceGrid.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/services/components/ServiceHero.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/app/services/page.tsx`
*   `/home/yasku/proyectos/nextjs-project/src/lib/constants.ts`
*   `/home/yasku/proyectos/nextjs-project/src/lib/services-data.ts`
*   `/home/yasku/proyectos/nextjs-project/src/lib/types.ts`

## Review Tasks (Per File)

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/ContactForm.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports and paths (`@/lib/types`, `@/lib/constants`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions, PascalCase for components/types. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `ContactFormProps`, `ContactFormData`, `FormValidation`, `LoadingState`. State management with `useState` and `useTransition` is appropriate.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for buttons, input fields, and error messages.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used for interactivity.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with React 19 hooks and general component guidelines.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/HamburgerIcon.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`React`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `HamburgerIconProps`.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for animation and styling.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with React 19 and general component guidelines.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/Logo.tsx`
- [x] Read file content.
- [x] Check Imports: No imports needed. Correct.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `LogoProps`.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for gradient text effect and size classes.
- [x] Check Server/Client Component Directives: Verified absence of `'use client'` for Server Component. Correct.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with design system for typography and sizing.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/MobileMenu.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`React`, `useEffect`, `useRef`, `@/lib/types`, `HamburgerIcon`, `MobileMenuItem`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: Verified correct import and usage of `menuRef` for DOM interaction.
- [x] Check Component Props and State: Verified correct typing and usage of `MobileMenuProps`. State management with `useEffect` and `useRef` for event listeners is appropriate.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for slide-in panel, backdrop, and spacing.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with React 19 and mobile UX patterns.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/MobileMenuItem.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`next/link`, `@/lib/types`, `useActiveRoute`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `MobileMenuItemProps`.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for active state styling, hover effects, and gradient underline.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with Next.js Link and active state patterns.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/NavigationBar.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (local components, `@/lib/types`, `useScrollEffect`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage. State management with `useState` and `useScrollEffect` is appropriate.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for sticky positioning, backdrop blur, shadow, and responsive classes.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with React 19 patterns and accessibility.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/NavigationMenu.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`@/lib/types`, `NavigationMenuItem`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `NavigationMenuProps`.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for layout and spacing.
- [x] Check Server/Client Component Directives: Verified absence of `'use client'` for Server Component. Correct.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with semantic nav structure.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/NavigationMenuItem.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`next/link`, `@/lib/types`, `useActiveRoute`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `NavigationMenuItemProps`.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for active state styling, hover effects, and gradient underline.
- [x] Check Server/Client Component Directives: Verified absence of `'use client'` for Server Component. Correct.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with Next.js Link and active state patterns.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/ServiceCard.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`useOptimistic`, `useTransition`, `@/lib/types`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `ServiceCardProps`. State management with `useOptimistic` and `useTransition` is appropriate.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for card design patterns, hover effects, and expandable content styling.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with React 19 hooks and component guidelines.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/ServicesSection.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`ServiceCard`, `@/lib/constants`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage. State management with `useState` is appropriate.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for grid layout and spacing.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with responsive grid patterns.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/hooks/useActiveRoute.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`next/navigation`, `react`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage. `useMemo` is used correctly to memoize the `isActive` calculation.
- [x] Check Tailwind CSS Classes: N/A (hook, no direct styling).
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with Next.js App Router patterns for hooks.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/hooks/useScrollEffect.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`useState`, `useEffect`, `useCallback`, `useRef` from `react`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: Verified correct import and usage of `lastScrollY` to store the previous scroll position.
- [x] Check Component Props and State: Verified correct typing and usage. State management with `useState`, `useEffect`, `useCallback` is appropriate.
- [x] Check Tailwind CSS Classes: N/A (hook, no direct styling).
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with React 19 hooks and performance optimization (throttling).

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/components/hooks/useSmoothScroll.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`useCallback` from `react`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage. `useCallback` is used correctly to memoize the `scrollToId` function.
- [x] Check Tailwind CSS Classes: N/A (hook, no direct styling).
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with React 19 hooks and UX patterns for smooth scrolling.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/globals.css`
- [x] Read file content.
- [x] Check Imports: Verified `@import "tailwindcss";` is correct. No other imports are present.
- [x] Check Variable and Function Naming: Confirmed CSS variable naming conventions (`--background`, `--foreground`, etc.).
- [x] Check `useRef` Usage: N/A (CSS file).
- [x] Check Component Props and State: N/A (CSS file).
- [x] Check Tailwind CSS Classes: Reviewed `@theme inline` configuration, custom animations (`glitch`, `magnetic`, `spotlight`), and general CSS. All adhere to design system and Tailwind CSS 4 best practices.
- [x] Check Server/Client Component Directives: N/A (CSS file).
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with CSS-first configuration and theme variables, including dark mode handling.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/layout.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`next/font/google`, local `globals.css`, `NavigationBar`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `children`. No state management is present, which is correct for a Server Component.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed correct application of font variables and antialiasing.
- [x] Check Server/Client Component Directives: Verified absence of `'use client'` for Root Layout (Server Component). Correct.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with Next.js App Router root layout patterns and font optimization.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/page.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (local components, `next/link`, `useSmoothScroll`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: No explicit props. State management is handled by child components and `useSmoothScroll` hook.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for layout, typography, button styling, and spacing.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used for interactivity.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with App Router page patterns and smooth scrolling integration.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/services/components/DetailedServiceCard.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`useOptimistic`, `useTransition`, `useState`, `useEffect`, `@/lib/services-data`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `DetailedServiceCardProps`. State management with React 19 hooks (`useOptimistic`, `useTransition`, `useState`, `useEffect`) is appropriate.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for complex styling, 3D effects, gradients, and responsive design.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with React 19 hooks and advanced component styling.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/services/components/ProcessOverview.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`PROCESS_STEPS` from `@/lib/constants`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: No explicit props or state management, which is correct for this component.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for layout, typography, and card styling.
- [x] Check Server/Client Component Directives: Verified absence of `'use client'` for Server Component. Correct.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with process visualization patterns.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/services/components/ServiceGrid.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`DetailedServiceCard`, `@/lib/services-data`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: Verified correct typing and usage of `ServiceGridProps`. State management with `useState` is appropriate.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for grid layout and spacing.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with responsive grid patterns.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/services/components/ServiceHero.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`next/link`, `useSmoothScroll`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: No explicit props or local state, which is correct for this component.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for hero section styling, gradient text, and button adherence.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with hero section patterns and smooth scrolling integration.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/app/services/page.tsx`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (local components, `next/link`, `@/lib/services-data`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed camelCase for variables/functions. All names are clear and descriptive.
- [x] Check `useRef` Usage: `useRef` is not used in this file.
- [x] Check Component Props and State: No explicit props or local state, which is correct for this page component.
- [x] Check Tailwind CSS Classes: Reviewed and confirmed adherence to design system for layout, typography, and spacing.
- [x] Check Server/Client Component Directives: Verified `'use client'` directive is correctly used.
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed compliance with App Router page patterns and component integration.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/lib/constants.ts`
- [x] Read file content.
- [x] Check Imports: Verified correct imports (`ServiceData`, `ProcessStepData` from `./types`). No unused imports found.
- [x] Check Variable and Function Naming: Confirmed PascalCase for constants (`AI_SERVICES`, `PROCESS_STEPS`, `ANIMATION_CONFIG`, `VALIDATION_RULES`, `SERVICE_OPTIONS`, `CHATBOT_MESSAGES`). All names are clear and descriptive.
- [x] Check `useRef` Usage: N/A (constants file).
- [x] Check Component Props and State: N/A (constants file).
- [x] Check Tailwind CSS Classes: N/A (constants file).
- [x] Check Server/Client Component Directives: N/A (constants file).
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed data structure and content align with project requirements. The constants provide essential data for the application, such as service details, process steps, validation rules, and chatbot messages, all consistent with the project's domain.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/lib/services-data.ts`
- [x] Read file content.
- [x] Check Imports: No imports needed. Correct.
- [x] Check Variable and Function Naming: Confirmed PascalCase for `DetailedServiceData` interface and `DETAILED_SERVICES` constant. All names are clear and descriptive.
- [x] Check `useRef` Usage: N/A (data file).
- [x] Check Component Props and State: N/A (data file).
- [x] Check Tailwind CSS Classes: N/A (data file).
- [x] Check Server/Client Component Directives: N/A (data file).
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed data structure and content align with project requirements for detailed services. The data is well-structured and provides comprehensive information for each service.

### Task: Review `/home/yasku/proyectos/nextjs-project/src/lib/types.ts`
- [x] Read file content.
- [x] Check Imports: No imports needed. Correct.
- [x] Check Variable and Function Naming: Confirmed PascalCase for interfaces and types. All names are clear and descriptive.
- [x] Check `useRef` Usage: N/A (types file).
- [x] Check Component Props and State: N/A (types file).
- [x] Check Tailwind CSS Classes: N/A (types file).
- [x] Check Server/Client Component Directives: N/A (types file).
- [x] Cross-reference with `README.md` and `README2.md`: Confirmed comprehensive and accurate type definitions for the entire application, aligning with React 19 and Next.js 15 patterns.
