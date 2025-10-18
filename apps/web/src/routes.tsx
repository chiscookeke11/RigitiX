import { createBrowserRouter } from "react-router";
import { Layout as AuthenticationLayout } from "./pages/authentication/Layout.tsx";
import { Page as AuthIndexPage } from "./pages/authentication/Index.tsx";
import { Page as RegisterPage } from "./pages/authentication/Register.tsx";
import { Page as LoginPage } from "./pages/authentication/Login.tsx";
import { Page as OTPVerificationPage } from "./pages/authentication/OTPVerification.tsx";
import { Page as InterestsPage } from "./pages/authentication/Interests.tsx";
import { Page as ForgotPasswordPage } from "./pages/authentication/ForgotPassword.tsx";
import { Page as UpdatePasswordPage } from "./pages/authentication/UpdatePassword.tsx";
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
      path: "interests",
      Component: InterestsPage
    },
    {
      Component: AuthenticationLayout,
      children: [
        {
          path: "register",
          Component: RegisterPage
        },
        {
          path: "login",
          Component: LoginPage
        },
        {
          path: "otp-verification",
          Component: OTPVerificationPage
        },
        {
          path: "forgot-password",
          Component: ForgotPasswordPage
        },
        {
          path: "update-password",
          Component: UpdatePasswordPage
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
