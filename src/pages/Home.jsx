import { useState } from 'react'
import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
  LinearProgress,
} from '@mui/material'
import { motion } from 'framer-motion'
import StatCard from '../components/StatCard'
import PaymentGateway from '../components/PaymentGateway'
import { useLoyalty } from '../hooks/useLoyalty'

const highlights = [
  {
    title: 'Arrival Experience',
    detail: 'VIP routing, silent check-in, and curated room reveals within 6 minutes.',
    tag: 'Concierge',
  },
  {
    title: 'Revenue Pulse',
    detail: 'Live ADR, RevPAR, and upsell mix with predictive demand heatmaps.',
    tag: 'Finance',
  },
  {
    title: 'Service Orchestration',
    detail: 'Housekeeping, dining, and spa coordination in a single timeline view.',
    tag: 'Ops',
  },
  {
    title: 'Guest Preference Graph',
    detail: 'Personalized scents, lighting, and dining triggers for repeat guests.',
    tag: 'Experience',
  },
]

const initiatives = [
  {
    title: 'Suite Readiness',
    value: 92,
    description: 'Rooms prepped before check-in window',
  },
  {
    title: 'Service Response',
    value: 87,
    description: 'Requests resolved in under 12 minutes',
  },
  {
    title: 'Wellness Utilization',
    value: 74,
    description: 'Spa, gym, and pool bookings',
  },
]

const conciergeBrief = [
  'Horizon Lounge: Live jazz + tapas tonight at 8:00 PM',
  'Private boardroom: CEO retreat ready at 7:00 AM',
  'Skyline pool: Sunrise yoga booked by 14 guests',
]

const suites = [
  {
    name: 'Aurora Sky Suite',
    detail: 'Private terrace, skyline bath, and bespoke scent layering.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Regency Horizon',
    detail: 'Two-room layout with butler pantry and marble wet bar.',
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Garden Sanctuary',
    detail: 'Biophilic suite with sunrise garden and soundscape immersion.',
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=80',
]

const amenities = [
  {
    title: 'Private Arrival',
    detail: 'Dedicated driveway, silk-light check-in, and curated welcome.',
  },
  {
    title: 'Skyline Wellness',
    detail: 'Salt room, hydrotherapy, and midnight spa access.',
  },
  {
    title: 'Culinary Atelier',
    detail: 'Chef table, seasonal tasting, and sommelier pairings.',
  },
  {
    title: 'Executive Club',
    detail: 'Soundproof suites, boardroom access, and private concierge.',
  },
]

const spaExperiences = [
  {
    title: 'Moonlit Hammam',
    detail: 'Mineral steam rituals and aromatherapy under amber lighting.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Skyline Hydrotherapy',
    detail: 'Thermal pools, contrast therapy, and guided recovery.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Zen Recovery Studio',
    detail: 'Breathwork, sound baths, and late-night restorative sessions.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
  },
]

const events = [
  {
    title: 'Grand Ballroom',
    detail: '400-guest capacity with cinematic lighting and private arrivals.',
    image:
      'https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Garden Pavilion',
    detail: 'Outdoor ceremonies with skyline backdrops and live string quartets.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Executive Summits',
    detail: 'Private boardrooms, concierge AV, and discreet VIP transport.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
  },
]

const cityExperiences = [
  {
    title: 'Helicopter City Sweep',
    detail: 'Sunset flight with curated champagne service.',
  },
  {
    title: 'Private Art Walk',
    detail: 'After-hours access to galleries with resident curator.',
  },
  {
    title: 'Coastal Safari',
    detail: 'Luxury day escape with private chef and photographer.',
  },
]

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
}

const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function Home() {
  const { points, tier, addBooking } = useLoyalty()
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ display: 'grid', gap: 4 }}>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          padding: { xs: 3, md: 5 },
          borderRadius: 4,
          background:
            'linear-gradient(120deg, rgba(199, 155, 90, 0.25), rgba(88, 60, 32, 0.12))',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Grand7Horizon
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 720, mt: 1 }}>
              A luxury operations and guest-experience suite designed for hotels that
              live at the intersection of craft and precision. Every moment is
              orchestrated to feel effortless.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" onClick={() => setOpen(true)}>
                Launch Payment Demo
              </Button>
              <Button variant="outlined">Open Live Briefing</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 2,
              }}
            >
              {gallery.slice(0, 4).map((image, index) => (
                <Box
                  key={image}
                  component={motion.img}
                  src={image}
                  alt={`Grand7Horizon highlight ${index + 1}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  sx={{
                    width: '100%',
                    height: 150,
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
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

      <Grid
        container
        spacing={3}
        component={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {highlights.map((highlight) => (
          <Grid item xs={12} md={6} key={highlight.title} component={motion.div} variants={item}>
            <Box
              sx={{
                padding: 3,
                borderRadius: 3,
                background: 'rgba(255,255,255,0.04)',
                display: 'grid',
                gap: 1.2,
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip label={highlight.tag} size="small" sx={{ background: 'rgba(199,155,90,0.2)' }} />
                <Typography variant="h6">{highlight.title}</Typography>
              </Stack>
              <Typography color="text.secondary">{highlight.detail}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'grid', gap: 2 }}>
        <Typography variant="h4">Signature Suites</Typography>
        <Grid container spacing={3}>
          {suites.map((suite) => (
            <Grid item xs={12} md={4} key={suite.name}>
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
                  src={suite.image}
                  alt={suite.name}
                  sx={{ width: '100%', height: 190, objectFit: 'cover' }}
                />
                <Box sx={{ padding: 2.5, display: 'grid', gap: 1 }}>
                  <Typography variant="h6">{suite.name}</Typography>
                  <Typography color="text.secondary">{suite.detail}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: 'grid', gap: 2 }}>
        <Typography variant="h4">Luxury Amenities</Typography>
        <Grid container spacing={3}>
          {amenities.map((amenity) => (
            <Grid item xs={12} md={6} key={amenity.title}>
              <Box
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.04)',
                  display: 'grid',
                  gap: 1,
                }}
              >
                <Typography variant="h6">{amenity.title}</Typography>
                <Typography color="text.secondary">{amenity.detail}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: 'grid', gap: 2 }}>
        <Typography variant="h4">Spa & Wellness</Typography>
        <Grid container spacing={3}>
          {spaExperiences.map((spa) => (
            <Grid item xs={12} md={4} key={spa.title}>
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
                  src={spa.image}
                  alt={spa.title}
                  sx={{ width: '100%', height: 190, objectFit: 'cover' }}
                />
                <Box sx={{ padding: 2.5, display: 'grid', gap: 1 }}>
                  <Typography variant="h6">{spa.title}</Typography>
                  <Typography color="text.secondary">{spa.detail}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: 'grid', gap: 2 }}>
        <Typography variant="h4">Weddings & Events</Typography>
        <Grid container spacing={3}>
          {events.map((event) => (
            <Grid item xs={12} md={4} key={event.title}>
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
                  src={event.image}
                  alt={event.title}
                  sx={{ width: '100%', height: 190, objectFit: 'cover' }}
                />
                <Box sx={{ padding: 2.5, display: 'grid', gap: 1 }}>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography color="text.secondary">{event.detail}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: 'grid', gap: 2 }}>
        <Typography variant="h4">City Experiences</Typography>
        <Grid container spacing={3}>
          {cityExperiences.map((experience) => (
            <Grid item xs={12} md={4} key={experience.title}>
              <Box
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.04)',
                  display: 'grid',
                  gap: 1,
                }}
              >
                <Typography variant="h6">{experience.title}</Typography>
                <Typography color="text.secondary">{experience.detail}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Typography variant="h5">Concierge Briefing</Typography>
            <Stack spacing={1}>
              {conciergeBrief.map((itemText) => (
                <Typography key={itemText} color="text.secondary">
                  {itemText}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Typography variant="h5">Loyalty Engine</Typography>
            <Typography color="text.secondary">
              Tier: {tier.name} · {points} points
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={() => addBooking(8200)}>
                Simulate Booking
              </Button>
              <Button variant="outlined" onClick={() => setOpen(true)}>
                Open Payment Gateway
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'grid', gap: 2 }}>
        <Typography variant="h4">Gallery</Typography>
        <Grid container spacing={2}>
          {gallery.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={`${image}-${index}`}>
              <Box
                component="img"
                src={image}
                alt={`Gallery ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: '0 18px 40px rgba(0,0,0,0.35)',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {initiatives.map((itemData) => (
          <Grid item xs={12} md={4} key={itemData.title}>
            <Box sx={{ padding: 3, borderRadius: 3, background: 'rgba(255,255,255,0.04)' }}>
              <Typography variant="h6">{itemData.title}</Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {itemData.description}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={itemData.value}
                sx={{
                  height: 8,
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.08)',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #C79B5A, #F2D07C)',
                  },
                }}
              />
              <Typography sx={{ mt: 1, fontWeight: 600 }}>{itemData.value}%</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <PaymentGateway open={open} onClose={() => setOpen(false)} />
    </Box>
  )
}
