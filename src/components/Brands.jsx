import React from 'react'
import { Box, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

// Импорты логотипов (замени на свои пути)
import cybexLogo from '../assets/Cybex.svg'
import erbesiLogo from '../assets/Erbesi.svg'

const brands = [
    { id: 1, name: 'Cybex', logo: cybexLogo },
    { id: 2, name: 'Erbesi', logo: erbesiLogo },
    { id: 3, name: 'Cybex', logo: cybexLogo },
    { id: 4, name: 'Erbesi', logo: erbesiLogo },
    { id: 5, name: 'Cybex', logo: cybexLogo },
    { id: 6, name: 'Erbesi', logo: erbesiLogo }
]

export default function Brands() {
    return (
        <Box sx={{ width:'100%', maxWidth:'1500px', margin:'auto', px:{xs:'15px', md:'25px'}, py:{xs:'25px', md:'40px'} }}>
            <Box sx={{ display:'flex', alignItems:'center', gap:{xs:'10px', md:'20px'} }}>
                {/* Кнопка влево */}
                <IconButton className="brand-prev-btn" sx={{ width:'40px', height:'40px', border:'2px solid #446B80', color:'#446B80', flexShrink:0, transition:'all 0.2s ease', '&:hover':{ bgcolor:'#446B80', color:'#FFFFFF' } }}>
                    <ArrowBackIcon sx={{ fontSize:'20px' }} />
                </IconButton>

                {/* Слайдер */}
                <Box sx={{ width:'100%', overflow:'hidden' }}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{ prevEl: '.brand-prev-btn', nextEl: '.brand-next-btn' }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            600: { slidesPerView: 3 },
                            900: { slidesPerView: 4 },
                            1200: { slidesPerView: 5 }
                        }}
                    >
                        {brands.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', height:'80px', opacity:0.85, transition:'opacity 0.2s', '&:hover':{ opacity:1 } }}>
                                    <Box component="img" src={brand.logo} alt={brand.name} sx={{ maxWidth:'140px', maxHeight:'45px', objectFit:'contain' }} />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>

                {/* Кнопка вправо */}
                <IconButton className="brand-next-btn" sx={{ width:'40px', height:'40px', border:'2px solid #446B80', color:'#446B80', flexShrink:0, transition:'all 0.2s ease', '&:hover':{ bgcolor:'#446B80', color:'#FFFFFF' } }}>
                    <ArrowForwardIcon sx={{ fontSize:'20px' }} />
                </IconButton>
            </Box>
        </Box>
    )
}