import { createBrowserRouter } from "react-router";
import { Layout as AuthenticationLayout } from "./pages/authentication/Layout.tsx";
import { Page as AuthIndexPage } from "./pages/authentication/Index.tsx";
import { Page as RegisterPage } from "./pages/authentication/Register.tsx";
import { Page as LoginPage } from "./pages/authentication/Login.tsx";
import { Page as OTPVerificationPage } from "./pages/authentication/OTPVerification.tsx";

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
        },
        {
          path: "login",
          Component: LoginPage
        },
        {
          path: "otp-verification",
          Component: OTPVerificationPage
        }
      ]
    }
    ],
  },
  {
    path: "/*",
    element: <div>404 Not Found</div>
  }
]);
