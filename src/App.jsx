import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'
import Payments from './pages/Payments'
import About from './pages/About'
import Food from './pages/Food'

function AppLayout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          padding: { xs: 3, md: 5 },
          paddingLeft: { xs: 3, md: 14 },
          marginLeft: { md: 8 },
        }}
      >
        {children}
        <Footer />
      </Box>
    </Box>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/about" element={<About />} />
          <Route path="/food" element={<Food />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
