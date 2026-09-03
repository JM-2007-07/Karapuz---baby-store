import { Button } from '@mui/material'
import React from 'react'

export default function ButtonMain({children, onClick}) {
  return (
    <Button onClick={onClick} sx={{bgcolor:'#7FC9F0', color:'white', borderRadius:'12px', height:'48px', px: 2, fontSize:"16px", fontWeight:'500', textTransform:'none', display:'flex', justifyContent:'center', alignItems:'center', gap:'12px'}}>
        {children}
    </Button>
  )
}
