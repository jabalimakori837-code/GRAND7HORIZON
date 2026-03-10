import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import PaymentGateway from '../components/PaymentGateway'

export default function Payments() {
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Payments
        </Typography>
        <Typography color="text.secondary">
          Simulated settlement flows for demos
        </Typography>
      </Box>

      <Button variant="contained" onClick={() => setOpen(true)}>
        Launch Payment Gateway
      </Button>

      <PaymentGateway open={open} onClose={() => setOpen(false)} />
    </Box>
  )
}
