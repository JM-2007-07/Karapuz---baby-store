import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
const advantages = [
    {id:1,key:'allProducts'},
    {id:2,key:'lowPrices'},
    {id:3,key:'officialDealers'},
    {id:4,key:'ecoProduction'}
]
export default function Advantages() {
    const {t} = useTranslation()
    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},py:{xs:'30px',md:'60px'},textAlign:'center'}}>
            <Typography data-aos="fade-up" component="h2" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'22px',sm:'28px',md:'44px'},fontWeight:700,lineHeight:1.3,maxWidth:'950px',margin:'0 auto 40px auto'}}>
                {t('advantages.title')}
            </Typography>
            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'},gap:{xs:'15px',md:'20px'}}}>
                {advantages.map((item,index) => (
                    <Box key={item.id} data-aos="fade-up" data-aos-delay={index * 100} sx={{border:'1px solid rgba(127,201,240,0.3)',borderRadius:'16px',p:{xs:'25px 15px',md:'35px 20px'},display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',bgcolor:'#FFFFFF',transition:'all 0.3s ease','&:hover':{borderColor:'#7FC9F0',boxShadow:'0 8px 24px rgba(127,201,240,0.15)'}}}>
                        <Box sx={{width:'56px',height:'56px',borderRadius:'40% 60% 70% 30% / 40% 50% 60% 50%',bgcolor:'#7FC9F0',display:'flex',alignItems:'center',justifyContent:'center',color:'#FFFFFF',fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'44px',fontWeight:700,mb:'20px',userSelect:'none'}}>
                            {item.id}
                        </Box>
                        <Typography sx={{color:'#446B80',fontSize:{xs:'16px',md:'22px'},fontWeight:500,lineHeight:1.4,maxWidth:'220px'}}>
                            {t(`advantages.${item.key}`)}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}