# Regitix - Event Management Platform

A modern event management platform built with Bun and React, designed for seamless event creation, management, and attendee experiences.

## Project Structure

This is a monorepo containing:

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
│       │   ├── fonts/       # Custom fonts (GeneralSans)
│       │   └── images/      # Image assets (attendee, organizer)
│       └── package.json     # Web app dependencies
└── packages/
    └── db/                  # Database layer (planned)
```

## Technology Stack

- **Runtime**: [Bun](https://bun.com) - Fast all-in-one JavaScript runtime
- **Frontend**: React with TypeScript, React Router, Tailwind CSS
- **Database**: Planned repository layer (in `packages/db/`)

## Getting Started

### Prerequisites

- [Bun](https://bun.com) (v1.2.21 or later)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd regitix
```

2. Install dependencies for all apps:
```bash
bun install
```

### Development

Each application has its own README with specific instructions:

- **Web App**: See [apps/web/README.md](./apps/web/README.md) for frontend development
- **Database Layer**: (Coming soon in `packages/db/`)

Quick start for web development:
```bash
cd apps/web
bun install
bun run dev
```

## Architecture

This monorepo follows a modular architecture:

- **`apps/`** - Applications (web frontend, future backend services)
- **`packages/`** - Shared packages and utilities (database layer, shared components)

## Features

- ✅ **Authentication System** - Complete user auth flow with OTP verification
- 🔄 **Event Management** - (In development)
- 🔄 **Ticket Sales** - (Planned)
- 🔄 **Analytics Dashboard** - (Planned)
- 🔄 **Payment Processing** - (Planned)

## Development Guidelines

### Git Workflow
All changes should be done on a feature branch and merged via Pull Request to the `master` branch.

### Commit Message Convention
Use conventional commit format:

- **feat**: New features
  ```
  feat: add user dashboard page
  feat: implement event creation form
  ```

- **fix**: Bug fixes
  ```
  fix: resolve login form validation issue
  fix: correct responsive layout on mobile
  ```

- **chore**: Maintenance tasks, dependencies, configuration
  ```
  chore: update dependencies
  chore: configure ESLint rules
  chore: add build scripts
  ```

- **docs**: Documentation changes
  ```
  docs: update README with setup instructions
  docs: add API documentation
  ```

- **style**: Code style changes (formatting, missing semicolons, etc.)
  ```
  style: format code with prettier
  style: fix indentation in components
  ```

- **refactor**: Code refactoring without changing functionality
  ```
  refactor: extract reusable form components
  refactor: simplify authentication logic
  ```

- **test**: Adding or updating tests
  ```
  test: add unit tests for user service
  test: update component test coverage
  ```

### Branch Naming
- `feat/feature-name` - For new features
- `fix/bug-description` - For bug fixes
- `chore/task-description` - For maintenance tasks

### Coding Standards
- Use Bun instead of Node.js/npm
- Follow TypeScript best practices
- Use React functional components with hooks
- Implement responsive design
- Follow the existing code structure and conventions

For detailed development guidelines, see [CLAUDE.md](./CLAUDE.md).
