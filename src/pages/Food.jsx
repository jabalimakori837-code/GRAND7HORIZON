import { Box, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const menus = [
  {
    name: 'Skyline Tasting Menu',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Charred lobster with citrus beurre blanc', price: '$48' },
      { name: 'Smoked goat cheese agnolotti', price: '$26' },
      { name: 'Golden millet risotto with truffle foam', price: '$32' },
      { name: 'Cacao dome with spiced berry compote', price: '$18' },
    ],
  },
  {
    name: 'Garden Brunch',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Saffron eggs with basil pesto', price: '$18' },
      { name: 'Avocado and preserved lemon toast', price: '$14' },
      { name: 'Honey glazed plantain and granola', price: '$12' },
      { name: 'Signature cold-pressed tonic', price: '$9' },
    ],
  },
  {
    name: 'Horizon Lounge',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Seared tuna, yuzu pearls', price: '$24' },
      { name: 'Truffle cassava fries', price: '$12' },
      { name: 'Aged ribeye sliders', price: '$28' },
      { name: 'Citrus saffron mocktail', price: '$10' },
    ],
  },
  {
    name: 'Desert Terrace',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Moroccan spice lamb chops', price: '$34' },
      { name: 'Charred corn with harissa', price: '$13' },
      { name: 'Date molasses glazed carrots', price: '$12' },
      { name: 'Rosewater citrus spritz', price: '$11' },
    ],
  },
  {
    name: 'Wellness Kitchen',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Cold-pressed green tonic', price: '$11' },
      { name: 'Grilled sea bass with herbs', price: '$29' },
      { name: 'Quinoa bowls with citrus', price: '$16' },
      { name: 'Berry chia parfait', price: '$12' },
    ],
  },
  {
    name: 'Night Market',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Smoky barbecue skewers', price: '$18' },
      { name: 'Ginger garlic noodles', price: '$14' },
      { name: 'Street-style bao trio', price: '$16' },
      { name: 'Coconut pineapple gelato', price: '$9' },
    ],
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

export default function Food() {
  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Culinary Studios
        </Typography>
        <Typography color="text.secondary">
          Seasonal menus, chef collaborations, and private tastings.
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
        {menus.map((menu) => (
          <Grid item xs={12} md={6} lg={4} key={menu.name} component={motion.div} variants={item}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
                display: 'grid',
                minHeight: 360,
              }}
            >
              <Box
                component="img"
                src={menu.image}
                alt={menu.name}
                sx={{ width: '100%', height: 180, objectFit: 'cover' }}
              />
              <Box sx={{ padding: 2.5, display: 'grid', gap: 1 }}>
                <Typography variant="h6">{menu.name}</Typography>
                <Stack spacing={0.8}>
                  {menu.items.map((menuItem) => (
                    <Stack
                      key={menuItem.name}
                      direction="row"
                      justifyContent="space-between"
                      spacing={2}
                    >
                      <Typography color="text.secondary" variant="body2">
                        {menuItem.name}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {menuItem.price}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'grid', gap: 2 }}>
        <Typography variant="h5">Signature Experiences</Typography>
        <Typography color="text.secondary">
          Chef table bookings, live grill performances, and wellness-driven menus
          are available for VIP stays and events.
        </Typography>
      </Box>
    </Box>
  )
}
