import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router'
import { promotions } from '../data/salesData'

export default function Sales() {
    const navigate = useNavigate()
    return (
        <Box sx={{width:'100%', maxWidth:'1500px', margin:'auto', px:{xs:'15px', md:'25px'}, pt:{xs:'120px', md:'180px'}, pb:{xs:'20px', md:'40px'}}}>
            <Box data-aos="fade-right" sx={{display:'flex', alignItems:'center', gap:'8px', mb:'15px'}}>
                <Typography component={Link} to="/" sx={{textDecoration:'none', color:'rgba(68,107,128,0.6)', fontSize:'14px'}}>Главная</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)', fontSize:'14px'}}>›</Typography>
                <Typography sx={{color:'#446B80', fontSize:'14px', fontWeight:500}}>Акции</Typography>
            </Box>

            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'32px', md:'48px'}, fontWeight:700, mb:{xs:'25px', md:'40px'}}}>
                Акции
            </Typography>

            <Box sx={{display:'grid', gridTemplateColumns:{xs:'1fr', md:'repeat(2, 1fr)'}, gap:{xs:'20px', md:'30px'}}}>
                {promotions.map((promo, i) => (
                    <Box key={promo.id} data-aos="fade-up" data-aos-delay={(i % 2) * 100} onClick={() => navigate(`/sales/${promo.id}`)} sx={{textDecoration:'none', display:'block'}}>
                        <Box sx={{width:'100%', height:{xs:'180px', sm:'260px', md:'254px'}, borderRadius:'16px', overflow:'hidden', mb:'12px', boxShadow:'0px 0px 40px #0000000A', transition:'transform 0.3s ease', '&:hover':{transform:'scale(1.01)'}}}>
                            <Box component="img" src={promo.image} alt={promo.title} sx={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
                        </Box>

                        <Typography sx={{color:'rgba(68,107,128,0.5)', fontSize:'13px', mb:'6px'}}>
                            {promo.date}
                        </Typography>

                        <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'16px', md:'18px'}, fontWeight:700, lineHeight:1.3, transition:'color 0.2s ease', '&:hover':{color:'#7FC9F0'}}}>
                            {promo.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}