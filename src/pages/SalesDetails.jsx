import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, Navigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { promotions } from '../data/salesData'
export default function SalesDetails() {
    const { id } = useParams()
    const { t } = useTranslation()
    const promo = promotions.find((item) => item.id === Number(id))
    if (!promo) {
        return <Navigate to="/sales" replace />
    }
    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'120px',md:'180px'},pb:{xs:'20px',md:'40px'}}}>
            <Box data-aos="fade-right" sx={{display:'flex',alignItems:'center',gap:'8px',mb:'20px',flexWrap:'wrap'}}>
                <Typography component={Link} to="/" sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>
                    {t('salesDetails.breadcrumbs.home')}
                </Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>›</Typography>
                <Typography component={Link} to="/sales" sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>
                    {t('salesDetails.breadcrumbs.sales')}
                </Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>›</Typography>
                <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500,maxWidth:{xs:'240px',md:'none'},whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                    {t(`sales.promotions.${promo.id}.title`)}
                </Typography>
            </Box>
            <Box data-aos="zoom-in" sx={{width:'100%',maxWidth:'1100px',margin:'auto',height:{xs:'220px',sm:'380px',md:'500px'},borderRadius:'20px',overflow:'hidden',mb:{xs:'24px',md:'40px'},boxShadow:'0px 0px 40px #0000000A'}}>
                <Box component="img" src={promo.image} alt={t(`sales.promotions.${promo.id}.title`)} sx={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </Box>
            <Box sx={{maxWidth:'920px',margin:'auto'}}>
                <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'26px',sm:'36px',md:'44px'},fontWeight:700,mb:'8px',lineHeight:1.2}}>
                    {t(`sales.promotions.${promo.id}.title`)}
                </Typography>
                <Typography data-aos="fade-up" data-aos-delay="50" sx={{color:'rgba(68,107,128,0.5)',fontSize:'14px',mb:{xs:'20px',md:'30px'}}}>
                    {t(`sales.promotions.${promo.id}.date`)}
                </Typography>
                {promo.paragraphs.map((text,i) => (
                    <Typography key={i} data-aos="fade-up" data-aos-delay={100 + i * 50} sx={{color:'#446B80',fontSize:{xs:'14px',md:'16px'},lineHeight:1.7,mb:'20px'}}>
                        {t(`sales.promotions.${promo.id}.paragraphs.${i}`)}
                    </Typography>
                ))}
            </Box>
        </Box>
    )
}