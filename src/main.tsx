import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import Router from './router.tsx'
import { ToastContainer } from 'react-toastify'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router />
      <ToastContainer 
        pauseOnHover={false}
        closeButton={false}
        autoClose={2500}
        pauseOnFocusLoss={false}
      />
      <Analytics />
      <SpeedInsights />
  </StrictMode>
)
