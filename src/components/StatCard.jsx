import { Card, CardContent, Typography, Box } from '@mui/material'

export default function StatCard({ title, value, trend }) {
  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 140,
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top, rgba(107,227,255,0.22), transparent 60%)',
          opacity: 0.9,
        },
      }}
    >
      <CardContent sx={{ position: 'relative' }}>
        <Typography variant="overline" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1, fontWeight: 700 }}>
          {value}
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: 'inline-flex',
            padding: '4px 12px',
            borderRadius: 999,
            background: 'rgba(107, 227, 255, 0.12)',
            color: '#6BE3FF',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {trend}
        </Box>
      </CardContent>
    </Card>
  )
}
