
# Regitix - Event Management Platform

Regitix is a monorepo event management platform built with Bun and modern web technologies.

## Project Structure

```
regitix/
├── apps/
│   └── web/                 # Frontend React application
│       ├── src/
│       │   ├── components/  # Reusable UI components
│       │   ├── pages/       # Page components
│       │   │   └── authentication/  # Auth pages (Login, Register, etc.)
│       │   ├── assets/      # Static assets
│       │   └── routes.tsx   # Application routing
│       ├── public/          # Public static files
│       │   ├── fonts/       # Custom fonts
│       │   └── images/      # Image assets
│       └── package.json     # Web app dependencies
└── packages/
    └── db/                  # Database layer (future)
```

## Development

### Web App (Frontend)

The web application is located in `apps/web/` and uses:
- React 19 with TypeScript
- Vite for development and building
- React Router DOM v7 for client-side routing
- Radix UI for components
- Tailwind CSS for styling

To start development:
```bash
cd apps/web
bun install
bun run dev
```

### Commands for Web App

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build

### Git Workflow

Follow the project's git workflow:
- Create feature branches from `master`
- Use conventional commit messages (feat:, fix:, chore:, etc.)
- Submit Pull Requests for all changes
- All changes must be reviewed before merging to `master`

### Code Style

- Use TypeScript for all new code
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Follow existing file structure conventions
- Export page components as `Page` function

## Project-Specific Guidelines

### File Structure
- Place new pages in `apps/web/src/pages/`
- Place reusable components in `apps/web/src/components/`
- Add routes in `apps/web/src/routes.tsx`
- Use the authentication layout for auth-related pages

### Component Patterns
```tsx
// Page component example
export function Page() {
  return (
    <div>
      <h1>Page Title</h1>
      {/* Page content */}
    </div>
  );
}
```

### Routing
- Use React Router DOM v7 syntax
- Follow the existing pattern in `routes.tsx`
- Nested routes should use the appropriate layout component

### Styling
- Use Tailwind CSS classes for styling
- Custom fonts (GeneralSans) are available in `public/fonts/`
- Follow responsive design principles

### Testing
- Use `bun test` for running tests
- Follow Bun's testing patterns with `import { test, expect } from "bun:test"`
