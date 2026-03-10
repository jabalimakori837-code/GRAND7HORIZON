import { Box, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const storyCards = [
  {
    title: 'Origin Suite',
    detail:
      'Born from the needs of flagship properties, Grand7Horizon blends heritage service with modern intelligence layers.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Design Doctrine',
    detail:
      'Glass, gold, and depth-led surfaces keep teams focused on what matters: speed, hospitality, and clarity.',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Operations Intelligence',
    detail:
      'Predictive staffing, live sentiment scans, and real-time task orchestration protect the guest experience.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Guest Signature',
    detail:
      'Every return stay activates personal preferences and curated rituals within minutes of arrival.',
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
  },
]

const pillars = [
  {
    title: 'Service Rhythm',
    detail: 'Automations keep critical teams ahead of guest volume and VIP timelines.',
  },
  {
    title: 'Luxury Commerce',
    detail: 'Upsell orchestration, event sequencing, and revenue intelligence on one dashboard.',
  },
  {
    title: 'Sustainable Hospitality',
    detail: 'Energy insights, supplier transparency, and impact reporting built in.',
  },
]

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 },
  },
}

const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          About Grand7Horizon
        </Typography>
        <Typography color="text.secondary">
          Crafted for hotels that treat service as performance art.
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        component={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {storyCards.map((card) => (
          <Grid item xs={12} md={6} key={card.title} component={motion.div} variants={item}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
                display: 'grid',
              }}
            >
              <Box
                component="img"
                src={card.image}
                alt={card.title}
                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <Box sx={{ padding: 2.5, display: 'grid', gap: 1.2 }}>
                <Typography variant="h5">{card.title}</Typography>
                <Typography color="text.secondary">{card.detail}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'grid', gap: 2 }}>
        <Typography variant="h5">Leadership Pillars</Typography>
        <Grid container spacing={3}>
          {pillars.map((pillar) => (
            <Grid item xs={12} md={4} key={pillar.title}>
              <Box
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.04)',
                  display: 'grid',
                  gap: 1,
                }}
              >
                <Typography variant="h6">{pillar.title}</Typography>
                <Typography color="text.secondary">{pillar.detail}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Stack spacing={1}>
        <Typography variant="h5">Guest Promise</Typography>
        <Typography color="text.secondary">
          We track preference signals, tailor room ambience in minutes, and craft
          bespoke journeys that guests remember long after checkout.
        </Typography>
      </Stack>
    </Box>
  )
}
