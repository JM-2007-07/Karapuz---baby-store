
import React, { useRef } from 'react'
import img1 from '../assets/Коляска.svg'
import img2 from '../assets/Одежда.svg'
import img3 from '../assets/Кроватка.svg'
import img5 from '../assets/Автокресло.svg'
import img6 from '../assets/Постель.svg'
import img7 from '../assets/Коляска3.svg'
import img8 from '../assets/Коляска4.png'
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined, CurrencyRuble, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ButtonMain from './ButtonMain'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'

export default function Cards({title,showOldPrice = false,showNew = false}) {
    const swiperRef = useRef(null)
    const {addToCart} = useCart()
    const {toggleFavorite,isFavorite} = useFavorites()

    const offers = [
        {id:1,title:'Постельное белье Forest Sky (3 предмета)',price:2000,oldPrice:4000,image:img6},
        {id:2,title:'Кроватка Riko Basic, Польша',price:52000,oldPrice:64000,image:img3},
        {id:3,title:'Коляска Riko Basic, Польша',price:52000,oldPrice:122000,image:img8},
        {id:4,title:'Коляска Cybex Priam Lux, Польша',price:152000,oldPrice:222000,image:img1},
        {id:5,title:'Папитто Комплект',price:1600,oldPrice:2000,image:img2},
        {id:6,title:'Коляска Riko Basic, Польша',price:12000,oldPrice:14000,image:img7},
        {id:7,title:'Автокресло Welldon',price:132000,oldPrice:140000,image:img5}
    ]

    return (
        <Box sx={{width:'100%',maxWidth:'1500px',px:{xs:'15px',md:'25px'},margin:'auto',mt:{xs:'70px',md:'100px'},mb:{xs:'60px',md:'100px'},display:'flex',flexDirection:'column',gap:{xs:'30px',md:'30px'},textAlign:'center'}}>
            <Typography data-aos="fade-up" data-aos-duration="600" sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'38px',sm:'50px',md:'80px'},lineHeight:'1.15',color:'#446B80'}}>
                {title}
            </Typography>

            <Box data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" sx={{width:'100%'}}>
                <Swiper
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    spaceBetween={25}
                    slidesPerView={4}
                    speed={700}
                    breakpoints={{
                        0:{slidesPerView:1.15,spaceBetween:15},
                        480:{slidesPerView:1.5,spaceBetween:15},
                        600:{slidesPerView:2,spaceBetween:20},
                        900:{slidesPerView:3,spaceBetween:20},
                        1200:{slidesPerView:4,spaceBetween:25}
                    }}
                    style={{width:'100%',padding:'10px 0'}}
                >
                    {offers.map((offer) => {
                        const favorite = isFavorite(offer.id)

                        return (
                            <SwiperSlide key={offer.id} style={{height:'auto'}}>
                                <Box sx={{height:{xs:'500px',md:'520px'},p:'20px',boxShadow:'0px 0px 40px #0000000A',borderRadius:'12px',position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',textAlign:'center',bgcolor:'#FFFFFF',transition:'transform 0.3s ease, box-shadow 0.3s ease','&:hover':{transform:'translateY(-5px)',boxShadow:'0px 10px 45px #00000014'}}}>

                                    <Box sx={{height:{xs:'210px',md:'240px'},width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img src={offer.image} alt={offer.title} style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain'}} />
                                    </Box>

                                    <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'18px',color:'#446B80',maxWidth:'230px'}}>
                                        {offer.title}
                                    </Typography>

                                    <Box sx={{display:'flex',flexDirection:'column',gap:'4px',alignItems:'center'}}>
                                        <Box sx={{display:'flex',gap:'4px',alignItems:'center',fontSize:{xs:'21px',md:'24px'},fontWeight:'600',color:'#7FC9F0'}}>
                                            {offer.price} <CurrencyRuble sx={{fontSize:{xs:'20px',md:'24px'}}} />
                                        </Box>

                                        {showOldPrice && offer.oldPrice && (
                                            <Box sx={{display:'flex',gap:'4px',alignItems:'center',textDecoration:'line-through',fontSize:'16px',fontWeight:'500',color:'#446B80'}}>
                                                {offer.oldPrice} <CurrencyRuble sx={{fontSize:'16px'}} />
                                            </Box>
                                        )}
                                    </Box>

                                    <ButtonMain onClick={() => addToCart(offer)}>
                                        В корзину
                                    </ButtonMain>

                                    <Button sx={{textTransform:'none',borderRadius:'12px',height:'48px',color:'#7FC9F0',fontSize:'16px'}}>
                                        Купить в один клик
                                    </Button>

                                    <IconButton
                                        onClick={() => toggleFavorite(offer)}
                                        sx={{position:'absolute',top:'15px',right:'15px',color:'#7FC9F0'}}
                                    >
                                        {favorite ? <Favorite /> : <FavoriteBorder />}
                                    </IconButton>

                                    {showNew && (
                                        <Box sx={{width:'52px',height:'24px',position:'absolute',top:'15px',left:'15px',bgcolor:'#E5F4FC',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'600',color:'#446B80',fontSize:'12px'}}>
                                            NEW
                                        </Box>
                                    )}
                                </Box>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Box>

            <Box data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:{xs:'20px',md:'40px'},margin:'auto'}}>
                <IconButton onClick={() => swiperRef.current?.slidePrev()} sx={{p:0,transition:'transform 0.2s ease','&:hover':{transform:'scale(1.08)'}}}>
                    <ArrowCircleLeftOutlined sx={{color:'#446B80',width:{xs:'45px',md:'55px'},height:{xs:'45px',md:'55px'},transition:'0.3s','&:hover':{color:'#7FC9F0'}}} />
                </IconButton>

                <IconButton onClick={() => swiperRef.current?.slideNext()} sx={{p:0,transition:'transform 0.2s ease','&:hover':{transform:'scale(1.08)'}}}>
                    <ArrowCircleRightOutlined sx={{color:'#446B80',width:{xs:'45px',md:'55px'},height:{xs:'45px',md:'55px'},transition:'0.3s','&:hover':{color:'#7FC9F0'}}} />
                </IconButton>
            </Box>
        </Box>
    )
}
