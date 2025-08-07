# nextjs-project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech Stack

- **Next.js**: 15.4.5 (with App Router)
- **React**: 19.1.0
- **TypeScript**: ^5
- **Tailwind CSS**: ^4
- **ESLint**: ^9

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

```
nextjs-project/
├───.geminiignore
├───.gitignore
├───CHANGELOG.md
├───CLAUDE.md
├───eslint.config.mjs
├───GEMINI.md
├───next.config.ts
├───package-lock.json
├───package.json
├───postcss.config.mjs
├───README.md
├───TECH_DOCUMENTATION.md
├───TODO.md
├───tsconfig.json
├───.claude/
│   ├───settings.local.json
│   └───commands/
│       ├───session-current.md
│       ├───session-current.md:Zone.Identifier
│       ├───session-end.md
│       ├───session-end.md:Zone.Identifier
│       ├───session-help.md
│       ├───session-help.md:Zone.Identifier
│       ├───session-list.md
│       ├───session-list.md:Zone.Identifier
│       ├───session-start.md
│       ├───session-start.md:Zone.Identifier
│       ├───session-update.md
│       └───session-update.md:Zone.Identifier
├───.gemini/
│   └───settings.json
├───.git/...
├───.next/
│   ├───build/...
│   ├───cache/...
│   ├───diagnostics/...
│   ├───server/...
│   ├───static/...
│   └───types/...
├───node_modules/...
├───public/
│   ├───file.svg
│   ├───globe.svg
│   ├───next.svg
│   ├───vercel.svg
│   └───window.svg
├───sessions/
│   └───.current-session
└───src/
    ├───app/
    │   ├───favicon.ico
    │   ├───globals.css
    │   ├───layout.tsx
    │   ├───page.tsx
    │   ├───components/
    │   │   ├───ContactForm.tsx
    │   │   ├───HamburgerIcon.tsx
    │   │   ├───Logo.tsx
    │   │   ├───MobileMenu.tsx
    │   │   ├───MobileMenuItem.tsx
    │   │   ├───NavigationBar.tsx
    │   │   ├───NavigationMenu.tsx
    │   │   ├───NavigationMenuItem.tsx
    │   │   ├───README.md
    │   │   ├───ServiceCard.tsx
    │   │   ├───ServicesSection.tsx
    │   │   └───hooks/
    │   │       ├───useActiveRoute.tsx
    │   │       ├───useScrollEffect.tsx
    │   │       └───useSmoothScroll.tsx
    │   └───services/
    │       ├───page.tsx
    │       └───components/
    │           ├───DetailedServiceCard.tsx
    │           ├───ProcessOverview.tsx
    │           ├───ServiceGrid.tsx
    │           └───ServiceHero.tsx
    └───lib/
        ├───constants.ts
        ├───services-data.ts
        └───types.ts
```

## Features

- ⚡ Next.js 15 with App Router for modern routing
- ⚛️ React 19 for latest React features
- 🎨 Tailwind CSS 4 for utility-first styling
- 📝 TypeScript for type safety
- 🔍 ESLint for code quality
- 🚀 Turbopack for fast development builds

## React 19 Best Practices

This project leverages React 19's cutting-edge features. Here are the key best practices to follow:

### New React 19 Hooks

#### useOptimistic - Optimistic UI Updates
```javascript
import { useOptimistic } from 'react';

function UpdateName({ currentName, onUpdateName }) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async formData => {
    const newName = formData.get("name");
    setOptimisticName(newName); // Immediately show new name
    const updatedName = await updateName(newName);
    onUpdateName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <input type="text" name="name" disabled={currentName !== optimisticName} />
    </form>
  );
}
```

#### use API - Conditional Context Consumption
```javascript
import { use } from 'react';

function Heading({ children }) {
  if (children == null) {
    return null;
  }
  
  // Can be called after early returns (unlike useContext)
  const theme = use(ThemeContext);
  return <h1 style={{ color: theme.color }}>{children}</h1>;
}
```

### Performance Optimization

#### useMemo for Expensive Calculations
```javascript
function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab] // Only recalculate when dependencies change
  );
  
  return (
    <ul>
      {visibleTodos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

#### useCallback for Stable Function References
```javascript
function ProductPage({ productId, referrer }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); // Only recreate when dependencies change

  return <ShippingForm onSubmit={handleSubmit} />;
}
```

#### useTransition for Better UX
```javascript
function UpdateName() {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      redirect("/path");
    });
  };

  return (
    <button onClick={handleSubmit} disabled={isPending}>
      {isPending ? "Updating..." : "Update"}
    </button>
  );
}
```

### Hook Rules & Best Practices

1. **Always call Hooks at the top level** - Never inside loops, conditions, or nested functions
2. **Only call Hooks from React functions** - Components or custom Hooks
3. **Custom Hooks should start with 'use'** - For proper linting and conventions
4. **Use dependency arrays correctly** - Include all reactive values in useEffect/useMemo/useCallback

```javascript
// ✅ Good: Top-level Hook usage
function MyComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Effect logic here
  }, [count]); // Include dependencies
}

// ❌ Bad: Conditional Hook usage
function BadComponent({ condition }) {
  if (condition) {
    const [state, setState] = useState(0); // Violates Rules of Hooks
  }
}
```

### Component Purity

Components and Hooks must be pure functions:

```javascript
// ✅ Good: Pure component
function TodoItem({ todo, onToggle }) {
  return (
    <li onClick={() => onToggle(todo.id)}>
      {todo.completed ? <s>{todo.text}</s> : todo.text}
    </li>
  );
}

// ❌ Bad: Side effects during render
function BadComponent() {
  // Don't mutate external variables during render
  document.title = "Bad Practice"; 
  return <div>Content</div>;
}
```

### Custom Hooks Pattern

Extract reusable logic into custom Hooks:

```javascript
// Custom Hook for online status
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  
  useEffect(() => {
    function handleOnline() { setIsOnline(true); }
    function handleOffline() { setIsOnline(false); }
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return isOnline;
}

// Usage in components
function SaveButton() {
  const isOnline = useOnlineStatus();
  
  return (
    <button disabled={!isOnline}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}
```

### TypeScript Integration

Improved type inference in React 19:

```typescript
// ✅ React 19: No explicit type needed
const [state, dispatch] = useReducer(reducer);

// ✅ Better custom Hook typing
function useData<T>(url: string): T | null {
  const [data, setData] = useState<T | null>(null);
  // Implementation...
  return data;
}
```

### Resource Loading Optimization

Use React 19's resource preloading:

```javascript
function MyApp() {
  // These will be intelligently prioritized
  preinit('https://.../script.js', { as: 'script' });
  prefetchDNS('https://...');
  preconnect('https://...');
  preload('https://.../font.woff', { as: 'font' });
  
  return <div>App content</div>;
}
```

## Tailwind CSS 4 Best Practices

This project uses Tailwind CSS 4, which introduces revolutionary changes to how we configure and use Tailwind. Here are the key best practices:

### CSS-First Configuration with @theme

Tailwind CSS 4 moves away from `tailwind.config.js` to CSS-based configuration:

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --font-display: "Satoshi", "sans-serif";
  --font-body: "Inter", "sans-serif";

  --breakpoint-3xl: 1920px;

  --color-brand-100: oklch(0.99 0 0);
  --color-brand-200: oklch(0.98 0.04 113.22);
  --color-brand-300: oklch(0.94 0.11 115.03);
  --color-brand-400: oklch(0.92 0.19 114.08);
  --color-brand-500: oklch(0.84 0.18 117.33);
  --color-brand-600: oklch(0.53 0.12 118.34);

  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
}
```

### Dynamic Utilities

Tailwind CSS 4 generates utilities on-demand without explicit configuration:

```html
<!-- Dynamic grid columns -->
<div class="grid grid-cols-15">
  <!-- 15 columns without configuration -->
</div>

<!-- Dynamic spacing -->
<div class="p-[23px] m-[47px]">
  <!-- Arbitrary values work seamlessly -->
</div>

<!-- Dynamic colors -->
<div class="bg-[oklch(0.5_0.2_180)]">
  <!-- Modern color spaces supported -->
</div>
```

### Modern CSS Features Integration

Leverage native cascade layers and modern CSS:

```css
@layer theme, base, components, utilities;

@layer utilities {
  .mx-6 {
    margin-inline: calc(var(--spacing) * 6);
  }
  
  .bg-brand-500\/50 {
    background-color: color-mix(in oklab, var(--color-brand-500) 50%, transparent);
  }
}

@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
```

### TypeScript Integration

Enhanced TypeScript support with improved config:

```typescript
// tailwind.config.ts (if needed for legacy compatibility)
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
```

### Next.js Integration

Configure PostCSS for Tailwind CSS 4:

```javascript
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    // postcss-import and autoprefixer no longer needed
  },
};
```

### Component Styling Patterns

Use @utility for custom component styles:

```css
@utility btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

@utility btn-primary {
  background-color: var(--color-brand-500);
  color: white;
}

@utility btn-primary:hover {
  background-color: var(--color-brand-600);
}
```

### Responsive Design with Container Queries

Leverage the new container query support:

```html
<div class="@container">
  <div class="grid grid-cols-3 @max-md:grid-cols-1">
    <!-- Responsive based on container size, not viewport -->
  </div>
</div>
```

### Advanced Variant Composition

Combine variants more flexibly:

```html
<div class="group">
  <button class="group-has-[input:focus]:ring-2 group-hover:bg-gray-100">
    <!-- Complex variant combinations -->
  </button>
</div>
```

### Animation and Transitions

Use CSS variables for dynamic animations:

```jsx
// React component with dynamic CSS variables
function AnimatedCard({ color, duration }) {
  return (
    <div
      style={{
        '--card-color': color,
        '--duration': `${duration}ms`,
      }}
      className="bg-[--card-color] transition-all duration-[--duration] hover:scale-105"
    >
      Content
    </div>
  );
}
```

### Starting State Animations

Use the new `starting` variant for element appearance:

```html
<div 
  popover="auto" 
  class="transition-all duration-500 opacity-0 starting:opacity-0 [&:is([open],:popover-open)]:opacity-100"
>
  <p>This animates smoothly when first displayed</p>
</div>
```

### Performance Optimizations

1. **Minimize CSS Bundle Size:**
```css
@import "tailwindcss" layer(utilities);
/* Only import what you need */
```

2. **Use CSS Variables for Runtime Changes:**
```javascript
// Better performance than inline styles
function ThemeProvider({ theme, children }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-primary', theme.primary);
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
  }, [theme]);

  return children;
}
```

### Content Configuration

Optimize content scanning for better performance:

```javascript
// tailwind.config.ts (if using legacy config)
export default {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract: {
      // Custom extraction for special file types
      tsx: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    },
  },
} satisfies Config
```

### Logical Properties for Internationalization

Use logical properties for better i18n support:

```html
<div class="ms-4 me-6 ps-8 pe-10">
  <!-- margin-inline-start, margin-inline-end, 
       padding-inline-start, padding-inline-end -->
</div>

<div class="start-4 end-8">
  <!-- inset-inline-start, inset-inline-end -->
</div>
```

### Custom Variant Definitions

Define reusable custom variants:

```css
@custom-variant supports-grid {
  @supports (display: grid) {
    @slot;
  }
}

@custom-variant dark-high-contrast {
  @media (prefers-color-scheme: dark) and (prefers-contrast: high) {
    @slot;
  }
}
```

### Accessibility Best Practices

Leverage forced-colors mode support:

```html
<input 
  type="checkbox" 
  class="appearance-none forced-colors:appearance-auto ring-2 ring-brand-500 forced-colors:ring-[Highlight]"
/>
```

Use proper contrast utilities:

```html
<button class="bg-brand-500 text-white contrast-more:bg-brand-600 contrast-more:font-bold">
  Accessible Button
</button>
```

## Next.js App Router Best Practices

This project uses Next.js 15 with the App Router architecture. Here are essential best practices to follow:

### Server vs Client Component Patterns

**Server Components (Default):**
- Use for data fetching, static content, and performance-critical operations
- Run on the server, reducing client bundle size

```javascript
// Server Component - async data fetching
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug); // Direct server-side data fetching
  
  return (
    <div>
      <h1>{post.title}</h1>
      <ClientLikeButton initialLikes={post.likes} />
    </div>
  );
}
```

**Client Components:**
- Use `'use client'` for interactivity, state, and browser APIs
- Keep them focused and minimal

```javascript
'use client'

import { useState } from 'react';

export default function ClientLikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  
  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes} likes
    </button>
  );
}
```

### Layout and Page Organization

**Root Layout (Required):**
```javascript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

**Nested Layouts:**
```javascript
// app/blog/layout.tsx
export default function BlogLayout({ children }) {
  return (
    <div className="blog-container">
      <BlogSidebar />
      <main>{children}</main>
    </div>
  );
}
```

### Data Fetching Best Practices

**Server-side Data Fetching:**
```javascript
// Automatic caching by default
async function getStaticData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

// Force dynamic (no cache)
async function getDynamicData() {
  const res = await fetch('https://api.example.com/data', { 
    cache: 'no-store' 
  });
  return res.json();
}
```

**Parallel Data Fetching:**
```javascript
export default async function Page() {
  // Fetch data in parallel
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ]);
  
  return <BlogContent posts={posts} categories={categories} />;
}
```

### Dynamic Routing Patterns

**Dynamic Segments:**
```javascript
// app/blog/[slug]/page.tsx
export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  return <PostContent post={post} />;
}

// Generate static params
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
```

**Catch-all Routes:**
```javascript
// app/docs/[...segments]/page.tsx
export default async function DocsPage({ params }) {
  const { segments } = await params;
  const path = segments.join('/');
  
  return <DocsContent path={path} />;
}
```

### Performance Optimization

**Bundle Optimization:**
- Keep Client Components minimal
- Use Server Components for static content
- Wrap third-party components

```javascript
// Wrapper for third-party client components
'use client'
import { ExternalLibrary } from 'external-lib';
export default ExternalLibrary;
```

**Strategic Component Boundaries:**
```javascript
// Server Component layout with selective client components
export default function Layout({ children }) {
  return (
    <div>
      <StaticHeader />           {/* Server Component */}
      <InteractiveSearch />      {/* Client Component */}
      <main>{children}</main>    {/* Server Component */}
    </div>
  );
}
```

**Data Passing Patterns:**
```javascript
// Pass minimal data from Server to Client
export default async function Page() {
  const fullUserData = await getUser();
  
  // Only pass what the client needs
  return <UserProfile 
    name={fullUserData.name} 
    avatar={fullUserData.avatar}
  />;
}
```

### Navigation Best Practices

**Client-side Navigation:**
```javascript
'use client'
import { useRouter, usePathname } from 'next/navigation';

export default function NavigationComponent() {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleNavigation = () => {
    router.push('/dashboard');
  };
  
  return (
    <nav>
      <button 
        onClick={handleNavigation}
        className={pathname === '/dashboard' ? 'active' : ''}
      >
        Dashboard
      </button>
    </nav>
  );
}
```

**Link Prefetching:**
```javascript
import Link from 'next/link';

export default function Navigation() {
  return (
    <Link href="/dashboard" prefetch={true}>
      Dashboard (prefetched)
    </Link>
  );
}
```
