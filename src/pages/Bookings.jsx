import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'
import { useLoyalty } from '../hooks/useLoyalty'

const bookings = [
  {
    id: 'B-1402',
    guest: 'Amina Noor',
    room: 'Aurora Suite',
    checkIn: '2026-03-12',
    checkOut: '2026-03-16',
    totalPaid: 3920,
    status: 'confirmed',
  },
  {
    id: 'B-1403',
    guest: 'Leo Howard',
    room: 'Skyline Deluxe',
    checkIn: '2026-03-14',
    checkOut: '2026-03-18',
    totalPaid: 3040,
    status: 'pending',
  },
]

export default function Bookings() {
  const { addBooking } = useLoyalty()

  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Bookings
        </Typography>
        <Typography color="text.secondary">
          Guest flow and stay timeline
        </Typography>
      </Box>

      <Stack spacing={2}>
        {bookings.map((booking) => (
          <Paper key={booking.id} sx={{ padding: 3 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h6">{booking.guest}</Typography>
                <Typography color="text.secondary">
                  {booking.room} · {booking.checkIn} to {booking.checkOut}
                </Typography>
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h6">${booking.totalPaid}</Typography>
                <Chip
                  label={booking.status}
                  sx={{
                    textTransform: 'capitalize',
                    background:
                      booking.status === 'confirmed'
                        ? 'rgba(86, 255, 178, 0.2)'
                        : 'rgba(255, 210, 122, 0.2)',
                    color:
                      booking.status === 'confirmed' ? '#56FFB2' : '#FFD27A',
                  }}
                />
                <Button
                  variant="outlined"
                  onClick={() => addBooking(booking.totalPaid)}
                >
                  Add Points
                </Button>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  )
}
