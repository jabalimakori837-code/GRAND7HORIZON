import { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import StatCard from '../components/StatCard'
import PaymentGateway from '../components/PaymentGateway'
import { useLoyalty } from '../hooks/useLoyalty'

export default function Dashboard() {
  const { points, tier, addBooking } = useLoyalty()
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Executive Dashboard
        </Typography>
        <Typography color="text.secondary">
          Revenue, occupancy, and service momentum in one view.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title="Total Revenue" value="$148,920" trend="+12.4% MoM" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Occupancy Rate" value="86%" trend="+6 rooms" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Active Guests" value="42" trend="+8 today" />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6">Loyalty Engine</Typography>
          <Typography color="text.secondary">
            Tier: {tier.name} · {points} points
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={() => addBooking(8200)}>
            Simulate Booking
          </Button>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Open Payment Gateway
          </Button>
        </Box>
      </Box>

      <PaymentGateway open={open} onClose={() => setOpen(false)} />
    </Box>
  )
}
