import { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
  TextField,
  Typography,
  Stack,
} from '@mui/material'
import { motion } from 'framer-motion'
import { createReceiptHtmlUrl } from '../utils/receipt'

const MotionBox = motion(Box)

const logos = {
  mpesa: (
    <svg width="42" height="26" viewBox="0 0 84 52" fill="none">
      <rect width="84" height="52" rx="12" fill="#1C1C1C" />
      <path d="M14 34L26 10H36L24 34H14Z" fill="#4CAF50" />
      <path d="M38 34L50 10H60L48 34H38Z" fill="#E53935" />
      <text x="12" y="44" fill="#B3FFB8" fontSize="10" fontFamily="Inter, sans-serif">
        M-PESA
      </text>
    </svg>
  ),
  paypal: (
    <svg width="42" height="26" viewBox="0 0 84 52" fill="none">
      <rect width="84" height="52" rx="12" fill="#1C1C1C" />
      <text x="16" y="34" fill="#5AA7FF" fontSize="18" fontFamily="Inter, sans-serif" fontWeight="700">
        Pay
      </text>
      <text x="42" y="34" fill="#0B74FF" fontSize="18" fontFamily="Inter, sans-serif" fontWeight="700">
        Pal
      </text>
    </svg>
  ),
  visa: (
    <svg width="42" height="26" viewBox="0 0 84 52" fill="none">
      <rect width="84" height="52" rx="12" fill="#1C1C1C" />
      <text x="18" y="34" fill="#2E7BF8" fontSize="18" fontFamily="Inter, sans-serif" fontWeight="700">
        VISA
      </text>
      <rect x="12" y="38" width="60" height="2" fill="#F5C26B" />
    </svg>
  ),
}

function Checkmark() {
  return (
    <MotionBox
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <MotionBox
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        component="svg"
        width="64"
        height="64"
        viewBox="0 0 72 72"
        fill="none"
      >
        <circle cx="36" cy="36" r="32" stroke="#70FFC4" strokeWidth="4" />
        <motion.path
          d="M22 38L32 48L50 26"
          stroke="#70FFC4"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </MotionBox>
    </MotionBox>
  )
}

export default function PaymentGateway({ open, onClose, label, amount }) {
  const [tab, setTab] = useState(0)
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [paid, setPaid] = useState(false)
  const [receiptUrl, setReceiptUrl] = useState('')

  const tabKey = useMemo(() => ['mpesa', 'paypal', 'visa'][tab], [tab])

  useEffect(() => {
    if (open) {
      setTab(0)
      setPhone('')
      setLoading(false)
      setPaid(false)
      setReceiptUrl('')
    }
  }, [open])

  const completePayment = (method) => {
    setPaid(true)
    const url = createReceiptHtmlUrl({
      label: label || 'Grand7Horizon Receipt',
      amount: amount || 0,
      method,
    })
    setReceiptUrl(url)
  }

  const handleMpesa = () => {
    setLoading(true)
    setPaid(false)
    setTimeout(() => {
      setLoading(false)
      completePayment('M-Pesa')
    }, 5000)
  }

  const handleInstant = (method) => {
    setLoading(true)
    setPaid(false)
    setTimeout(() => {
      setLoading(false)
      completePayment(method)
    }, 1200)
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box>{logos[tabKey]}</Box>
        <Box>
          <Typography variant="h6">Secure Payment</Typography>
          <Typography variant="body2" color="text.secondary">
            {label ? `${label} · $${amount}` : 'Simulated gateway for demo flows'}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ pb: 4 }}>
        <Tabs
          value={tab}
          onChange={(_, value) => {
            setTab(value)
            setPaid(false)
            setLoading(false)
            setReceiptUrl('')
          }}
          sx={{ mb: 3 }}
        >
          <Tab label="M-Pesa" />
          <Tab label="PayPal" />
          <Tab label="Visa" />
        </Tabs>

        {tab === 0 && (
          <Box sx={{ display: 'grid', gap: 2 }}>
            <TextField
              label="M-Pesa Phone Number"
              placeholder="254 712 345 678"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              disabled={!phone || loading}
              onClick={handleMpesa}
            >
              Start STK Push
            </Button>
            {loading && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CircularProgress size={28} />
                <Typography>Simulating STK Push...</Typography>
              </Box>
            )}
            {paid && (
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Checkmark />
                  <Typography sx={{ color: '#70FFC4', fontWeight: 600 }}>
                    Payment Confirmed
                  </Typography>
                </Box>
                {receiptUrl && (
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button variant="outlined" component="a" href={receiptUrl} target="_blank">
                      View Receipt
                    </Button>
                    <Button variant="contained" component="a" href={receiptUrl} download>
                      Download HTML
                    </Button>
                  </Stack>
                )}
              </Stack>
            )}
          </Box>
        )}

        {tab === 1 && (
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Connect PayPal and confirm payment in a separate window.
            </Typography>
            <Button variant="contained" disabled={loading} onClick={() => handleInstant('PayPal')}>
              Continue with PayPal
            </Button>
            {paid && receiptUrl && (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="outlined" component="a" href={receiptUrl} target="_blank">
                  View Receipt
                </Button>
                <Button variant="contained" component="a" href={receiptUrl} download>
                  Download HTML
                </Button>
              </Stack>
            )}
          </Box>
        )}

        {tab === 2 && (
          <Box sx={{ display: 'grid', gap: 2 }}>
            <TextField label="Cardholder Name" fullWidth />
            <TextField label="Card Number" fullWidth />
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <TextField label="Expiry" placeholder="MM/YY" />
              <TextField label="CVC" placeholder="123" />
            </Box>
            <Button variant="contained" disabled={loading} onClick={() => handleInstant('Visa')}>
              Confirm Payment
            </Button>
            {paid && receiptUrl && (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="outlined" component="a" href={receiptUrl} target="_blank">
                  View Receipt
                </Button>
                <Button variant="contained" component="a" href={receiptUrl} download>
                  Download HTML
                </Button>
              </Stack>
            )}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )
}
