import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { Theme } from '@radix-ui/themes';
// import '@radix-ui/themes/styles.css';
import './index.css'
import { router } from "./routes.tsx";
import UtilityNavbar from './components/UtilityNavbar.tsx';
import Footer from './components/Footer.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <UtilityNavbar/>
      <RouterProvider router={router} />
      <Footer/>
    </Theme>
  </StrictMode>,
)
