import React from 'react'
import { Box, Typography } from '@mui/material'

const advantages = [
    { id: 1, text: 'Все товары для детей в одном месте' },
    { id: 2, text: 'Цены ниже, чем у конкурентов' },
    { id: 3, text: 'Официальные дилеры лучших мировых производителей' },
    { id: 4, text: 'Собственное эко-производство' }
]

export default function Advantages() {
    return (
        <Box sx={{ width:'100%', maxWidth:'1500px', margin:'auto', px:{xs:'15px', md:'25px'}, py:{xs:'30px', md:'60px'}, textAlign:'center' }}>
            {/* Заголовок секции */}
            <Typography data-aos="fade-up" component="h2" sx={{ fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'22px', sm:'28px', md:'44px'}, fontWeight:700, lineHeight:1.3, maxWidth:'950px', margin:'0 auto 40px auto' }}>
                Карапуз - это онлайн гипермаркет товаров для детей. С нами вырастают поколения!
            </Typography>

            {/* Карточки преимуществ */}
            <Box sx={{ display:'grid', gridTemplateColumns:{xs:'1fr', sm:'repeat(2, 1fr)', lg:'repeat(4, 1fr)'}, gap:{xs:'15px', md:'20px'} }}>
                {advantages.map((item, index) => (
                    <Box key={item.id} data-aos="fade-up" data-aos-delay={index * 100} sx={{ border:'1px solid rgba(127,201,240,0.3)', borderRadius:'16px', p:{xs:'25px 15px', md:'35px 20px'}, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', bgcolor:'#FFFFFF', transition:'all 0.3s ease', '&:hover':{ borderColor:'#7FC9F0', boxShadow:'0 8px 24px rgba(127,201,240,0.15)' } }}>
                        {/* Иконка цифры в плавающей капле */}
                        <Box sx={{ width:'56px', height:'56px', borderRadius:'40% 60% 70% 30% / 40% 50% 60% 50%', bgcolor:'#7FC9F0', display:'flex', alignItems:'center', justifyContent:'center', color:'#FFFFFF', fontFamily:'"Balsamiq Sans", sans-serif', fontSize:'44px', fontWeight:700, mb:'20px', userSelect:'none' }}>
                            {item.id}
                        </Box>

                        {/* Текст */}
                        <Typography sx={{ color:'#446B80', fontSize:{xs:'16px', md:'22px'}, fontWeight:500, lineHeight:1.4, maxWidth:'220px' }}>
                            {item.text}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}