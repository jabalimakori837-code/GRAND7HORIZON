import { createContext, useContext, useMemo, useState } from 'react'
import { Alert, Snackbar } from '@mui/material'

const LoyaltyContext = createContext(null)

const TIERS = [
  { name: 'Silver', threshold: 0 },
  { name: 'Gold', threshold: 500 },
  { name: 'Grand7', threshold: 1500 },
]

function getTier(points) {
  if (points >= TIERS[2].threshold) return TIERS[2]
  if (points >= TIERS[1].threshold) return TIERS[1]
  return TIERS[0]
}

/**
 * Why: Loyalty points convert revenue into progression so staff can see
 * behavioral impact immediately. The 10% multiplier is a clean, memorable
 * ratio that keeps tiers reachable while still rewarding larger bookings.
 */
export function LoyaltyProvider({ children }) {
  const [points, setPoints] = useState(320)
  const [tier, setTier] = useState(getTier(320))
  const [toast, setToast] = useState({ open: false, message: '' })

  const addBooking = (price) => {
    const earned = Math.round(price * 0.1)
    const nextPoints = points + earned
    const nextTier = getTier(nextPoints)

    setPoints(nextPoints)
    if (nextTier.name !== tier.name) {
      setTier(nextTier)
      setToast({ open: true, message: `Level Up: ${nextTier.name}` })
    }
  }

  const value = useMemo(
    () => ({ points, tier, addBooking }),
    [points, tier]
  )

  return (
    <LoyaltyContext.Provider value={value}>
      {children}
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast({ open: false, message: '' })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ fontWeight: 600, letterSpacing: '0.02em' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </LoyaltyContext.Provider>
  )
}

export function useLoyaltyContext() {
  const context = useContext(LoyaltyContext)
  if (!context) {
    throw new Error('useLoyaltyContext must be used within LoyaltyProvider')
  }
  return context
}
