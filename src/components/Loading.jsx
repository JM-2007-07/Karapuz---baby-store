import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

export default function Loading() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <Box sx={{ width: 70, height: 70, borderRadius: '50%', backgroundColor: 'rgba(70, 163, 88, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress size={40} thickness={3.5} sx={{ color: '#46A358' }} />
      </Box>
      <Typography sx={{ color: '#727272', fontSize: '14px', fontWeight: 500, letterSpacing: '0.3px' }}>
        Loading...
      </Typography>
    </Box>
  )
}
