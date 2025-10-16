# Regitix Web App

The frontend React application for the Regitix event management platform.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite with HMR (Hot Module Replacement)
- **Routing**: React Router DOM v7 for client-side routing
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS + custom fonts (GeneralSans)
- **Linting**: ESLint with React-specific rules
- **Runtime**: Bun (instead of Node.js/npm)

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   └── authentication/ # Auth pages (Login, Register, OTP, etc.)
│       ├── Index.tsx
│       ├── Layout.tsx
│       ├── Login.tsx
│       ├── OTPVerification.tsx
│       ├── Register.tsx
│       ├── ResetPassword.tsx
│       └── UpdatePassword.tsx
├── assets/             # Static assets (images, icons)
├── routes.tsx          # Application routing configuration
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Getting Started

### Prerequisites

- [Bun](https://bun.com) (v1.2.21 or later)

### Installation

1. Install dependencies:
```bash
bun install
```

### Development

Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `bun run dev` - Start development server with HMR
- `bun run build` - Build for production (TypeScript compilation + Vite build)
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build

## Features

### Authentication System
- User registration with form validation
- Login with email/password
- OTP verification for account security
- Password reset functionality
- Update password feature
- Responsive authentication layout

### Routing
The app uses React Router DOM v7 with the following routes:
- `/` - Landing/home page
- `/auth` - Authentication layout with nested routes:
  - `/auth/login` - User login
  - `/auth/register` - User registration
  - `/auth/otp` - OTP verification
  - `/auth/reset-password` - Password reset
  - `/auth/update-password` - Update password

Route configuration is managed in `src/routes.tsx`

### Adding a New Page with Route

To add a new page with a route:

1. **Create the page component** in `src/pages/`:
```tsx
// src/pages/Events.tsx
export function Page() {
  return (
    <div>
      <h1>Events Page</h1>
      {/* Your page content */}
    </div>
  );
}
```

2. **Add the route** in `src/routes.tsx`:
```tsx
import { Page as EventsPage } from "./pages/Events.tsx";

export const router = createBrowserRouter([
  {
    path: "/events",
    Component: EventsPage
  },
  // ... other routes
]);
```

3. **For nested routes** (like auth pages), add to existing route children:
```tsx
{
  Component: AuthenticationLayout,
  children: [
    {
      path: "login",
      Component: LoginPage
    }
    // Add new auth routes here
  ]
}
```

