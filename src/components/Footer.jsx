import { Box, Divider, Stack, Typography } from '@mui/material'
import { Facebook, Youtube, X, Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        padding: { xs: 3, md: 5 },
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'grid',
        gap: 3,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h6">Grand7Horizon</Typography>
          <Typography color="text.secondary">
            Gold-standard hospitality intelligence suite.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Facebook size={20} />
          <Youtube size={20} />
          <X size={20} />
        </Stack>
      </Stack>

      <Divider />

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Phone size={18} />
          <Typography color="text.secondary">WhatsApp: +254 712 345 678</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Mail size={18} />
          <Typography color="text.secondary">concierge@grand7horizon.com</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <MapPin size={18} />
          <Typography color="text.secondary">Nairobi Skyline District</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
