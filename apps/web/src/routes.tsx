import { createBrowserRouter } from "react-router";
import { Layout as AuthenticationLayout } from "./pages/authentication/Layout.tsx";
import { Page as AuthIndexPage } from "./pages/authentication/Index.tsx";
import { Page as RegisterPage } from "./pages/authentication/Register.tsx";
import { DashboardLayout } from "./layouts/DashboardLayout.tsx";
import { Dashboard } from "./pages/dashboard/Dashboard.tsx";
import { EventCreate } from "./pages/dashboard/EventCreate.tsx";

export const router = createBrowserRouter([
  {
    path: "/auth",
    children: [{
      index: true,
      Component: AuthIndexPage
    },
    {
      Component: AuthenticationLayout,
      children: [
        {
          path: "register",
          Component: RegisterPage
        }
      ]
    }
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Dashboard
      },
      {
        path: "events",
        children: [
          {
            path: "create",
            Component: EventCreate
          }
        ]
      }
    ]
  },
  {
    path: "/",
    element: <div>Redirecting to dashboard...</div>
  },
  {
    path: "/*",
    element: <div>404 Not Found</div>
  }
]);
