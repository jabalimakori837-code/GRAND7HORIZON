import { Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, Button } from '@mui/material'

export default function RoomCard({ room, onBook }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" height="180" image={room.image} alt={room.type} />
      <CardContent sx={{ flex: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{room.type}</Typography>
          <Chip
            label={room.status}
            size="small"
            sx={{
              textTransform: 'capitalize',
              background:
                room.status === 'available'
                  ? 'rgba(112, 255, 196, 0.18)'
                  : room.status === 'occupied'
                  ? 'rgba(255, 148, 112, 0.2)'
                  : 'rgba(255, 210, 122, 0.2)',
              color:
                room.status === 'available'
                  ? '#70FFC4'
                  : room.status === 'occupied'
                  ? '#FF9470'
                  : '#FFD27A',
            }}
          />
        </Stack>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          ${room.price} per night
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onBook?.(room)}
          disabled={room.status !== 'available'}
        >
          Book Room
        </Button>
      </CardActions>
    </Card>
  )
}
