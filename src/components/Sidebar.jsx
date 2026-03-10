import { Box, IconButton, Tooltip } from '@mui/material'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BedDouble,
  Calendar,
  CreditCard,
  Home,
  Info,
  Utensils,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', icon: Home, to: '/home' },
  { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
  { label: 'Rooms', icon: BedDouble, to: '/rooms' },
  { label: 'Bookings', icon: Calendar, to: '/bookings' },
  { label: 'Payments', icon: CreditCard, to: '/payments' },
  { label: 'About', icon: Info, to: '/about' },
  { label: 'Food', icon: Utensils, to: '/food' },
]

const MotionBox = motion(Box)

export default function Sidebar() {
  return (
    <MotionBox
      initial={false}
      whileHover={{ width: 240 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      sx={{
        position: 'fixed',
        left: 24,
        top: 24,
        bottom: 24,
        width: 76,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        padding: 1.5,
        borderRadius: 999,
        background: 'rgba(20, 20, 20, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(24px)',
        zIndex: 1200,
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Tooltip key={item.label} title={item.label} placement="right">
            <Box
              component={NavLink}
              to={item.to}
              end
              sx={{
                textDecoration: 'none',
              }}
            >
              {({ isActive }) => (
                <IconButton
                  size="large"
                  sx={{
                    width: 52,
                    height: 52,
                    color: isActive ? '#F5C26B' : 'rgba(255,255,255,0.7)',
                    boxShadow: isActive
                      ? '0 0 18px rgba(245, 194, 107, 0.45)'
                      : 'none',
                    background: isActive
                      ? 'rgba(245, 194, 107, 0.12)'
                      : 'transparent',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: 'rgba(245, 194, 107, 0.12)',
                      boxShadow: '0 0 16px rgba(245, 194, 107, 0.35)',
                    },
                  }}
                >
                  <Icon size={22} />
                </IconButton>
              )}
            </Box>
          </Tooltip>
        )
      })}
    </MotionBox>
  )
}
