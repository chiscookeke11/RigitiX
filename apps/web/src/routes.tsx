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
import { Page as DashboardPage } from "./pages/dashboard/Dashboard.tsx";
import { EventCreate } from "./pages/dashboard/EventCreate.tsx";
import { Page as AuthLaunchpadPage } from "./pages/authentication/Launchpad.tsx";
import { Page as FinanceLayout } from "./pages/dashboard/finance/Layout.tsx";
import { Page as RevenuePage } from "./pages/dashboard/finance/Revenue.tsx";
import { Page as PayoutPage } from "./pages/dashboard/finance/Payout.tsx";
import { Page as PayoutMethodPage } from "./pages/dashboard/finance/PayoutMethod.tsx";
import { Page as TransactionsPage } from "./pages/dashboard/finance/Transactions.tsx";
import { Page as RefundsPage } from "./pages/dashboard/finance/Refunds.tsx";
import { Page as AllPagesPage } from "./pages/AllPages.tsx";
import { Page as HomePage } from "./pages/Home.tsx";

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
      path: "launchpad",
      Component: AuthLaunchpadPage
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
        Component: DashboardPage
      },
      {
        path: "events",
        children: [
          {
            path: "create",
            Component: EventCreate
          }
        ]
      },
      {
        path: "financials",
        Component: FinanceLayout,
        children: [
          {
            index: true,
            Component: RevenuePage
          },
          {
            path: "payout",
            Component: PayoutPage
          },
          {
            path: "payout-method",
            Component: PayoutMethodPage
          },
          {
            path: "transactions",
            Component: TransactionsPage
          },
          {
            path: "refunds",
            Component: RefundsPage
          }
        ]
      }
    ]
  },
  {
    path: "/",
    Component: AllPagesPage
  },
  {
    path: "/*",
    element: <div>404 Not Found</div>
  },
  {
    path: "/home",
    Component: HomePage
  }
]);
