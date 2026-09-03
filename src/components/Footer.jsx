import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router'
import { Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material'

export default function Footer() {
    const footerLinks = [
        [
            {name:'О нас', path:'/about'},
            {name:'Акции', path:'/sales'},
            {name:'Блог', path:'/blog'},
            {name:'Контакты', path:'/contacts'}
        ],
        [
            {name:'Возврат и гарантия', path:'/return'},
            {name:'Оплата и доставка', path:'/payment'}
        ],
        [
            {name:'Оптовым клиентам', path:'/wholesale'}
        ]
    ]

    const socials = [
        {icon:<Instagram />, name:'Instagram'},
        {icon:<WhatsApp />, name:'WhatsApp'},
        {icon:<Twitter />, name:'Twitter'},
        {icon:<Facebook />, name:'Facebook'}
    ]

    return (
        <>
            <Box component="footer" sx={{width:'100%', mt:{xs:'70px', md:'100px'}, borderTop:'1px solid rgba(127,201,240,0.28)', bgcolor:'rgba(255,255,255,0.45)', backdropFilter:'blur(18px)', display:'flex', justifyContent:'center', alignItems:'center', pt:{xs:'40px', md:'60px'}, pb:{xs:'20px', md:'30px'}}}>
                <Box sx={{width:'100%', maxWidth:'1500px', px:{xs:'15px', sm:'25px', md:'35px'}, display:'flex', flexDirection:'column', gap:{xs:'35px', md:'40px'}}}>
                    
                    <Box sx={{width:'100%', display:'grid', gridTemplateColumns:{xs:'1fr', sm:'1fr 1fr', md:'1.5fr 1fr 1fr 1fr 1.2fr'}, gap:{xs:'30px', sm:'35px', md:'30px'}, alignItems:'start'}}>
                        
                        <Box sx={{display:'flex', gap:'10px', alignItems:'center', justifyContent:{xs:'center', md:'flex-start'}, textAlign:{xs:'center', md:'start'}}}>
                            <img src={logo} alt="Карапуз" style={{width:'60px', height:'60px', objectFit:'contain'}} />
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif', width:'164px', color:'#446B80', fontSize:{xs:'13px', md:'15px'}, lineHeight:'1.4'}}>
                                Онлайн гипермаркет товаров для детей
                            </Typography>
                        </Box>

                        {footerLinks.map((group, groupIndex) => (
                            <Box key={groupIndex} sx={{display:'flex', flexDirection:'column', alignItems:{xs:'center', md:'flex-start'}, textAlign:{xs:'center', md:'start'}, color:'#446B80', gap:'14px'}}>
                                {group.map((item, i) => (
                                    <Link key={i} to={item.path} style={{textDecoration:'none', color:'#446B80', fontSize:'15px', transition:'0.3s'}}>
                                        {item.name}
                                    </Link>
                                ))}
                            </Box>
                        ))}

                        <Box sx={{display:'flex', flexDirection:'column', alignItems:{xs:'center', md:'flex-start'}, color:'#446B80', gap:'14px'}}>
                            <Typography sx={{fontSize:'15px', fontWeight:'500'}}>
                                Мы в социальных сетях
                            </Typography>

                            <Box sx={{display:'flex', gap:'4px'}}>
                                {socials.map((social, i) => (
                                    <IconButton key={i} aria-label={social.name} sx={{color:'#7FC9F0', transition:'0.3s', '&:hover':{transform:'translateY(-3px)', bgcolor:'rgba(127,201,240,0.1)'}}}>
                                        {React.cloneElement(social.icon, {sx:{color:'#7FC9F0'}})}
                                    </IconButton>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{width:'100%', height:'1px', bgcolor:'rgba(127,201,240,0.18)'}} />

                    <Box sx={{width:'100%', display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:'center', justifyContent:'space-between', gap:{xs:'12px', sm:'20px'}, color:'#446B80', textAlign:'center'}}>
                        <Typography sx={{fontSize:{xs:'12px', md:'14px'}}}>
                            Ⓒ 2020 karapuz05.ru
                        </Typography>

                        <Typography sx={{fontSize:{xs:'12px', md:'14px'}, lineHeight:'1.5'}}>
                            Пользовательское соглашение / политика конфиденциальности
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}