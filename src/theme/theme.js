import { createTheme } from '@mui/material/styles'

/**
 * Why: A single glassmorphism contract keeps every surface consistent and
 * prevents visual drift as the app grows. Centralizing in the theme lets
 * all Paper/Card components inherit the same depth and blur treatment.
 */
const glassSurface = {
  backdropFilter: 'blur(20px)',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: '0 25px 60px rgba(22, 16, 8, 0.55)',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#C79B5A' },
    secondary: { main: '#E6C36A' },
    background: {
      default: '#241A12',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#F6E9D3',
      secondary: 'rgba(246, 233, 211, 0.72)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Segoe UI", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.015em' },
    h3: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          ...glassSurface,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          ...glassSurface,
        },
      },
    },
  },
})

export default theme
