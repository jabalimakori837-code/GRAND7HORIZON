import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import './index.css'
import App from './App.jsx'
import theme from './theme/theme'
import { LoyaltyProvider } from './context/LoyaltyProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoyaltyProvider>
        <App />
      </LoyaltyProvider>
    </ThemeProvider>
  </StrictMode>
)
