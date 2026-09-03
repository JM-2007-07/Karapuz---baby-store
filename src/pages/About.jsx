import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useNavigate } from 'react-router'
import ButtonMain from '../components/ButtonMain'

export default function About() {
    const navigate = useNavigate()

    const advantages = [
        {
            icon:<FavoriteBorderIcon />,
            title:'С заботой о детях',
            text:'Мы выбираем товары так, словно покупаем их для своих собственных детей.'
        },
        {
            icon:<WorkspacePremiumOutlinedIcon />,
            title:'Проверенное качество',
            text:'Работаем только с надежными производителями и качественными материалами.'
        },
        {
            icon:<LocalShippingOutlinedIcon />,
            title:'Быстрая доставка',
            text:'Помогаем получить нужные товары быстро и максимально удобно.'
        },
        {
            icon:<SupportAgentOutlinedIcon />,
            title:'Всегда рядом',
            text:'Наша команда всегда готова помочь вам с выбором и ответить на вопросы.'
        }
    ]

    const stats = [
        { number:'10+', text:'лет заботы о детях' },
        { number:'25 000+', text:'довольных покупателей' },
        { number:'5 000+', text:'товаров в каталоге' },
        { number:'100%', text:'заботы и любви' }
    ]

    return (
        <Box sx={{ width:'100%', overflow:'hidden', pt:{xs:'105px',md:'150px'}, pb:{xs:'50px',md:'90px'} }}>

            {/* HERO */}

            <Box sx={{ width:'100%', maxWidth:'1500px', mx:'auto', px:{xs:'15px',md:'25px'}, mb:{xs:'70px',md:'110px'} }}>

                <Box sx={{ position:'relative', minHeight:{xs:'auto',md:'500px'}, borderRadius:{xs:'25px',md:'40px'}, overflow:'hidden', bgcolor:'#EEF9FD', display:'grid', gridTemplateColumns:{xs:'1fr',md:'1.1fr 0.9fr'}, alignItems:'center', p:{xs:'35px 20px',md:'70px'}, gap:{xs:'40px',md:'60px'} }}>

                    {/* Декоративные круги */}

                    <Box sx={{ position:'absolute', width:'350px', height:'350px', borderRadius:'50%', bgcolor:'rgba(127,201,240,0.15)', top:'-180px', right:'-120px' }} />

                    <Box sx={{ position:'absolute', width:'250px', height:'250px', borderRadius:'50%', bgcolor:'rgba(255,190,190,0.18)', bottom:'-120px', left:'-100px' }} />

                    {/* Текст */}

                    <Box data-aos="fade-right" sx={{ position:'relative', zIndex:2 }}>

                        <Box sx={{ display:'inline-flex', alignItems:'center', gap:'7px', bgcolor:'#FFFFFF', px:'14px', py:'7px', borderRadius:'30px', mb:'20px', boxShadow:'0 8px 25px rgba(68,107,128,0.08)' }}>
                            <ChildFriendlyOutlinedIcon sx={{ fontSize:'18px', color:'#7FC9F0' }} />

                            <Typography sx={{ color:'#446B80', fontSize:'13px', fontWeight:600 }}>
                                Детский магазин «Карапуз»
                            </Typography>
                        </Box>

                        <Typography sx={{ fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'32px',sm:'42px',md:'58px'}, fontWeight:700, lineHeight:1.1, mb:'20px' }}>
                            Всё лучшее
                            <Box component="span" sx={{ display:'block', color:'#7FC9F0' }}>
                                для счастливого
                            </Box>
                            детства
                        </Typography>

                        <Typography sx={{ maxWidth:'600px', color:'rgba(68,107,128,0.72)', fontSize:{xs:'14px',md:'16px'}, lineHeight:1.8, mb:'28px' }}>
                            Мы создали место, где родители могут найти всё необходимое для своих малышей. От первых дней жизни до первых больших открытий.
                        </Typography>

                        <Box sx={{ display:'flex', flexWrap:'wrap', gap:'12px' }}>

                            <ButtonMain onClick={() => navigate('/catalog')} sx={{ height:'48px', px:'24px', fontSize:'14px' }}>
                                Перейти в каталог
                            </ButtonMain>

                            <Button onClick={() => navigate('/contacts')} endIcon={<ArrowForwardIcon />} sx={{ color:'#446B80', textTransform:'none', fontSize:'14px', fontWeight:600, '&:hover':{ bgcolor:'transparent', color:'#7FC9F0' } }}>
                                Связаться с нами
                            </Button>

                        </Box>

                    </Box>

                    {/* Правая часть */}

                    <Box data-aos="fade-left" sx={{ position:'relative', zIndex:2, display:'flex', justifyContent:'center', alignItems:'center', minHeight:{xs:'260px',md:'400px'} }}>

                        <Box sx={{ width:{xs:'220px',md:'340px'}, height:{xs:'220px',md:'340px'}, borderRadius:'50%', bgcolor:'#FFFFFF', display:'flex', justifyContent:'center', alignItems:'center', boxShadow:'0 25px 70px rgba(68,107,128,0.12)', position:'relative' }}>

                            <ChildFriendlyOutlinedIcon sx={{ fontSize:{xs:'110px',md:'180px'}, color:'#7FC9F0' }} />

                            <Box sx={{ position:'absolute', top:{xs:'0px',md:'15px'}, right:{xs:'-25px',md:'-55px'}, bgcolor:'#FFFFFF', px:{xs:'12px',md:'18px'}, py:{xs:'10px',md:'14px'}, borderRadius:'18px', boxShadow:'0 15px 35px rgba(68,107,128,0.12)' }}>
                                <Typography sx={{ color:'#7FC9F0', fontSize:{xs:'20px',md:'28px'}, fontWeight:700 }}>
                                    10+
                                </Typography>

                                <Typography sx={{ color:'rgba(68,107,128,0.65)', fontSize:{xs:'10px',md:'12px'} }}>
                                    лет вместе
                                </Typography>
                            </Box>

                            <Box sx={{ position:'absolute', bottom:{xs:'5px',md:'15px'}, left:{xs:'-25px',md:'-55px'}, bgcolor:'#FFFFFF', px:{xs:'12px',md:'18px'}, py:{xs:'10px',md:'14px'}, borderRadius:'18px', boxShadow:'0 15px 35px rgba(68,107,128,0.12)' }}>
                                <Typography sx={{ color:'#446B80', fontSize:{xs:'20px',md:'28px'}, fontWeight:700 }}>
                                    25K+
                                </Typography>

                                <Typography sx={{ color:'rgba(68,107,128,0.65)', fontSize:{xs:'10px',md:'12px'} }}>
                                    покупателей
                                </Typography>
                            </Box>

                        </Box>

                    </Box>

                </Box>

            </Box>


            {/* НАША ИСТОРИЯ */}

            <Box sx={{ width:'100%', maxWidth:'1200px', mx:'auto', px:{xs:'15px',md:'25px'}, mb:{xs:'70px',md:'120px'} }}>

                <Box sx={{ display:'grid', gridTemplateColumns:{xs:'1fr',md:'0.8fr 1.2fr'}, gap:{xs:'40px',md:'90px'}, alignItems:'center' }}>

                    <Box data-aos="fade-right" sx={{ position:'relative', minHeight:{xs:'300px',md:'430px'}, borderRadius:'30px', bgcolor:'#F2FAFD', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>

                        <Box sx={{ width:'70%', height:'70%', borderRadius:'50%', bgcolor:'#7FC9F0', opacity:0.12, position:'absolute' }} />

                        <Box sx={{ width:'180px', height:'180px', borderRadius:'50%', bgcolor:'#FFFFFF', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 20px 60px rgba(68,107,128,0.12)', zIndex:2 }}>
                            <FavoriteBorderIcon sx={{ fontSize:'85px', color:'#7FC9F0' }} />
                        </Box>

                        <Box sx={{ position:'absolute', bottom:'25px', right:'25px', bgcolor:'#446B80', color:'#FFFFFF', p:'18px', borderRadius:'20px', maxWidth:'180px' }}>
                            <Typography sx={{ fontFamily:'"Balsamiq Sans", sans-serif', fontSize:'18px', fontWeight:700, mb:'4px' }}>
                                Наша миссия
                            </Typography>

                            <Typography sx={{ fontSize:'12px', opacity:0.8, lineHeight:1.5 }}>
                                Делать детство ярче и счастливее.
                            </Typography>
                        </Box>

                    </Box>


                    <Box data-aos="fade-left">

                        <Typography sx={{ color:'#7FC9F0', fontSize:'13px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', mb:'12px' }}>
                            О нас
                        </Typography>

                        <Typography sx={{ fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'30px',md:'42px'}, fontWeight:700, lineHeight:1.2, mb:'20px' }}>
                            Мы понимаем родителей, потому что заботимся о самом важном
                        </Typography>

                        <Typography sx={{ color:'rgba(68,107,128,0.72)', fontSize:'15px', lineHeight:1.8, mb:'18px' }}>
                            «Карапуз» — это современный детский магазин, созданный для родителей, которые хотят выбирать для своих детей только лучшее.
                        </Typography>

                        <Typography sx={{ color:'rgba(68,107,128,0.72)', fontSize:'15px', lineHeight:1.8, mb:'25px' }}>
                            Мы тщательно отбираем товары, следим за качеством и стараемся сделать процесс покупок максимально приятным, удобным и спокойным.
                        </Typography>

                        <Box sx={{ display:'flex', flexDirection:'column', gap:'12px' }}>

                            {[
                                'Качественные и безопасные товары',
                                'Известные и проверенные бренды',
                                'Внимательное отношение к каждому покупателю',
                                'Удобный и современный сервис'
                            ].map((item, index) => (

                                <Box key={index} sx={{ display:'flex', alignItems:'center', gap:'10px' }}>

                                    <CheckCircleOutlinedIcon sx={{ color:'#7FC9F0', fontSize:'22px' }} />

                                    <Typography sx={{ color:'#446B80', fontSize:'14px', fontWeight:500 }}>
                                        {item}
                                    </Typography>

                                </Box>

                            ))}

                        </Box>

                    </Box>

                </Box>

            </Box>


            {/* ЦИФРЫ */}

            <Box sx={{ bgcolor:'#446B80', py:{xs:'50px',md:'70px'}, mb:{xs:'70px',md:'110px'} }}>

                <Box sx={{ maxWidth:'1200px', mx:'auto', px:{xs:'15px',md:'25px'}, display:'grid', gridTemplateColumns:{xs:'1fr 1fr',md:'repeat(4,1fr)'}, gap:{xs:'35px',md:'20px'} }}>

                    {stats.map((item, index) => (

                        <Box key={index} data-aos="zoom-in" data-aos-delay={index * 100} sx={{ textAlign:'center' }}>

                            <Typography sx={{ fontFamily:'"Balsamiq Sans", sans-serif', color:'#FFFFFF', fontSize:{xs:'30px',md:'42px'}, fontWeight:700 }}>
                                {item.number}
                            </Typography>

                            <Typography sx={{ color:'rgba(255,255,255,0.7)', fontSize:{xs:'12px',md:'14px'}, mt:'5px' }}>
                                {item.text}
                            </Typography>

                        </Box>

                    ))}

                </Box>

            </Box>


            {/* ПРЕИМУЩЕСТВА */}

            <Box sx={{ width:'100%', maxWidth:'1200px', mx:'auto', px:{xs:'15px',md:'25px'}, mb:{xs:'70px',md:'110px'} }}>

                <Box sx={{ textAlign:'center', maxWidth:'650px', mx:'auto', mb:{xs:'35px',md:'55px'} }}>

                    <Typography sx={{ color:'#7FC9F0', fontSize:'13px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', mb:'12px' }}>
                        Почему выбирают нас
                    </Typography>

                    <Typography sx={{ fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'30px',md:'42px'}, fontWeight:700, mb:'15px' }}>
                        Маленькие детали, которые имеют большое значение
                    </Typography>

                    <Typography sx={{ color:'rgba(68,107,128,0.65)', fontSize:'14px', lineHeight:1.7 }}>
                        Мы стараемся сделать каждую покупку приятной частью заботы о вашем малыше.
                    </Typography>

                </Box>


                <Box sx={{ display:'grid', gridTemplateColumns:{xs:'1fr',sm:'1fr 1fr',md:'repeat(4,1fr)'}, gap:'20px' }}>

                    {advantages.map((item, index) => (

                        <Box key={index} data-aos="fade-up" data-aos-delay={index * 100} sx={{ bgcolor:'#FFFFFF', border:'1px solid rgba(127,201,240,0.18)', borderRadius:'22px', p:'25px', minHeight:'250px', transition:'0.3s', '&:hover':{ transform:'translateY(-8px)', boxShadow:'0 20px 45px rgba(68,107,128,0.12)', borderColor:'rgba(127,201,240,0.5)' } }}>

                            <Box sx={{ width:'58px', height:'58px', borderRadius:'18px', bgcolor:'rgba(127,201,240,0.13)', color:'#7FC9F0', display:'flex', alignItems:'center', justifyContent:'center', mb:'20px', '& svg':{ fontSize:'28px' } }}>
                                {item.icon}
                            </Box>

                            <Typography sx={{ color:'#446B80', fontSize:'17px', fontWeight:700, mb:'10px' }}>
                                {item.title}
                            </Typography>

                            <Typography sx={{ color:'rgba(68,107,128,0.65)', fontSize:'13px', lineHeight:1.7 }}>
                                {item.text}
                            </Typography>

                        </Box>

                    ))}

                </Box>

            </Box>


            {/* CTA */}

            <Box sx={{ width:'100%', maxWidth:'1200px', mx:'auto', px:{xs:'15px',md:'25px'} }}>

                <Box data-aos="zoom-in" sx={{ position:'relative', overflow:'hidden', borderRadius:{xs:'25px',md:'35px'}, bgcolor:'#7FC9F0', p:{xs:'40px 20px',md:'65px'}, textAlign:'center' }}>

                    <Box sx={{ position:'absolute', width:'300px', height:'300px', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.2)', top:'-170px', left:'-100px' }} />

                    <Box sx={{ position:'absolute', width:'350px', height:'350px', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.2)', bottom:'-220px', right:'-100px' }} />

                    <Box sx={{ position:'relative', zIndex:2 }}>

                        <Typography sx={{ fontFamily:'"Balsamiq Sans", sans-serif', color:'#FFFFFF', fontSize:{xs:'30px',md:'46px'}, fontWeight:700, mb:'15px' }}>
                            Всё для счастливого детства
                        </Typography>

                        <Typography sx={{ maxWidth:'600px', mx:'auto', color:'rgba(255,255,255,0.85)', fontSize:{xs:'14px',md:'16px'}, lineHeight:1.7, mb:'28px' }}>
                            Откройте мир качественных товаров для малышей и сделайте каждый день вашего ребёнка ещё комфортнее.
                        </Typography>

                        <Button onClick={() => navigate('/catalog/cribs')} endIcon={<ArrowForwardIcon />} sx={{ bgcolor:'#FFFFFF', color:'#446B80', px:'25px', height:'50px', borderRadius:'30px', textTransform:'none', fontSize:'14px', fontWeight:700, '&:hover':{ bgcolor:'#446B80', color:'#FFFFFF' } }}>
                            Смотреть каталог
                        </Button>

                    </Box>

                </Box>

            </Box>

        </Box>
    )
}