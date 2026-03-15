import { Box, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import RoomCard from '../components/RoomCard'
import PaymentGateway from '../components/PaymentGateway'
import { useState } from 'react'

const rooms = [
  {
    id: 'R-101',
    type: 'Aurora Suite',
    price: 980,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-102',
    type: 'Skyline Deluxe',
    price: 760,
    status: 'occupied',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-103',
    type: 'Zen Garden',
    price: 640,
    status: 'cleaning',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-104',
    type: 'Lunar Vista',
    price: 1120,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-105',
    type: 'Sapphire Loft',
    price: 850,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-106',
    type: 'Ember Suite',
    price: 920,
    status: 'occupied',
    image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-107',
    type: 'Jade Residence',
    price: 710,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-108',
    type: 'Noir Terrace',
    price: 680,
    status: 'cleaning',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-109',
    type: 'Celestial Corner',
    price: 1050,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-110',
    type: 'Harbor Light',
    price: 740,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1505693314127-5a1d9a24ba79?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-111',
    type: 'Quartz Studio',
    price: 590,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-112',
    type: 'Oasis Retreat',
    price: 880,
    status: 'occupied',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-113',
    type: 'Amber Loft',
    price: 690,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-114',
    type: 'Atlas Suite',
    price: 960,
    status: 'cleaning',
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-115',
    type: 'Summit View',
    price: 890,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-116',
    type: 'Regency Suite',
    price: 1240,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-117',
    type: 'Citrine Bay',
    price: 720,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-118',
    type: 'Monarch Suite',
    price: 1320,
    status: 'occupied',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-119',
    type: 'Solstice Room',
    price: 620,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1505693314127-5a1d9a24ba79?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'R-120',
    type: 'Eclipse Retreat',
    price: 1010,
    status: 'available',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  },
]

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function Rooms() {
  const [selected, setSelected] = useState(null)

  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Rooms
        </Typography>
        <Typography color="text.secondary">
          Live availability and pricing signals
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
        {rooms.map((room) => (
          <Grid item xs={12} md={6} lg={4} key={room.id} component={motion.div} variants={item}>
            <RoomCard room={room} onBook={setSelected} />
          </Grid>
        ))}
      </Grid>

      <PaymentGateway
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        label={selected ? `${selected.type} · ${selected.id}` : ''}
        amount={selected?.price}
      />
    </Box>
  )
}
