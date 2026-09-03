import React from 'react'
import { Box, Typography } from '@mui/material'
import ButtonMain from '../components/ButtonMain'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
export default function NotFound() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <Box sx={{width:'100%',minHeight:'70vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',px:{xs:'15px',md:'25px'},pt:{xs:'120px',md:'180px'},pb:{xs:'20px',md:'40px'}}}>
            <Typography data-aos="zoom-in" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#8CAEC1',fontSize:{xs:'100px',sm:'150px',md:'200px'},fontWeight:700,lineHeight:1,mb:{xs:'10px',md:'20px'},userSelect:'none'}}>
                404
            </Typography>
            <Typography data-aos="fade-up" data-aos-delay="50" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'24px',sm:'32px',md:'40px'},fontWeight:700,mb:'12px'}}>
                {t('notFound.title')}
            </Typography>
            <Typography data-aos="fade-up" data-aos-delay="100" sx={{color:'#446B80',fontSize:{xs:'14px',md:'16px'},maxWidth:'480px',lineHeight:1.5,mb:{xs:'25px',md:'35px'}}}>
                {t('notFound.description')}<br />
                {t('notFound.descriptionSecond')}
            </Typography>
            <Box data-aos="fade-up" data-aos-delay="150">
                <ButtonMain onClick={() => navigate('/')} sx={{px:'36px',height:'46px',fontSize:'15px',textDecoration:'none',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
                    {t('notFound.homeButton')}
                </ButtonMain>
            </Box>
        </Box>
    )
}